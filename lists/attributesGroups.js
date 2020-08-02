let { Text, Slug, Relationship } = require("@keystonejs/fields");
let { own } = require("./config/access");
module.exports = {
  ref: "AttributeGroup",
  config: {
    fields: {
      name: {
        type: Text,
        isRequired: true,
        isUnique: true,
      },
      attributes: {
        type: Relationship,
        ref: "Attribute",
      },
      url: {
        type: Slug,
        from: "name",
        schemaDoc: "Đường dẫn",
      },
      seller: {
        type: Relationship,
        ref: "User",
      },
    },

    hooks: {
      resolveInput: async ({ resolvedData, context }) => {
        if (context.authedItem && !context.authedItem.isAdmin)
          resolvedData.seller = context.authedItem.id;
        return resolvedData;
      },
    },
    label: "Thuộc tính",
    labelfields: "name",
    access: own,
  },
};
