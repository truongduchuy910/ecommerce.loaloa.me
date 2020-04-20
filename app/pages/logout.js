import { request } from "graphql-request";
import getGraphUri from "../utils/getGraphUri";
function Logout() {
  return <h1>OK</h1>;
}
Logout.getInitialProps = async ctx => {
  let data = await request(
    getGraphUri(ctx),
    `mutation {
    unauthenticateUser {
      success
    }
  }`
  );
  console.log(data);
  ctx.res.writeHead(302, { Location: "/login" });
  ctx.res.end();
  return {};
};
export default Logout;
