const { json, send, createError, run } = require("micro");
const fetch = require("isomorphic-unfetch");
const request = require("../utils/request");
const login = async (req, res) => {
  const { username, password } = await json(req);
  let response = await request({
    body: {
      query: `mutation($username: String, $password: String) {
                            authenticateUserWithPassword(email: $username, password: $password) {
                            token
                            item {
                                id
                                email
                                isAdmin
                                isSupporter
                                isCustomer
                            }
                            }
                        }`,
      variables: {
        username,
        password
      }
    }
  });

  if (response) {
  }
};

module.exports = (req, res) => run(req, res, login);
