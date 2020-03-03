let { Text, Relationship, Slug, File } = require("@keystonejs/fields");
let { fileAdapter } = require("../store/index");
let { own } = require("./config/access");

module.exports = {
  ref: "Post",
  config: {
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
    label: "Bài viết",
    labelField: "title",
    access: own
  }
};
