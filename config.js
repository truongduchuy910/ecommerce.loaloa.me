const config = {
  name: "loaloa",
  mongoose: {
    connect: {}
  },
  host: {
    from: 7000,
    to: 7011
  },
  user: {
    email: "truongduchuy910@gmail.com",
    password: "loaloa.me"
  },
  fileStore: {
    src: "./store/img",
    path: "/img"
  },
  messenger: { port: 9999 }
};
module.exports.config = config;

module.exports.onConnect = async keystone => {
  /* FRONTEND AREA */
  const { Server } = require("./host/index");
  const server = new Server({ keystone });
  server.start({ from: config.host.from, to: config.host.to });
  /* MESSENGER AREA *
  const { Bot } = require("./messenger/index");
  const bot = new Bot({ keystone });
  bot.start(config.messenger.port);
  /**/
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
};
