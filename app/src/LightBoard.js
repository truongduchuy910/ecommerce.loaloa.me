import React from "react";
import Box from "@material-ui/core/Box";

function LightBoard(props) {
  return (
    <Box
      maxWidth="lg"
      style={{
        border: 1,
        background: "rgba(255,255,255,1)",
        borderRadius: 8,
        padding: 28
      }}
    >
      {props.children}
    </Box>
  );
}
export default LightBoard;
