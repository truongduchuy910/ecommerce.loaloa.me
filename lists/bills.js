const { Checkbox, Text, Relationship } = require("@keystonejs/fields");
const { hooks, public } = require("./config");
module.exports = {
  fields: {
    customer: {
      type: Relationship,
      ref: "Customer",
      isRequired: true
    },
    products: {
      type: Relationship,
      ref: "Product",
      many: true,
      isRequired: true
    },
    done: {
      type: Checkbox,
      label: "Đã hoàn thành?"
    }
  },
  hooks: hooks(),
  access: public,
  label: "Đơn hàng",
  labelField: "done"
};
