let { Text, Relationship } = require("@keystonejs/fields");
const { public, admin } = require("./config/access");
module.exports = {
  ref: "Customer",
  config: {
    fields: {
      phone: {
        type: Text,
        isRequired: true
      },
      name: {
        type: Text
      },
      address: {
        type: Text
      },
      seller: {
        type: Relationship,
        ref: "User"
      },
      cart: {
        type: Relationship,
        ref: "Product",
        many: true
      }
    },

    hooks: {
      resolveInput: async ({ resolvedData, context }) => {
        console.log(resolvedData);
        if (context.authedItem && !context.authedItem.isAdmin)
          resolvedData.seller = context.authedItem.id;
        return resolvedData;
      }
    },
    label: "Khách hàng",
    access: public
  }
};
