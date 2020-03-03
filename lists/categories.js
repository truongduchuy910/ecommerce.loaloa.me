let {
  Checkbox,
  File,
  Text,
  Slug,
  Relationship
} = require("@keystonejs/fields");
let { fileAdapter } = require("../store/index");
let { own } = require("./config/access");

module.exports = {
  ref: "Category",
  config: {
    fields: {
      name: {
        type: Text,
        isRequired: true
      },
      root: {
        type: Checkbox,
        label: "Danh mục gốc"
      },
      childs: {
        type: Relationship,
        label: "Các danh mục con",
        ref: "Category",
        many: true
      },
      file: {
        type: File,
        adapter: fileAdapter,
        hooks: {
          beforeChange: ({ existingItem = {} }) =>
            fileAdapter.delete(existingItem)
        },
        label: "Hình ảnh"
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
      afterDelete: async ({ existingItem = {} }) => {
        fileAdapter.delete(existingItem);
      },
      resolveInput: async ({ resolvedData, context }) => {
        if (resolvedData.file && !resolvedData.name)
          resolvedData.name = resolvedData.file.originalFilename;
        if (context.authedItem && !context.authedItem.isAdmin)
          resolvedData.seller = context.authedItem.id;
        return resolvedData;
      }
    },
    label: "Danh mục",
    access: own
  }
};
