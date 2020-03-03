let { Checkbox, Text, Relationship } = require("@keystonejs/fields");
let { own } = require("./config/access");

module.exports = {
  ref: "Bill",
  config: {
    fields: {
      customer: {
        type: Relationship,
        ref: "Customer",
        isRequired: true
      },
      products: {
        type: Relationship,
        ref: "Product",
        many: true,
        isRequired: true
      },
      done: {
        type: Checkbox,
        label: "Đã hoàn thành?"
      },
      seller: {
        type: Relationship,
        ref: "User"
      }
    },

    hooks: {
      resolveInput: async ({ resolvedData, context }) => {
        if (context.authedItem && !context.authedItem.isAdmin)
          resolvedData.seller = context.authedItem.id;
        return resolvedData;
      }
    },
    label: "Đơn",
    access: own
  }
};
