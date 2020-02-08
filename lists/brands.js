const { Text, Slug } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
      isUnique: true
    },
    url: {
      type: Slug,
      from: "name",
      schemaDoc: "Đường dẫn"
    }
  },
  label: "Thương hiệu"
};
