import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";

function Layout(props) {
  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "url(/img/tuvilogic_bg.jpg)",
        backgroundRepeat: "true",
        backgroundPosition: "center"
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          padding: 8
        }}
      >
        {props.children}
      </Container>
    </Box>
  );
}
export default Layout;
