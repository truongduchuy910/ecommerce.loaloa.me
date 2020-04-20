import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { GraphQLClient } from "graphql-request";
import { Component } from "react";
import getGraphUri from "../utils/getGraphUri";
export const login = ({ token, id, email }) => {
  cookie.set("id", id, { path: "" });
  cookie.set("email", email, { path: "" });
  cookie.set("token", token, { path: "" });
  Router.push("/");
};

export const signup = () => {
  Router.push("/login");
};
export const auth = ctx => {
  const { token, id, email } = nextCookie(ctx);
  console.log(token, email);
  if (!token) {
    if (ctx.req) {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    } else Router.push("/login");
  }

  return { token, id, email };
};

const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";

export const withAuthSync = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const { token, id, email } = auth(ctx);
      const client = new GraphQLClient(getGraphUri(ctx), {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      ctx.client = client;
      ctx.id = id;
      ctx.email = email;
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return {
        ...componentProps,
        client,
        token,
        id,
        email
      };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
