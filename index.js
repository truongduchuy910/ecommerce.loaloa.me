require("dot-env");
let { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
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
    // MESSENGER
    app.post("/messenger/webhook", (req, res) => {
      let body = req.body;
      if (body.object === "page") {
        body.entry.forEach(function(entry) {
          let webhook_event = entry.messaging[0];
          console.log(webhook_event);
        });
        res.status(200).send("EVENT_RECEIVED");
      } else {
        res.sendStatus(404);
      }
    });
    app.get("/messenger/webhook", (req, res) => {
      let VERIFY_TOKEN = "Loaloa.Tech";
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

    // API
    app.post("/messenger/send", async (req, res) => {
      const tag = req.query["tag"];
      const psid = req.query["psid"];
      const text = req.query["text"];
      await fetch({
        url: `https://graph.facebook.com/v8.0/me/messages`,
        headers: {
          access_token: `EAAFwU7ZAQ25UBAMa76BFvo5qscF2oMSgetNkKR1d5EjUdjfLI7lq0oWmF2LFj5MpVSrqD7FZCNeEHdO8ZBneSsUkZAOAu8vBiCmELAJ54eX0szPVczFvYZAgHISGtwdFUUDSFauJAZCZC2BN3W91ZAvuG4EYMYRWr7ZAieZBYRaoZAdh9BSYuch9F3ZAYoKMt7hedkgZD`,
        },
        body: {
          recipient: { id: psid },
          messaging_type: "MESSAGE_TAG",
          messaging: { text },
          tag,
        },
      });
    });
  },
};
