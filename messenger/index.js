const express = require("express");
const path = require("path");
module.exports.Messenger = class Messenger {
  constructor({ keystone, app }) {
	 let handleMessage= this.handleMessage;
	  let handlePostback  = this.handlePostback;
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
handleMessage(sender_psid, received_message) {
      let response;
      if (received_message.text) {
        response = {
          text: `You sent the message: "${received_message.text}". Now send me an image!`,
        };
      }
      callSendAPI(sender_psid, response);
	keystone.excuteQuery(`mutation($user: ID!, $psid: String) {
  updateUser(id: $user, data: { psid: $psid }) {
    email
  }
}
`,{variables: {user:received_message.text,psid:sender_psid}})
    }
    handlePostback(sender_psid, received_postback) {
      let response;
      let payload = received_postback.payload;
      if (payload === "yes") {
        response = { text: "Thanks!" };
      } else if (payload === "no") {
        response = { text: "Oops, try sending another image." };
      }
      callSendAPI(sender_psid, response);
    }
    callSendAPI(sender_psid, response) {
      let request_body = {
        recipient: {
          id: sender_psid,
        },
        message: response,
      };
    }


};
