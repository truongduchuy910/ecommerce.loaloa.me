const { Relationship, Text, Slug } = require("@keystonejs/fields");
const { hooks, owner } = require("./config");
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
    },
    seller: {
      type: Relationship,
      ref: "User"
    }
  },
  label: "Thẻ bài viết",
  hooks: hooks(),
  access: owner
};
