const {
  Text,
  Relationship,
  Slug,
  Integer,
  Select,
  File
} = require("@keystonejs/fields");
const { hooks, owner } = require("./config");
module.exports = fileAdapter => ({
  fields: {
    name: {
      type: Text,
      isRequired: true,
      isUnique: true,
      label: "Tên sản phẩm (Bắt buộc)",
      schemaDoc: "Tên mỗi sản phẩm phải là duy nhất, không được trùng lặp"
    },
    price: {
      type: Integer,
      isRequired: true,
      label: "Giá (Bắt buộc)",
      schemaDoc: "Giá bán thông thường"
    },
    images: {
      type: Relationship,
      ref: "Gallery.product",
      //      isRequired: true,
      label: "Hình hiển thị (Bắt buộc)",
      many: true
    },
    brand: {
      type: Relationship,
      ref: "Brand",
      label: "Thương hiệu"
    },
    category: {
      type: Relationship,
      ref: "Category",
      label: "Danh mục"
    },
    description: {
      type: Text,
      label: "Mô tả",
      schemaDoc: "Mô tả giới thiệu về sản phẩm",
      isMultiline: true
    },
    file: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: ({ existingItem = {} }) =>
          fileAdapter.delete(existingItem)
      },
      label: "Chi tiết"
    },
    guide: {
      type: Text,
      label: "Hướng dẫn",
      schemaDoc: "Hướng dẫn sử dụng",
      isMultiline: true
    },
    attributes: {
      type: Relationship,
      ref: "Attribute",
      label: "Thuộc tính khác",
      many: true
    },
    suggestions: {
      type: Select,
      options: [
        { value: "new", label: "Hàng mới về" },
        { value: "bestSeller", label: "Bán chạy" }
      ],
      label: "Phân loại"
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
  //  hooks: hooks(fileAdapter),
  access: true,
  label: "Sản phẩm",
  labelField: "name"
});
