import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import {
  AppBar,
  IconButton,
  Toolbar,
  Hidden,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Topbar = (props) => {
  const classes = useStyles();

  const { onOpenNavBarMobile, className, ...rest } = props;
  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
          <Typography component="h1" variant="h4" color="inherit" noWrap>
            VAC MANAGEMENT APP
          </Typography>
        </Link>

        <div className={classes.flexGrow} />
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onOpenNavBarMobile}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
