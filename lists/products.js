const {
  Text,
  Relationship,
  Slug,
  File,
  Integer,
  Select
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const fileAdapter = new LocalFileAdapter({
  src: "./app/public/store",
  path: "/store"
});

module.exports = {
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
    image: {
      type: File,
      adapter: fileAdapter,
      //isRequired: true,
      hooks: {
        beforeChange: ({ existingItem = {} }) =>
          fileAdapter.delete(existingItem)
      },
      label: "Hình hiển thị (Bắt buộc)"
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
    orther_image: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: ({ existingItem = {} }) =>
          fileAdapter.delete(existingItem)
      },
      label: "Hình ảnh thêm"
    },
    orther_image_1: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: ({ existingItem = {} }) =>
          fileAdapter.delete(existingItem)
      },
      label: "Hình ảnh thêm"
    },
    orther_image_2: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: ({ existingItem = {} }) =>
          fileAdapter.delete(existingItem)
      },
      label: "Hình ảnh thêm"
    },
    description: {
      type: Text,
      label: "Mô tả",
      schemaDoc: "Mô tả giới thiệu về sản phẩm",
	    isMultiline: true
    },
    detail: {
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
    }
  },
  hooks: {
    afterDelete: ({ existingItem = {} }) => fileAdapter.delete(existingItem)
  },
  label: "Sản phẩm"
};
