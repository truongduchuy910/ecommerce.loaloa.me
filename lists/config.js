const axios = require("axios");

module.exports.hooks = (fileAdapter = {}) => ({
  afterDelete: ({ existingItem = {} }) => {
    if (fileAdapter && fileAdapter.delete) fileAdapter.delete(existingItem);
  },
  resolveInput: ({ existingItem, resolvedData, context }) => {
    if (resolvedData.file && !resolvedData.name)
      resolvedData.name = resolvedData.file.originalFilename;
    if (context.authedItem && !context.authedItem.isAdmin)
      resolvedData.seller = context.authedItem.id;
    if (resolvedData.products && resolvedData.customer) {
      axios.post(messenger.uri, {
        access_token: context.authedItem.pages_access_token,
        recipient: {
          id: context.authedItem.psid
        },
        messaging_type: "RESPONSE",
        message: {
          attachment: {
            type: "template",
            payload: {
              template_type: "button",
              text: `Có đơn đặt hàng mới từ ${resolvedData.customer}`,
              buttons: [
                {
                  type: "web_url",
                  url: `https://ad.loaloa.me/admin/bills?!customer_is=%22${resolvedData.customer}%22`,
                  title: "Xem chi tiết"
                }
              ]
            }
          }
        }
      });
    }
    return resolvedData;
  }
});
const user = ({ authentication: { item: user } }) => {
  return Boolean(user && !user.isAdmin);
};

const userIsAdmin = ({ authentication: { item: user } }) => {
  return Boolean(user && user.isAdmin);
};
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (user && !user.isAdmin) {
    return { seller: { id: user.id } };
  }
  return false;
};
const public = ({ authentication: { item: user } }) => {
  return true;
  if (user && !user.isAdmin) {
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

module.exports.public = {
  create: true,
  update: true,
  delete: true,
  read: access.public
};
module.exports.owner = {
  create: access.user,
  update: access.user,
  delete: access.userOwnsItem,
  read: access.public
};
module.exports.privateField = {
  create: access.userIsAdmin,
  update: access.userIsAdmin,
  detele: access.userIsAdmin,
  read: access.userIsAdmin
};
module.exports.privateList = {
  create: access.userIsAdmin,
  update: access.userIsAdmin,
  delete: access.userIsAdmin,
  read: access.userIsAdminOrOwner
};
