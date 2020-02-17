const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { config } = require("./config");

const keystone = new Keystone({
  secureCookies: false,
  name: config.name,
  adapter: new MongooseAdapter(config.mongoose.connect),
  onConnect: async keystone => {
    const crypto = require("crypto");
    const {
      data: {
        _allUsersMeta: { count }
      }
    } = await keystone.executeQuery(
      `query {
      _allUsersMeta {
        count
      }
    }`
    );

    if (count < 1) {
      const password = config.user.password;
      const email = config.user.email;
      console.log("email: ", email);
      console.log("password: ", password);
      await keystone.executeQuery(
        `mutation initialUser($password: String, $email: String) {
            createUser(data: {seller: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
        {
          variables: {
            password,
            email
          }
        }
      );
    }
  }
});

const fileAdapter = new LocalFileAdapter(config.fileStore);

const userConfig = require("./lists/users");
keystone.createList("User", userConfig);

const galleryConfig = require("./lists/galleries")(fileAdapter);
keystone.createList("Gallery", galleryConfig);

const hashtagConfig = require("./lists/hashtags");
keystone.createList("Hashtag", hashtagConfig);

const categoryConfig = require("./lists/categories")(fileAdapter);
keystone.createList("Category", categoryConfig);

const brandConfig = require("./lists/brands");
keystone.createList("Brand", brandConfig);

const attributeConfig = require("./lists/attributes");
keystone.createList("Attribute", attributeConfig);

const postConfig = require("./lists/posts")(fileAdapter);
keystone.createList("Post", postConfig);

const productConfig = require("./lists/products")(fileAdapter);
keystone.createList("Product", productConfig);

const bannerConfig = require("./lists/banners")(fileAdapter);
keystone.createList("Banner", bannerConfig);

const customerConfig = require("./lists/customers");
keystone.createList("Customer", customerConfig);

const billConfig = require("./lists/bills");
keystone.createList("Bill", billConfig);
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User"
});
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: true,
      authStrategy
    })
  ],
  configureExpress: app => {
    const fs = require("fs");
    const path = require("path");
    const ejs = require("ejs");
    const http = require("http");
    const express = require("express");

    app.use(express.static("store"));

    class Host {
      routers = {};
      constructor({ port }) {
        //try to read folder. Add if it not exist
        try {
          const ports = fs.readdirSync("views/" + port);
          try {
            const pages = fs.readdirSync("views/" + port + "/pages");
            pages.forEach(file => {
              let name = path.basename(file, ".ejs");
              this.routers[name] = port + "/pages/" + name;
            });
          } catch (err) {
            fs.mkdirSync("views/" + port + "/pages");
          }
        } catch (err) {
          fs.mkdirSync("views/" + port);
        }
      }
      ejsPath({ name }) {
        //is exists
        let path = this.routers[name];
        if (path) return path;

        //not exist
        if (this.routers["home"]) return this.routers["home"];
        //home is not exist
        else return "hello-world";
      }
    }
    class Server {
      constructor() {
        this.app = express();
        this.host = new Array();
        this.app.set("view engine", "ejs").get("*", (req, res) => {
          let url = req.url.slice(1);
          let port = req.socket.localPort;
          res.render(this.host[port].ejsPath({ name: url }));
        });
      }
      start({ from, to }) {
        for (let port = from; port < to; port++) {
          this.host[port] = new Host({ port: port });
          this.app.listen(port);
        }
      }
    }
    const server = new Server();
    server.start({ from: 7000, to: 7011 });
  }
};
