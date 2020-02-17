const { File, Text, Slug, Relationship } = require("@keystonejs/fields");
const { hooks, owner } = require("./config");
module.exports = fileAdapter => ({
  fields: {
    name: {
      type: Text,
      isRequired: true,
      isUnique: true
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
  label: "Danh mục",
  labelField: "name",
  hooks: hooks(fileAdapter),
  access: owner
});
