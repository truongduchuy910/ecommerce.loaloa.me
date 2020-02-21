const { Text, Checkbox, Password } = require("@keystonejs/fields");

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};
const notThisAdmin = ({ authentication: { item: user } }) => {
  if (user && user.isAdmin) {
    return { not_id: user.id };
  } else return false;
};
const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

module.exports = {
  fields: {
    seller: { type: Text },
    email: {
      type: Text,
      isUnique: true
    },
    isAdmin: { type: Checkbox },
    password: {
      type: Password
    },
    pages_access_token: {
      type: Text,
      access: {
        read: access.userIsAdmin
      }
    },
    pages_id: {
      type: Text,
      access: {
        read: access.userIsAdmin
      }
    },
    psid: {
      type: Text,
      access: {
        read: access.userIsAdmin
      }
    },
    port: {
      type: Text
    }
  },
  access: {
    read: true,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin
  },
  label: "Tài khoản"
};
