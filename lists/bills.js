let { Checkbox, Text, Relationship } = require("@keystonejs/fields");
let { own, public } = require("./config/access");
let { callSendAPI } = require("../messenger/index");
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
        let user = context.authedItem;
        if (user) console.log(user.psid, user.one_time_token);
        if (user && !user.isAdmin) resolvedData.seller = user.id;
        return resolvedData;
      }
    },
    label: "Đơn",
    access: public
  }
};
