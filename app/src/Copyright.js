import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Link from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

export default function Copyright({ defaultValue, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  return (
    <Typography
      style={{ margin: 7 }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      <br />
      {"Power by "}
      <MuiLink color="inherit" href="https://loaloa.tech/">
        Loa Loa Team
      </MuiLink>
      <br />
      <Switch
        checked={defaultValue}
        color="default"
        onChange={handleChange}
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    </Typography>
  );
}
