const { Text, Slug, Relationship } = require("@keystonejs/fields");
const { owner, hooks } = require("./config");
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
  label: "Thuộc tính khác",
  labelField: "name",
  hooks: hooks,
  access: owner
};
