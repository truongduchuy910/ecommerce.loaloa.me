module.exports.hooks = (fileAdapter = {}) => ({
  afterDelete: ({ existingItem = {} }) => {
    if (fileAdapter && fileAdapter.delete) fileAdapter.delete(existingItem);
  },
  resolveInput: ({ existingItem, resolvedData, context }) => {
    if (resolvedData.file && !resolvedData.name)
      resolvedData.name = resolvedData.file.originalFilename;
    if (context.authedItem) resolvedData.seller = context.authedItem.id;
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
  if (user) {
    return { seller: { id: user.id } };
  }
  return true;
};
const public = ({ authentication: { item: user } }) => {
  if (user) {
    return { seller: { id: user.id } };
  }
  return true;
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
  create: true,
  update: true,
  delete: true,
  read: access.public
};
