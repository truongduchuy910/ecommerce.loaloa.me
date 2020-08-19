require("dot-env");
let { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");

let { MongooseAdapter } = require("@keystonejs/adapter-mongoose");

let mongoUri =
  process.env.NODE_ENV === "production"
    ? process.env.loaloa_mongo_uri
    : "mongodb://localhost/loaloa";

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

// find and listen app
let files = fs.readdirSync("./ports");
const express = require("express");
files.forEach((file) => {
  let app = express();
  app.use(express.static(__dirname + "/ports/" + file));
  app.listen(Number(file));
});

let { PasswordAuthStrategy } = require("@keystonejs/auth-password");
let authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      authStrategy,
    }),
  ],
  configureExpress: (app) => {
    let path = require("path");
    app.set("trust proxy", true);
    app.use(require("express").static(path.join(path.resolve(), "store")));
    const express = require("express"),
      bodyParser = require("body-parser");
    app.use(bodyParser.json()); // creates express http server
  },
};
