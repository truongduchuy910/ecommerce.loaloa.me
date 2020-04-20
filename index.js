let { Keystone } = require("@keystonejs/keystone");
let { GraphQLApp } = require("@keystonejs/app-graphql");
let { AdminUIApp } = require("@keystonejs/app-admin-ui");
let { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
let { Messenger } = require("./messenger/index");
const { NextApp } = require("@keystonejs/app-next");
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
async function handleMessage(sender_psid, received_message) {
  let response;
  let data = keystone.excuteQuery(
    `mutation($user: ID!, $psid: String) {
  updateUser(id: $user, data: { psid: $psid }) {
    email
  }
}
`,
    { variables: { user: received_message.text, psid: sender_psid } }
  );
  console.log(data);
  if (received_message.text) {
    response = {
      text: `You sent the message: "${received_message.text}". Now send me an image!`
    };
  }
  callSendAPI(sender_psid, response);
}
function handlePostback(sender_psid, received_postback) {
  let response;
  let payload = received_postback.payload;
  if (payload === "yes") {
    response = { text: "Thanks!" };
  } else if (payload === "no") {
    response = { text: "Oops, try sending another image." };
  }
  callSendAPI(sender_psid, response);
}
function callSendAPI(sender_psid, response) {
  let request_body = {
    recipient: {
      id: sender_psid
    },
    message: response
  };
}
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
    const express = require("express"),
      bodyParser = require("body-parser");
    app.use(bodyParser.json()); // creates express http server
    app.get("/messenger/webhook", (req, res) => {
      let VERIFY_TOKEN = "Loaloa.Media";
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
    app.post("/messenger/webhook", (req, res) => {
      console.log("/webhook received");
      let body = req.body;
      if (body.object === "page") {
        body.entry.forEach(function(entry) {
          let webhook_event = entry.messaging[0];
          console.log(webhook_event);
          let sender_psid = webhook_event.sender.id;
          console.log("Sender PSID: " + sender_psid);
          if (webhook_event.message) {
            handleMessage(sender_psid, webhook_event.message);
          } else if (webhook_event.postback) {
            handlePostback(sender_psid, webhook_event.postback);
          }
        });
        res.status(200).send("EVENT_RECEIVED");
      } else {
        res.sendStatus(404);
      }
    });
  }
};
