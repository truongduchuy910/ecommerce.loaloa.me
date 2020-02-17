module.exports.config = {
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
  }
};
