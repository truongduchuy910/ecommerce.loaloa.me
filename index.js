let { Keystone } = require("@keystonejs/keystone");

const request = require("request");
let { GraphQLApp } = require("@keystonejs/app-graphql");
let { AdminUIApp } = require("@keystonejs/app-admin-ui");
let { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
let { Messenger } = require("./messenger/index");
let { Host } = require("./host/index");
let { callSendAPI } = require("./messenger/index");
let mongoUri =
  process.env.NODE_ENV === "production"
    ? "mongodb://loaloa.me:Loaloa.Media@139.180.214.47:27017/loaloa"
    : "mongodb://localhost/loaloa";
console.log(mongoUri);
let keystone = new Keystone({
  secureCookies: true,
  name: "loaloa",
  adapter: new MongooseAdapter({
    mongoUri,
  }),
  onConnect: require("./onConnect"),
});

const fs = require("fs");
const path = require("path");
let files = fs.readdirSync("./lists");
files.forEach((file) => {
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

new Host({ port: { from: 7000, to: 7011 } });
async function handleMessage(sender_psid, received_message) {
  if (received_message.text.length == 24)
    callSendAPI(
      { id: sender_psid },
      {
        attachment: {
          type: "template",
          payload: {
            template_type: "one_time_notif_req",
            title: "Đăng ký nhận tin",
            payload: received_message.text,
          },
        },
      }
    );
}
async function handlePostback(sender_psid, received_postback) {}

async function handleOption(sender_psid, received_option) {
  console.log(received_option);
  let data = await keystone.executeQuery(
    `mutation($user: ID!, $psid: String, $one_time_token:String) {
  	updateUser(
	id: $user 
	data: {
	one_time_token:$one_time_token 
	psid: $psid 
	}) {
    email
  }
}
`,
    {
      variables: {
        user: received_option.payload,
        psid: sender_psid,
        one_time_token: received_option.one_time_notif_token,
      },
    }
  );
  console.log(data);
}

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
  configureExpress: (app) => {
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
    app.post("/messenger/bills", (req, res) => {
      console.log(req.body);
      let { phone, name, address, productName } = req.body;
      callSendAPI(
        { id: req.body.psid },
        {
          attachment: {
            type: "template",
            payload: {
              template_type: "button",
              text: `[${new Date().toDateString()}] Bạn ${name}. Đt: ${phone}. Địa chỉ: ${address}. Đặt sản phẩm: ${productName}!`,
              buttons: [
                {
                  type: "web_url",
                  url: "https://ad.loaloa.tech/admin",
                  title: "Kiểm tra",
                },
              ],
            },
          },
        }
      );
      res.send({ success: true });
    });
  },
};
