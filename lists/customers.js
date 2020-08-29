let { Text, Relationship, Checkbox } = require("@keystonejs/fields");
const { publicOrownSeller, admin, own, ownSeller } = require("./config/access");
module.exports = {
  ref: "Customer",
  config: {
    fields: {
      phone: {
        type: Text,
        isRequired: true,
      },
      name: {
        type: Text,
      },
      address: {
        type: Text,
      },
      isDefault: {
        type: Checkbox,
      },
      ofSeller: {
        type: Relationship,
        ref: "User",
      },
      // create by
      seller: {
        type: Relationship,
        ref: "User",
      },
    },

    hooks: {
      resolveInput: async ({ resolvedData, context }) => {
        console.log(resolvedData);
        if (context.authedItem && !context.authedItem.isAdmin)
          resolvedData.seller = context.authedItem.id;
        return resolvedData;
      },
    },
    label: "Khách hàng",
    access: publicOrownSeller,
  },
};
