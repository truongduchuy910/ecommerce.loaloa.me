let {
  Checkbox,
  Text,
  Relationship,
  Integer,
  Decimal,
} = require("@keystonejs/fields");
let { DateTimeUtc } = require("@keystonejs/fields-datetime-utc");
let { own, public, ownSeller, publicOrownSeller } = require("./config/access");

module.exports = {
  ref: "OrderItem",
  config: {
    fields: {
      product: {
        type: Relationship,
        ref: "Product",
        isRequired: true,
      },
      price: {
        type: Integer,
      },
      quantity: {
        type: Integer,
      },
      attributes: {
        type: Relationship,
        ref: "Attribute",
        many: true,
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
        if (authedItem && !authedItem.isAdmin)
          resolvedData.seller = authedItem.id;
        resolvedData.time = new Date();
        return resolvedData;
      },
    },
    access: publicOrownSeller,
  },
};
