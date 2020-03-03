let fs = require("fs");
let path = require("path");
let express = require("express");

class Ejs {
  constructor({ port }) {
    this.port = port;
    this.routers = new Object();
  }
  load() {
    let hostPath = __dirname + "/ports/" + this.port + "/pages";
    try {
      let pages = fs.readdirSync(hostPath);
      pages.forEach(file => {
        let name = path.basename(file, ".ejs");
        this.routers[name] = path.join(hostPath, name);
      });
    } catch (err) {
      fs.mkdirSync(hostPath);
    }
  }
  path({ name }) {
    let page = this.routers[name];
    let home = this.routers["home"];
    return !name ? home : page ? page : false;
  }
}
class Host {
  constructor({ port: { from, to } }) {
    this.host = express();
    this.ejs = new Array();

    let publicUrl = path.join(path.resolve(), "host/ports/public");

    this.host
      .set("view engine", "ejs")
      .set("views", path.join(__dirname, "ports"))
      .use(express.static(publicUrl))
      .get("/", async (req, res) => {
        let port = req.socket.localPort;
        let ejsPath = this.ejs[port].path({ name: "home" });
        let data = {};
        res.render(ejsPath, data);
      })
      .get("/home", async (req, res) => {
        res.redirect("/");
      })
      .get("/refresh", async (req, res) => {
        let port = req.socket.localPort;
        this.ejs[port].load();
        res.redirect("/");
      })

      .get("/detail/", async (req, res) => {
        let port = req.socket.localPort;
        let ejsPath = this.ejs[port].path({ name: "detail" });
        res.render(ejsPath);
      })
      .get("*", (req, res) => {
        let port = req.socket.localPort;
        let ejsPath = this.ejs[port].path({ name: "404" });
        res.render(ejsPath);
      });
    for (let port = from; port < to; port++) {
      this.ejs[port] = new Ejs({ port: port });
      this.ejs[port].load();
      this.host.listen(port);
    }
  }
}
module.exports.Host = Host;
