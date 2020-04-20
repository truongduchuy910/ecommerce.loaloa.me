import cookie from "js-cookie";

export default async function request({ body }) {
  const uri = window.location.origin + "/admin/api";
  let fetch = require("isomorphic-fetch");

  let headers = {
    "Content-Type": "application/json"
  };
  let token = cookie.get("token");
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(uri, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers,
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(body)
  });
  let data = await response.json();
  return data;
}
