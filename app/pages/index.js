import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { TextField, Box, Button, Grid } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import Link from "../src/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} container alignItems="center" justify="center">
            <Button
              href="https://ad.loaloa.me/admin/sign/"
              target="_blank"
              variant="outlined"
              color="secondary"
              style={{ width: "250px" }}
            >
              Quản lí sản phẩm
            </Button>
          </Grid>
          <Grid item xs={12} container alignItems="center" justify="center">
            <Button
              href="https://bot.loaloa.me"
              target="_blank"
              variant="outlined"
              color="secondary"
              style={{ width: "250px" }}
            >
              Quản lí Messenger
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Copyright />
    </Container>
  );
}
