const { Text, Relationship, Slug, File } = require("@keystonejs/fields");
const { hooks, owner } = require("./config");
module.exports = fileAdapter => ({
  fields: {
    title: {
      type: Text,
      isRequired: true
    },
    file: {
      type: File,
      adapter: fileAdapter,
      isRequired: true,
      hooks: {
        beforeChange: ({ existingItem = {} }) =>
          fileAdapter.delete(existingItem)
      },
      label: "Hình ảnh"
    },
    body: {
      type: Text,
      label: "Nội dung",
      isMultiline: true
    },
    hashtag: {
      type: Relationship,
      ref: "Hashtag",
      many: true
    },
    url: {
      type: Slug,
      from: "title"
    },
    seller: {
      type: Relationship,
      ref: "User"
    }
  },
  label: "Bài viết",
  hooks: hooks(fileAdapter),
  access: owner
});
