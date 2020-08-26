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
      // body: {
      //   type: Content,
      //   blocks: [
      //     Content.blocks.blockquote,
      //     Content.blocks.image,
      //     Content.blocks.link,
      //     Content.blocks.orderedList,
      //     Content.blocks.unorderedList,
      //     Content.blocks.heading,
      //   ],
      // },
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
    access: public,
    hooks: {
      afterDelete: async ({ existingItem = {} }) => {
        /*
        Sau khi xóa, 
        nếu file có tồn tại thì xóa file đó đi trong fileAdapter
        */
        if (existingItem && existingItem.file) {
          await fileAdapter.delete(existingItem.file);
        }
      },
      resolveInput: async ({ resolvedData, context, operation }) => {
        const { authedItem } = context;
        /*
        Gắn tác giả (author) là người đang đăng nhập hiện tại.
        Nếu là admin thì không thực hiện gì cả.
         */
        if (authedItem) {
          if (!authedItem.isAdmin) resolvedData.author = authedItem.id;
        }
        if (resolvedData.body) {
          resolvedData.description =
            htmlToText
              .fromString(resolvedData.body, {
                wordwrap: 130,
              })
              .slice(0, 150) + "...";
        }
        if (operation === "create") {
          resolvedData.time = new Date().toISOString();
        }
        return resolvedData;
      },
    },
  },
};
