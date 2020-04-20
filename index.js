let { Keystone } = require("@keystonejs/keystone");
const request = require("request");

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
function handleMessage(sender_psid, received_message) {
  console.log("handleMessage", received_message);
  callSendAPI(sender_psid, {
    attachment: {
      type: "template",
      payload: {
        template_type: "one_time_notif_req",
        title: "Đăng ký nhận tin",
        payload: received_message.text
      }
    }
  });
}
async function handlePostback(sender_psid, received_postback) {
  console.log("handlePostback", received_postback);
  let data = await keystone.executeQuery(
    `mutation($user: ID!, $psid: String) {
  updateUser(id: $user, data: { psid: $psid }) {
    email
  }
}
`,
    { variables: { user: null, psid: sender_psid } }
  );
  console.log(data);
}
function callSendAPI(sender_psid, response) {
  // Construct the message body
  console.log(sender_psid, response);
  let request_body = {
    recipient: {
      id: sender_psid
    },
    message: response
  };

  // Send the HTTP request to the Messenger Platform
  request(
    {
      uri: "https://graph.facebook.com/v6.0/me/messages",
      qs: {
        access_token:
          "EAAExUahkTb0BALoBn5sPB58VBXbxVDE1dghtKLpLSBl3xGYrcK0jkBvZBowjQ4EcKWivxojebaIzyrPlFxePfBguSdjhohvT4CC0uZBuuDtRyaMzZCbsStrmmjYSJpTjFEYN12rgYErK2VL9aX1nnifK5cAZC1C4Rncr44ZBxeaOXnDbd9lUm5NX0f0FZChN8ZD"
      },
      method: "POST",
      json: request_body
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
}
function handleOption(sender_psid, received_option) {
  console.log(received_option);
}
function callSendAPI(sender_psid, keystone_id) {
  let request_body = {
    recipient: {
      id: sender_psid
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "one_time_notif_req",
          title: "Đăng ký nhận tin",
          payload: keystone_id
        }
      }
    }
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
          } else if (webhook_event.optin) {
            handleOption(sender_psid, webhook_event.optin);
          }
        });
        res.status(200).send("EVENT_RECEIVED");
      } else {
        res.sendStatus(404);
      }
    });
  }
};
