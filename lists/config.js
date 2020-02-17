module.exports.hooks = (fileAdapter = {}) => ({
  afterDelete: ({ existingItem = {} }) => {
    if (fileAdapter) fileAdapter.delete(existingItem);
  },
  resolveInput: ({ existingItem, resolvedData, context }) => {
    if (resolvedData.file && !resolvedData.name)
      resolvedData.name = resolvedData.file.originalFilename;
    resolvedData.seller = context.authedItem.id;
    return resolvedData;
  }
});
const user = ({ authentication: { item: user } }) => {
  return Boolean(user);
};

const userIsAdmin = ({ authentication: { item: user } }) => {
  return Boolean(user && user.isAdmin);
};
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  if (user.isAdmin) return true;
  return { seller: { id: user.id } };
};
const public = ({ authentication: { item: user } }) => {
  if (!user) {
    return true;
  }
  if (user.isAdmin) return true;
  return { seller: { id: user.id } };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
const access = {
  user,
  userIsAdmin,
  userOwnsItem,
  public,
  userIsAdminOrOwner
};
module.exports.owner = {
  create: access.user,
  update: access.userOwnsItem,
  delete: access.userOwnsItem,
  read: access.public
};
module.exports.admin = {
  create: access.userIsAdmin,
  update: access.userIsAdmin,
  delete: access.userIsAdmin,
  read: access.userIsAdminOrOwner
};
module.exports.public = {
  create: public,
  update: access.userOwnsItem,
  delete: access.userOwnsItem,
  read: public
};
