let {
  Color,
  Checkbox,
  Relationship,
  Text,
  Slug,
} = require("@keystonejs/fields");
const { Select } = require("@keystonejs/fields");
let { own, public, ownSeller } = require("./config/access");

module.exports = {
  ref: "Hashtag",
  config: {
    fields: {
      name: {
        type: Text,
        isRequired: true,
      },
      type: {
        type: Select,
        label: "Vị trí xuất hiện",
        options: "menu, group, notify",
      },
      color: {
        type: Color,
      },
      root: {
        type: Checkbox,
        label: "Thẻ chính",
      },
      childs: {
        type: Relationship,
        ref: "Hashtag",
        many: true,
        label: "Thẻ con",
      },
      url: {
        type: Slug,
        from: "name",
        adminConfig: {
          isReadOnly: true,
        },
        label: "Đường dẫn (tạo tự động)",
        schemaDoc: "Đường dẫn",
      },
      posts: {
        type: Relationship,
        ref: "Post.hashtags",
        many: true,
      },
      author: {
        type: Relationship,
        adminConfig: {
          isReadOnly: true,
        },
        ref: "User",
      },
    },
    hooks: {
      afterDelete: async ({ existingItem = {} }) => {
        if (fileAdapter.file) {
          fileAdapter.delete(existingItem.file);
        }
      },
      resolveInput: async ({ resolvedData, context }) => {
        if (resolvedData.file && !resolvedData.name)
          resolvedData.name = resolvedData.file.originalFilename;

        if (context.authedItem && !context.authedItem.isAdmin)
          resolvedData.seller = context.authedItem.id;
        return resolvedData;
      },
    },
    access: public,
  },
};
