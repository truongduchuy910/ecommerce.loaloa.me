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
      isAdmin: { type: Checkbox },
      password: {
        type: Password,
        label: "Mật khẩu",
      },
      name: { type: Text },
      phone: { type: Text },
      address: { type: Text },
      page_id: { type: Text },
      page_access_token: { type: Text },
      psid: { type: Text },
      user_defined_payload: { type: Text },
      one_time_token: { type: Text },
      seller: {
        type: Relationship,
        ref: "User",
      },
    },
    label: "Tài khoản",
    labelField: "email",
    access: {
      create: ({ authentication: { item: user } }) => {
        if (user && user.isAdmin) {
          return true;
        } else return false;
      },
      update: ({ authentication: { item: user } }) => {
        if (user && !user.isAdmin) {
          return true;
        } else return false;
      },
      delete: ({ authentication: { item: user } }) => {
        if (user && !user.isAdmin) {
          return true;
        } else return false;
      },
      read: ({ authentication: { item: user } }) => {
        if (user) {
          if (user.isAdmin) return true;
          return { id: user.id };
        } else return false;
      },
    },
    hooks: {
      afterDelete: async ({ existingItem = {} }) => {
        fileAdapter.delete(existingItem);
      },
      resolveInput: async ({ resolvedData, context }) => {
        if (resolvedData.file && !resolvedData.name)
          resolvedData.name = resolvedData.file.originalFilename;

        if (context.authedItem && !context.authedItem.isAdmin)
          resolvedData.seller = context.authedItem.id;
        return resolvedData;
      },
    },
  },
};
