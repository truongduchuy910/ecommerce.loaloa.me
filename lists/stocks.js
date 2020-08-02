let { Checkbox, Text, Relationship, Integer } = require("@keystonejs/fields");
let { DateTimeUtc } = require("@keystonejs/fields-datetime-utc");
module.exports = {
  ref: "Stock",
  config: {
    fields: {
      product: {
        type: Relationship,
        ref: "Product",
        isRequired: true,
      },
      quantity: {
        type: Integer,
      },
      attributes: {
        type: Relationship,
        ref: "Attribute",
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
