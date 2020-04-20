import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import { FacebookProvider, CustomChat } from "react-facebook";
function Layout(props) {
  return (
    <FacebookProvider appId="335701763968445" chatSupport>
      <CustomChat pageId="395622761034219" minimized={false} />
      <Box style={{ backgroundColor: "rgb(250, 251, 252)" }}>
        {props.children}
      </Box>
    </FacebookProvider>
  );
}
export default Layout;
