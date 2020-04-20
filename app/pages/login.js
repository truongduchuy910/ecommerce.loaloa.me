import React, { Component } from "react";
import LoginForm from "../components/users/loginForm";
import Layout from "../src/Layout";
import Container from "@material-ui/core/Container";
function Login() {
  return (
    <Layout style={{ backgroundColor: "rgb(250, 251, 252)" }}>
      <Container maxWidth="sm" style={{ padding: 8 }}>
        <LoginForm />
      </Container>
    </Layout>
  );
}
export default Login;
