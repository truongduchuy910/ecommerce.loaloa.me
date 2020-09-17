let { Checkbox, Text, Relationship, Integer } = require("@keystonejs/fields");
let { DateTimeUtc } = require("@keystonejs/fields-datetime-utc");
let { own, public, ownSeller, publicOrownSeller } = require("./config/access");

module.exports = {
  ref: "GroupFacebookUser",
  config: {
    fields: {
      tag: {
        type: Text,
      },
      sender: { type: Relationship, ref: "FBUser" },
      recipients: {
        many: true,
        type: Relationship,
        ref: "FBUser",
      },
      // LOCK: do not edit
      time: {
        type: DateTimeUtc,
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
    access: { create: true, update: true, delete: true, read: true },
  },
};
