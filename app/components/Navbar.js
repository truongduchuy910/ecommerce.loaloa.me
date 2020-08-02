import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../src/logo";

import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const query = gql`
  query {
    allUsers {
      id
      email
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: theme.spacing(2),
  },
}));
export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { data, loading, error } = useQuery(query);
  const viewer = data?.allUsers[0];
  const shouldRedirect = !(loading || data) || error;
  const router = useRouter();
  useEffect(() => {
    if (shouldRedirect) {
      router.push("/signin");
    }
  }, [shouldRedirect]);

  const handleLogout = () => {
    router.push("/signout");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          Loa Loa
        </Typography>
        {viewer && !loading ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>{viewer.email}</MenuItem>
              <MenuItem onClick={handleLogout}> signout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Skeleton variant="rect" height={20} />
        )}
      </Toolbar>
    </AppBar>
  );
}
