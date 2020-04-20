export default ctx => {
  let a = "";
  let uri = "";
  if (process.env.NODE_ENV == "development") a = "http://";
  else a = "https://";
  if (ctx && ctx.req) {
    uri = a + ctx.req.headers.host + "/admin/api";
  } else {
    uri = window.location.origin + "/admin/api";
  }
  return uri;
};
