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
  }
};
