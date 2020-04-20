const express = require("express");
const path = require("path");
const request = require("request");
module.exports.callSendAPI = function callSendAPI(sender_psid, response) {
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
        console.log("message sent!", body);
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
};

module.exports.Messenger = class Messenger {
  constructor({ keystone, app }) {
    let handleMessage = this.handleMessage;
    let handlePostback = this.handlePostback;
    let callSendAPI = this.callSendAPI;
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
