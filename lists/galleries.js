const { File, Text, Relationship } = require("@keystonejs/fields");
const { hooks, owner } = require("./config");
module.exports = fileAdapter => ({
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
  hooks: hooks(fileAdapter),
  label: "Hình ảnh sản phẩm",
  labelField: "name",
  access: owner
});
