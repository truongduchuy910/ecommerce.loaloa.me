let {
  Checkbox,
  File,
  Text,
  Slug,
  Relationship,
} = require("@keystonejs/fields");
let { fileAdapter } = require("../store/index");
let { public } = require("./config/access");

module.exports = {
  ref: "Category",
  config: {
    fields: {
      name: {
        type: Text,
        isRequired: true,
        label: "Tên phân biệt",
      },
      label: {
        type: Text,
        label: "Tên hiển thị",
      },
      childs: {
        type: Relationship,
        label: "Các danh mục con",
        ref: "Category.parent",
        many: true,
      },
      parent: {
        type: Relationship,
        label: "Danh mục cha",
        ref: "Category.childs",
      },
      file: {
        type: File,
        adapter: fileAdapter,
        hooks: {
          beforeChange: ({ existingItem = {} }) =>
            fileAdapter.delete(existingItem),
        },
        label: "Hình ảnh",
      },
      url: {
        type: Slug,
        from: "name",
        schemaDoc: "Đường dẫn",
      },
      // create by
      seller: {
        type: Relationship,
        ref: "User",
      },
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
      },
    },
    label: "Danh mục",
    access: public,
  },
};
