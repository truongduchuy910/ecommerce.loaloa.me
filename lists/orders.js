let { Checkbox, Text, Relationship } = require("@keystonejs/fields");
let { DateTimeUtc } = require("@keystonejs/fields-datetime-utc");
module.exports = {
  ref: "Order",
  config: {
    fields: {
      customer: {
        type: Relationship,
        ref: "Customer",
        isRequired: true,
      },
      items: {
        type: Relationship,
        ref: "Product",
        many: true,
        isRequired: true,
      },
      time: {
        type: DateTimeUtc,
      },
      seller: {
        type: Relationship,
        ref: "User",
      },
    },

    hooks: {
      validateInput: async ({ resolvedData, context, actions: { query } }) => {
        resolvedData.seller = user.id;
        resolvedData.time = Date();
        return resolvedData;
      },
    },
    label: "Đơn",
    access: public,
  },
};
