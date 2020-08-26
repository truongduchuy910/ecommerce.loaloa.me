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
      validateInput: async ({
        resolvedData,
        context: { authedItem },
        actions: { query },
      }) => {
        if (authedItem) resolvedData.seller = authedItem.id;
        resolvedData.time = new Date();
        return resolvedData;
      },
    },
    access: public,
    labelField: "name",
  },
};
