const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");

const initialiseData = require("./initial-data");
const { MongooseAdapter } = require("@keystonejs/adapter-mongoose");

const PROJECT_NAME = "quangdacamera";
const keystone = new Keystone({
  secureCookies: false,
  name: PROJECT_NAME,
  adapter: new MongooseAdapter(),
  onConnect: initialiseData,
  secureCookies: false
});

keystone.createList("User", require("./lists/users"));
keystone.createList("Hashtag", require("./lists/hashtags"));
keystone.createList("Category", require("./lists/categories"));
keystone.createList("Brand", require("./lists/brands"));
keystone.createList("Post", require("./lists/posts"));
keystone.createList("Product", require("./lists/products"));
keystone.createList("Banner", require("./lists/banners"));
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User"
});
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: false,
      authStrategy
    }),
    new StaticApp({
      path: "/",
      src: "app/public",
      fallback: "index.html"
    })
  ]
};