let { LocalFileAdapter } = require("@keystonejs/file-adapters");
var fileAdapter = new LocalFileAdapter({
  src: "./store/img",
  path: "/img"
});
module.exports.fileAdapter = fileAdapter;
