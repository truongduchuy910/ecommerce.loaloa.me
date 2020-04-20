import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { useState } from "react";
import React from "react";
import { request } from "graphql-request";

import { login } from "../../utils/auth";
import Layout from "../../src/Layout";
import Link from "../../src/Link";
import getGraphUri from "../../utils/getGraphUri";
export default function loginForm() {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [buttonStatus, setButtonStatus] = useState("Đăng nhập");
  async function loginButtonClick() {
    setButtonStatus("Vui lòng đợi...");
    if (username.length > 5 && password.length > 5) {
      let response = await request(
        getGraphUri(),
        `mutation($username: String, $password: String) {
      authenticateUserWithPassword(email: $username, password: $password) {
      token
      item {
          id
          email
      }
      }}`,
        {
          username,
          password,
        }
      );

      let { authenticateUserWithPassword } = response;
      if (authenticateUserWithPassword) {
        let {
          token,
          item: { id, email },
        } = authenticateUserWithPassword;
        setButtonStatus("Đang điều hướng...!");
        login({ token, id, email });
      } else {
        setButtonStatus("Sai tên đăng nhập hoặc mật khẩu.");
      }
    } else {
      setButtonStatus("Kiểm tra và thử lại");
    }
  }
  return (
    <Layout>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "95vh" }}
      >
        <Paper elevation={1} style={{ padding: 21, borderRadius: 13 }}>
          <Grid container justify="center" alignItems="center">
            <Grid item sm={12} sm={5}>
              <img
                src="/img/logo.png"
                style={{ width: "80%", maxWidth: 250 }}
              />
            </Grid>

            <Grid item sm={12} sm={7}>
              <form noValidate autoComplete="on">
                <Grid container justify="center" spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      fullWidth
                      variant="outlined"
                      id="username"
                      label="Tên đăng nhập"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      fullWidth
                      variant="outlined"
                      id="password"
                      label="Mật khẩu"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      onClick={async () => await loginButtonClick()}
                    >
                      {buttonStatus}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Layout>
  );
}
