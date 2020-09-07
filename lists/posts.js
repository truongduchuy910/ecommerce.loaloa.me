let {
  Text,
  Relationship,
  Slug,
  File,
  DateTime,
  Integer,
} = require("@keystonejs/fields");
const htmlToText = require("html-to-text");

const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { Content } = require("@keystonejs/field-content");
let { fileAdapter } = require("../store/index");
let { own, public, ownSeller } = require("./config/access");

module.exports = {
  ref: "Post",
  config: {
    fields: {
      title: {
        type: Text,
        isRequired: true,
        label: "Tên bài viết",
      },
      file: {
        type: File,
        adapter: fileAdapter,
        hooks: {
          /* 
            Chỗ này nếu không kiểm tra sự tồn tại của file,
            thì trong lần tạo đầu tiên sẽ báo lỗi không tìm thấy
            "path"
          */
          beforeChange: async ({ existingItem = {} }) => {
            if (existingItem && existingItem.file) {
              await fileAdapter.delete(existingItem.file);
            }
          },
        },
        label: "Bìa",
      },
      /*
       * Nếu hình ảnh từ file không tìm thấy,
       * altImage sẽ được sử dụng
       */

      altImage: {
        type: Text,
        label: "Bìa (thay thế)",
      },
      description: {
        type: Text,
        label: "Mô tả ngắn",
      },
      body: {
        type: Wysiwyg,
        editorConfig: { default_link_target: "_blank" },
        label: "Nội dung",
      },
      hashtags: {
        type: Relationship,
        ref: "Hashtag.posts",
        many: true,
      },

      url: {
        type: Slug,
        adminConfig: {
          isReadOnly: true,
        },
        from: "title",
      },
      author: {
        type: Relationship,
        adminConfig: {
          isReadOnly: true,
        },
        ref: "User",
      },
      time: { type: DateTime },
      views: { type: Integer },
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
