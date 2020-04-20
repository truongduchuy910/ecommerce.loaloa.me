import request from "../config/request";
import { Typography } from "@material-ui/core";
import Router from "next/router";
import { useState } from "react";
export default function Logout() {
  let [buttonStatus, setButtonStatus] = useState("Đăng xuất");
  return (
    <Typography
      style={{ cursor: "pointer" }}
      onClick={async () => {
        setButtonStatus("Đang đăng xuất!");
        let { data } = await request({
          body: {
            query: `mutation {
        unauthenticateUser {
          success
        }
      }`
          }
        });
        setButtonStatus("Đăng xuất thành công!");
        Router.push("/login");
      }}
    >
      {buttonStatus}
    </Typography>
  );
}
