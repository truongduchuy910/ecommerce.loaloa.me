const { Relationship, File } = require("@keystonejs/fields");
const { hooks, owner } = require("./config");
module.exports = fileAdapter => ({
  fields: {
    file: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: ({ existingItem = {} }) => {
          if (existingItem) fileAdapter.delete(existingItem);
        }
      },
      isRequired: true
    },
    seller: {
      type: Relationship,
      ref: "User"
    }
  },
  hooks: hooks(fileAdapter),
  access: owner,
  label: "Ảnh bìa"
});
