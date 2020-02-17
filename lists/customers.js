const { Text, Relationship } = require("@keystonejs/fields");
const { hooks, public } = require("./config");
module.exports = {
  fields: {
    phone: {
      type: Text,
      isRequired: true
    },
    name: {
      type: Text
    },
    address: {
      type: Text
    },
    seller: {
      type: Relationship,
      ref: "User"
    },
    cart: {
      type: Relationship,
      ref: "Product",
      many: true
    }
  },
  label: "Khách hàng",
  labelField: "name",
  access: public,
  hooks: hooks()
};
