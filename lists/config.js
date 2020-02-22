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

    if (resolvedData.products.length && resolvedData.customer) {
      axios
        .post("https://graph.facebook.com/v6.0/me/messages", {
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
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
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
//EAAExUahkTb0BACitsenFKxpJ7ZAuilJh5WPX9fd91I6QHZBmUG8RJ3R7WwB3QlN5XiS1ebph8QVar85Uv3whBybmypX40fHCtJsd9MZACwdO1WEyRj7b0KZAVdEPzoZCYeZArIn2PmeJQl5NZC8EqcCkikl5ZAZB3Ww6lab89Bq8Cmb9WtIaBUNn8ZBe4tnR88NbYZD
