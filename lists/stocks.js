let {
  Checkbox,
  Text,
  Relationship,
  Integer,
  Decimal,
  Select,
} = require("@keystonejs/fields");
let { DateTimeUtc } = require("@keystonejs/fields-datetime-utc");
let { own, public } = require("./config/access");

module.exports = {
  ref: "Stock",
  config: {
    fields: {
      product: {
        type: Relationship,
        ref: "Product",
        isRequired: true,
      },
      action: {
        type: Select,
        options: [
          { label: "in", value: "in" },
          { label: "out", value: "out" },
        ],
      },
      price: {
        type: Integer,
      },
      quantity: {
        type: Integer,
      },
      note: { type: Text },
      time: {
        type: DateTimeUtc,
      },
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
    label: "Đơn",
    access: public,
  },
};
