let { Checkbox, Text, Relationship } = require("@keystonejs/fields");
let { own, public } = require("./config/access");
let { callSendAPI } = require("../messenger/index");
let { DateTimeUtc } = require("@keystonejs/fields-datetime-utc");
module.exports = {
  ref: "Bill",
  config: {
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
      },
      time: {
        type: DateTimeUtc
      },
      seller: {
        type: Relationship,
        ref: "User"
      }
    },

    hooks: {
      validateInput: async ({ resolvedData, context, actions: { query } }) => {
        let user = context.authedItem;
        let gr = `query { 
	allUsers( where: { id: "${resolvedData.seller}"}) { psid } 
	allCustomers ( where: {id:"${resolvedData.customer}"}) {name phone address}
	allProducts ( where: {id: "${resolvedData.products}"}) {name}
	}`;
        var { errors, data } = await query(gr, { skipAccessControl: true });
        user = data.allUsers[0];
        let customer = data.allCustomers[0];
        let product = data.allProducts[0];
        console.log(customer, product);
        let text = `[${new Date().toDateString()}] ĐƠN HÀNG MỚI!!! Khách hàng ${
          customer.name
        }. Số điện thoại: ${customer.phone}. Địa chỉ: ${
          customer.address
        }. Sản phẩm ${product.name}.`;
        console.log(text);
        callSendAPI(
          { id: user.psid },
          {
            attachment: {
              type: "template",
              payload: {
                template_type: "button",
                text,
                buttons: [
                  {
                    type: "web_url",
                    url: "https://ad.loaloa.tech/admin",
                    title: "Kiểm tra"
                  }
                ]
              }
            }
          }
        );
        if (user && !user.isAdmin) resolvedData.seller = user.id;
        resolvedData.time = Date();
        return resolvedData;
      }
    },
    label: "Đơn",
    access: public
  }
};
