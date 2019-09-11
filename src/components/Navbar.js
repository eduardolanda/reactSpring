import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginLeft: "auto"
  },
  menuIcon: {
    color: "white"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#1e1c2a" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" className={classes.menuIcon}>
              <MenuIcon />
            </Link>
          </IconButton>
          <div className={classes.title}>
            <Button color="inherit">LinkedIn</Button>
            <Button color="inherit">Github</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
