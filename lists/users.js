let { Relationship, Text, Checkbox, Password } = require("@keystonejs/fields");
let { own, admin } = require("./config/access");

module.exports = {
  ref: "User",
  config: {
    fields: {
      email: {
        type: Text,
        isUnique: true,
        label: "Tài khoản",
      },
      password: {
        type: Password,
        label: "Mật khẩu",
      },
      page_access_token: { type: Text },
      psid: { type: Text },
      isAdmin: { type: Checkbox },
      isSeller: { type: Checkbox },
    },
    label: "Tài khoản",
    labelField: "email",
    access: {
      create: ({ authentication: { item: user } }) => {
        return true;
      },
      update: ({ authentication: { item: user } }) => {
        if (user) {
          if (user.isAdmin) return true;
          else return { id: user.id };
        } else return false;
      },
      delete: ({ authentication: { item: user } }) => {
        if (user) {
          if (user.isAdmin) return true;
          else return { id: user.id };
        } else return false;
      },
      read: ({ authentication: { item: user } }) => {
        if (user) {
          if (user.isAdmin) return true;
          if (user.isSeller) return { id: user.id };
          return true;
        } else return { isSeller: true };
      },
    },
  },
};
