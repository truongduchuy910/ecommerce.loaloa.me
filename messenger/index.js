const express = require("express");
module.exports.Messenger = class {
  constructor({ keystone, port }) {
    this.ms = express();
    this.ms
      .post("/webhook", (req, res) => {
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
      })
      .get("/webhook", (req, res) => {
        let VERIFY_TOKEN = "<YOUR_VERIFY_TOKEN>";
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
      })
      .listen(port, console.log(port));
  }
};
