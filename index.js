require("dot-env");
let { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NextApp } = require("@keystonejs/app-next");
let { MongooseAdapter } = require("@keystonejs/adapter-mongoose");

let mongoUri =
  process.env.NODE_ENV === "production"
    ? process.env.loaloa_mongo_uri ||
      "mongodb://loaloa.me:Loaloa.Media@139.180.214.47:27017/loaloa"
    : "mongodb://localhost/loaloa";
console.log(mongoUri, process.env.loaloa_mongo_uri);
let keystone = new Keystone({
  secureCookies: process.env.NODE_ENV === "production",
  name: "loaloa",
  adapter: new MongooseAdapter({
    mongoUri,
  }),
  onConnect: require("./onConnect"),
});
// find and create list
const fs = require("fs");
const path = require("path");
let ports = fs.readdirSync("./lists");
ports.forEach((file) => {
  if (path.extname(file) === ".js") {
    let list = require(`./lists/${file}`);
    keystone.createList(list.ref, list.config);
    console.log(`create List ${list.ref}`);
  }
});

let { PasswordAuthStrategy } = require("@keystonejs/auth-password");
let authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
});

const express = require("express"),
  bodyParser = require("body-parser");
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      authStrategy,
      enableDefaultRoute: true,
    }),
    // new NextApp({ dir: "app" }),
  ],
  configureExpress: (app) => {
    let path = require("path");
    app.set("trust proxy", true);
    app.use(express.static(path.join(path.resolve(), "store")));
    app.use(bodyParser.json()); // creates express http server
  },
};
