import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import { FacebookProvider, CustomChat } from "react-facebook";
function Layout(props) {
  return (
    <FacebookProvider appId="335701763968445" chatSupport>
      <CustomChat pageId="395622761034219" minimized={false} />
      <Box>{props.children}</Box>
    </FacebookProvider>
  );
}
export default Layout;
