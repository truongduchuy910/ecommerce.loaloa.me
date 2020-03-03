let { Keystone } = require("@keystonejs/keystone");
let { GraphQLApp } = require("@keystonejs/app-graphql");
let { AdminUIApp } = require("@keystonejs/app-admin-ui");
let { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
let { NextApp } = require("@keystonejs/app-next");

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

new Host({ port: { from: 7000, to: 7011 } });
new Messenger({ keystone, port: 6789 });
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: false,
      authStrategy
    })
    //    new NextApp({ dir: "app" })
  ],
  configureExpress: app => {
    let path = require("path");
    app.use(require("express").static(path.join(path.resolve(), "store")));
  }
};
