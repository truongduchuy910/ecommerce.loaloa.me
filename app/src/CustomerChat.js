import React from "react";
import { ConfigContext } from "../hooks";
import loadScript from "load-script";

let initialized = false;
let queue = [];

export function fb(callback) {
  if (initialized) {
    callback(window.FB);
  } else {
    queue.push(callback);
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: window.config.facebook.appId,
          autoLogAppEvents: true,
          status: true,
          cookie: true,
          xfbml: true,
          version: "v6.0"
        });
        initialized = true;
        queue.forEach(cb => cb(window.FB));
        queue = null;
      };
      const script =
        window.localStorage.getItem("fb:debug") === "true"
          ? "xfbml.customerchat/debug.js"
          : "xfbml.customerchat.js";
      loadScript(
        `https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js`,
        {
          async: true
        }
      );
    }
  }
}
class CustomerChat extends React.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      fb(FB => this.timeout && FB.XFBML.parse());
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    delete this.timeout;
  }

  render() {
    return (
      <ConfigContext.Consumer>
        <div
          class="fb-customerchat"
          attribution="setup_tool"
          page_id="100100461661624"
          logged_in_greeting="Nhấn nút dưới để trò chuyện."
          logged_out_greeting="Nhấn nút dưới để trò chuyện."
        ></div>
        {config => (
          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id={config.facebook.pageId}
            // theme_color="..."
            // logged_in_greeting="..."
            // logged_out_greeting="..."
            // greeting_dialog_display="..."
            // greeting_dialog_delay="..."
            // minimized="false"
            // ref="..."
          />
        )}
      </ConfigContext.Consumer>
    );
  }
}

export default CustomerChat;
