let { Checkbox, Text, Relationship, Integer } = require("@keystonejs/fields");
let { DateTimeUtc } = require("@keystonejs/fields-datetime-utc");
let { own, public, ownSeller, publicOrownSeller } = require("./config/access");

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
        ref: "OrderItem",
        many: true,
        isRequired: true,
      },
      sale: {
        type: Integer,
      },
      total: {
        type: Integer,
      },
      step: {
        type: Integer,
      },
      time: {
        type: DateTimeUtc,
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
      validateInput: async ({
        resolvedData,
        context: { authedItem },
        actions: { query },
      }) => {
        if (authedItem) resolvedData.seller = authedItem.id;
        resolvedData.time = new Date();

        return resolvedData;
      },
    },
    label: "Đơn",
    access: publicOrownSeller,
  },
};
