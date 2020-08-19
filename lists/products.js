let {
  Text,
  Relationship,
  Slug,
  Integer,
  Select,
  File,
} = require("@keystonejs/fields");
let { fileAdapter } = require("../store/index");
let { public } = require("./config/access");

module.exports = {
  ref: "Product",
  config: {
    fields: {
      image: {
        type: File,
        adapter: fileAdapter,
        hooks: {
          beforeChange: ({ existingItem = {} }) => {
            if (existingItem.image) fileAdapter.delete(existingItem.image);
          },
        },
        label: "Hình ảnh chi tiết",
        isRequired: true,
      },
      name: {
        type: Text,
        isRequired: true,
        label: "Tên sản phẩm (Bắt buộc)",
      },
      price: {
        type: Integer,
        isRequired: true,
        label: "Giá (Bắt buộc)",
      },
      sale: {
        type: Integer,
        label: "Giá Sale",
      },
      images: {
        type: Relationship,
        ref: "Gallery.product",
        label: "Hình hiển thị",
        many: true,
      },
      brand: {
        type: Relationship,
        ref: "Brand",
        label: "Thương hiệu",
      },
      category: {
        type: Relationship,
        ref: "Category",
        label: "Danh mục",
      },
      description: {
        type: Text,
        label: "Mô tả",
        schemaDoc: "Mô tả giới thiệu về sản phẩm",
        isMultiline: true,
      },
      file: {
        type: File,
        adapter: fileAdapter,
        hooks: {
          beforeChange: ({ existingItem = {} }) => {
            if (fileAdapter.file) {
              fileAdapter.delete(existingItem.file);
            }
          },
        },
        label: "Hình ảnh chi tiết",
      },
      guide: {
        type: Text,
        label: "Hướng dẫn",
        schemaDoc: "Hướng dẫn sử dụng",
        isMultiline: true,
      },

      attributeGroups: {
        type: Relationship,
        ref: "AttributeGroup",
        label: "Nhóm thuộc tính",
        many: true,
      },
      suggestions: {
        type: Select,
        options: [
          { value: "new", label: "Hàng mới về" },
          { value: "bestSeller", label: "Bán chạy" },
        ],
        label: "Phân loại",
      },
      quantity: {
        type: Integer,
      },
      url: {
        type: Slug,
        from: "name",
        schemaDoc: "Đường dẫn",
      },
      // create by
      seller: {
        type: Relationship,
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
    label: "Sản phẩm",
    labelField: "name",
    access: public,
  },
};
