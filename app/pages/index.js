import Copyright from "../src/Copyright";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import { withAuthSync } from "../utils/auth";
import Button from "@material-ui/core/Button";
import Layout from "../src/Layout";
import { MessageUs, SendToMessenger } from "react-facebook";
function Index({ email, id }) {
  let [status, updateStatus] = useState(false);
  return (
    <Layout>
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item xs={12} style={{ backgroundColor: "#212121" }}>
          <Container maxWidth="lg">
            <Grid item xs={12} container justify="center" alignItems="center">
              <Grid item sm={7} md={6}>
                <Typography
                  variant="h5"
                  style={{
                    marginTop: 21,
                    marginBottom: 21,
                    color: "white",
                    fontWeight: 800
                  }}
                >
                  Loa Loa Team
                </Typography>
                <Typography variant="body1" color="secondary">
                  Xin Chào, {email}
                  <br />
                  <Button
                    href="/admin"
                    variant="outlined"
                    color="secondary"
                    style={{ marginTop: 21, marginBottom: 21 }}
                  >
                    Đi đên quản lí sản phẩm
                  </Button>
                </Typography>
                <Typography
                  variant="body1"
                  color="secondary"
                  style={{ marginBottom: 21 }}
                >
                  Mã nhận thông báo của bạn là: <code>{id}</code>
                  <br />
                  Gửi mã trên vào tin nhắn.
                </Typography>

                <MessageUs
                  messengerAppId="335701763968445"
                  pageId="395622761034219"
                />
                {/* <Initialize>
                  {({ isReady, api }) => {
                    // api.ui(...) // our custom async/await api
                    // original FB api is available via window.FB
                  }}
                </Initialize> */}
              </Grid>
              <Grid item sm={5} md={6}>
                <img
                  style={{ width: "100%", padding: 21 }}
                  src="/img/development.png"
                />
              </Grid>
            </Grid>
          </Container>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ position: "absolute", zIndex: -1 }}
          >
            <path
              fill="#212121"
              fillOpacity="1"
              d="M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </Grid>

        <Grid
          item
          xs={12}
          container
          spacing={2}
          justify="center"
          alignItems="center"
          style={{ backgroundColor: "transparent" }}
        >
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <img style={{ width: "100%", padding: 21 }} src="/img/coder.png" />
          </Grid>
          <Grid item xs={12} sm={5} md={12}>
            <Typography variant="h6" align="center" style={{ color: "white" }}>
              Liên Hệ
            </Typography>
            <Typography variant="body1" align="center" color="secondary">
              Trần Ngọc Huy
              <br />
              100 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng.
              <br />
              0332813077
              <br />
              truongduchuy910@gmail.com
            </Typography>

            <Copyright />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
export default withAuthSync(Index);
