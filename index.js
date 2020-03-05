let { Keystone } = require("@keystonejs/keystone");
let { GraphQLApp } = require("@keystonejs/app-graphql");
let { AdminUIApp } = require("@keystonejs/app-admin-ui");
let { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
const { NextApp } = require("@keystonejs/app-next");
let { Messenger } = require("./messenger/index");
let { Host } = require("./host/index");
let keystone = new Keystone({
  secureCookies: false,
  name: "loaloa",
  adapter: new MongooseAdapter({
    mongoUri: "mongodb://loaloa.me:Loaloa.Media@139.180.214.47:27017/loaloa"
  }),
  defaultAdapter: "lists",
  onConnect: require("./onConnect")
});

const fs = require("fs");
const path = require("path");
let files = fs.readdirSync("./lists");
files.forEach(file => {
  if (path.extname(file) === ".js") {
    let list = require(`./lists/${file}`);
    keystone.createList(list.ref, list.config);
    console.log(list.ref);
  }
});

let { PasswordAuthStrategy } = require("@keystonejs/auth-password");

let authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User"
});

const {
  GoogleAuthStrategy,
  FacebookAuthStrategy
} = require("@keystonejs/auth-passport");
const facebookStrategy = keystone.createAuthStrategy({
  type: FacebookAuthStrategy,
  list: "User",
  config: {
    idField: "facebookId",
    appId: "335701763968445",
    appSecret: "d2d109abb0a9c648a4c2a2abc47d6055",
    loginPath: "/auth/facebook",
    callbackPath: "/auth/facebook/callback",

    // Once a user is found/created and successfully matched to the
    // googleId, they are authenticated, and the token is returned here.
    // NOTE: By default KeystoneJS sets a `keystone.sid` which authenticates the
    // user for the API domain. If you want to authenticate via another domain,
    // you must pass the `token` as a Bearer Token to GraphQL requests.
    onAuthenticated: ({ token, item, isNewItem }, req, res) => {
      console.log(token, item, isNewItem);
      res.redirect("/");
    },

    // If there was an error during any of the authentication flow, this
    // callback is executed
    onError: (error, req, res) => {
      console.error(error);
      res.redirect("/?error=Uh-oh");
    }
  }
});

new Host({ port: { from: 7000, to: 7011 } });
new Messenger({ keystone, port: 6789 });
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: false,
      authStrategy
    }),
    new NextApp({ dir: "app" })
  ],
  configureExpress: app => {
    let path = require("path");
    app.use(require("express").static(path.join(path.resolve(), "store")));
  }
};
