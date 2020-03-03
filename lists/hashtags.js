let { Checkbox, Relationship, Text, Slug } = require("@keystonejs/fields");
let { own } = require("./config/access");

module.exports = {
  ref: "Hashtag",
  config: {
    fields: {
      name: {
        type: Text,
        isRequired: true,
      },
      root: {
        type: Checkbox,
        label: "Thẻ gốc"
      },
      childs: {
        type: Relationship,
        label: "Các thẻ mục con",
        ref: "Hashtag",
        many: true
      },
      url: {
        type: Slug,
        from: "name",
        schemaDoc: "Đường dẫn"
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
    label: "Thẻ bài viết",
    labelField: "name",
    access: own
  }
};
