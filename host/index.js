const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const http = require("http");
const express = require("express");

class Host {
  routers = {};
  constructor({ port }) {
    this.port = port;
    const hostPath = __dirname + "/ports/" + port + "/pages";
    try {
      const pages = fs.readdirSync(hostPath);
      pages.forEach(file => {
        let name = path.basename(file, ".ejs");
        this.routers[name] = path.join(hostPath, name);
      });
    } catch (err) {
      fs.mkdirSync(hostPath);
    }
  }

  refresh() {
    const hostPath = __dirname + "/ports/" + this.port + "/pages";
    try {
      const pages = fs.readdirSync(hostPath);
      pages.forEach(file => {
        let name = path.basename(file, ".ejs");
        this.routers[name] = path.join(hostPath, name);
      });
    } catch (err) {
      fs.mkdirSync(hostPath);
    }
  }
  ejsPath({ name }) {
    const page = this.routers[name];
    const home = this.routers["home"];
    return !name ? home : page ? page : false;
  }
}
class Server {
  constructor({ keystone }) {
    this.app = express();
    this.host = new Array();
    const publicUrl = path.join(path.resolve(), "host/ports/public");
    this.app
      .set("view engine", "ejs")
      .set("views", path.join(__dirname, "ports"))
      .use(express.static(publicUrl))
      .get("/", async (req, res) => {
        let port = req.socket.localPort;
        let data = await keystone.executeQuery(
          `
	      query {
		  allBrands(where:{seller:{port:"${port}"}}) {
		    name
		  }
		  allCategories(where:{seller:{port:"${port}"}}) {
		    name
		  }
		  allBanners(where:{seller:{port:"${port}"}}) {
		    file {
		      publicUrl
		    }
		  }
		}
	`
        );
        const ejsPath = this.host[port].ejsPath({ name: "home" });
        res.render(ejsPath, data);
      })
      .get("/home", async (req, res) => {
        res.redirect("/");
      })
      .get("/refresh", async (req, res) => {
        let port = req.socket.localPort;
        this.host[port].refresh();
        res.redirect("/");
      })

      .get("/detail/", async (req, res) => {
        let port = req.socket.localPort;
        const ejsPath = this.host[port].ejsPath({ name: "detail" });
        res.render(ejsPath);
      })
      .get("*", (req, res) => {
        let port = req.socket.localPort;
        const ejsPath = this.host[port].ejsPath({ name: "404" });
        res.render(ejsPath);
      });
  }
  start({ from, to }) {
    for (let port = from; port < to; port++) {
      this.host[port] = new Host({ port: port });
      this.app.listen(port);
    }
  }
}
module.exports.Server = Server;
