let { Text, Checkbox, Password } = require("@keystonejs/fields");
let { access, admin } = require("./config/access");

module.exports = {
  ref: "User",
  config: {
    fields: {
      email: {
        type: Text,
        isUnique: true,
        isRequired: true,
        label: "Tài khoản"
      },
      isAdmin: { type: Checkbox },
      password: {
        type: Password,
        label: "Mật khẩu"
      },
      facebookId: { type: Text }
    },
    label: "Tài khoản",
    labelField: "email",
    access: {
      create: access.admin,
      update: access.admin,
      delete: access.admin,
      read: ({ authentication: { item: user } }) => {
        if (user && !user.isAdmin) {
          return { id: user.id };
        } else return true;
      }
    }
  }
};
