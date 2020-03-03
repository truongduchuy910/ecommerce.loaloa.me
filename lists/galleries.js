let { File, Text, Relationship } = require("@keystonejs/fields");
let { fileAdapter } = require("../store/index");
let { own } = require("./config/access");

module.exports = {
  ref: "Gallery",
  config: {
    fields: {
      file: {
        type: File,
        adapter: fileAdapter,
        hooks: {
          beforeChange: ({ existingItem = {} }) =>
            fileAdapter.delete(existingItem)
        },
        isRequired: true
      },
      name: {
        type: Text,
        label: "Tên tìm kiếm"
      },
      product: {
        type: Relationship,
        ref: "Product.images"
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
    label: "Ảnh sản phẩm",
    access: own
  }
};
