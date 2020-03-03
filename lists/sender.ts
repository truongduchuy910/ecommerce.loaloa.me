// let { Text, Relationship } = require("@keystonejs/fields");
// const { public, admin } = require("./config/access");
// module.exports = {
//   ref: "Sender",
//   config: {
//     fields: {
//       name: {
//         type: Text,
//         isRequired: true,
//         isUnique: true
//       },
//       pages_id: {
//         type: Text
//       },
//       profile_pic: {
//         type: Text
//       },
//       seller: {
//         type: Relationship,
//         ref: "User"
//       }
//     },
//     labelField: "name",
//     hooks: {
//       resolveInput: async ({ resolvedData, context, actions: { query } }) => {
//         const queryString = `
//         query ($pages_id: String) {
//           allUsers(where: { pages_id: $pages_id }) {
//             id
//           }
//         }`;
//         const options = {
//           skipAccessControl: false,
//           variables: {
//             pages_id: resolvedData.pages_id
//           }
//         };
//         const {
//           errors,
//           data: { allUsers }
//         } = await query(queryString, options);
//         console.log(errors, allUsers);
//         resolvedData.seller = allUsers[0].id;
//         return resolvedData;
//       }
//     },
//     label: "Khách hàng",
//     access: public
//   }
// };
