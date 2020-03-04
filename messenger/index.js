const express = require("express");
const path = require("path");
module.exports.Messenger = class Messenger {
  constructor({ keystone, port }) {
    this.ms = express();
    this.ms
      .set("view engine", "ejs")
      .set("views", path.join(__dirname, "views"))
      .use(express.static(path.join(__dirname, "public")))
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
      .get("/:seller", (req, res) => {
        res.render("pages/index");
      })
      .get("/:seller/detail", (req, res) => {
        res.render("pages/detail");
      })

      .listen(port, console.log(port));
  }
};
new this.Messenger({ port: 6789 });
