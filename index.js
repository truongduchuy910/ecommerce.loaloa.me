/* KEYSTONE AREA */
const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { config, onConnect } = require("./config");
// const { NextApp } = require("@keystonejs/app-next");

const keystone = new Keystone({
  secureCookies: false,
  name: config.name,
  adapter: new MongooseAdapter(config.mongoose.connect),
  onConnect: onConnect
});

const fileAdapter = new LocalFileAdapter(config.fileStore);

const userConfig = require("./lists/users");
keystone.createList("User", userConfig);

const galleryConfig = require("./lists/galleries")(fileAdapter);
keystone.createList("Gallery", galleryConfig);

const hashtagConfig = require("./lists/hashtags");
keystone.createList("Hashtag", hashtagConfig);

const categoryConfig = require("./lists/categories")(fileAdapter);
keystone.createList("Category", categoryConfig);

const brandConfig = require("./lists/brands");
keystone.createList("Brand", brandConfig);

const attributeConfig = require("./lists/attributes");
keystone.createList("Attribute", attributeConfig);

const postConfig = require("./lists/posts")(fileAdapter);
keystone.createList("Post", postConfig);

const productConfig = require("./lists/products")(fileAdapter);
keystone.createList("Product", productConfig);

const bannerConfig = require("./lists/banners")(fileAdapter);
keystone.createList("Banner", bannerConfig);

const customerConfig = require("./lists/customers");
keystone.createList("Customer", customerConfig);

const billConfig = require("./lists/bills");
keystone.createList("Bill", billConfig);
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User"
});
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      authStrategy
    })
    // new NextApp({ dir: "app" })
  ],
  configureExpress: app => {
    const express = require("express");
    const path = require("path");
    app.use(express.static(path.join(path.resolve(), "store")));
    // Creates the endpoint for our webhook
    app.post("/webhook", (req, res) => {
      let body = req.body;

      if (body.object === "page") {
        body.entry.forEach(function(entry) {
          let webhook_event = entry.messaging[0];
          // keystone.executeQuery(`mutation {
          //   updateUser(id: "123", data: { psid: "adf" }) {
          //     seller
          //   }
          // }
          // `);
          console.log(webhook_event);
        });

        res.status(200).send("EVENT_RECEIVED");
      } else {
        res.sendStatus(404);
      }
    });
    app.get("/webhook", (req, res) => {
      let VERIFY_TOKEN = "<YOUR_VERIFY_TOKEN>";

      let mode = req.query["hub.mode"];
      let token = req.query["hub.verify_token"];
      let challenge = req.query["hub.challenge"];
      if (mode && token) {
        if (mode === "subscribe" && token === VERIFY_TOKEN) {
          console.log("WEBHOOK_VERIFIED");
          res.status(200).send(challenge);
        } else {
          res.sendStatus(403);
        }
      }
    });
  }
};
