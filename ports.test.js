const fs = require("fs");
let files = fs.readdirSync("./ports");
const express = require("express");
files.forEach((file) => {
  let app = express();
  app.use(express.static(__dirname + "/ports/" + file));
  app.listen(Number(file));
});
