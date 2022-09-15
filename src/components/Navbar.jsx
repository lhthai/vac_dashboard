import React, { useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import {
  Drawer,
  Typography,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LogoutIcon from "@material-ui/icons/ExitToApp";
const { version } = require("../../package.json");

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    overflowY: "auto",
  },
  content: {
    padding: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  listItemText: {
    fontSize: 16,
  },
  versionText: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    fontSize: 14,
    fontWeight: 500
  },
}));

const Navbar = (props) => {
  const location = useLocation();
  const { openMobile, onMobileClose, className, ...rest } = props;
  const classes = useStyles();

  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }
  }, [location.pathname]);

  const navbarContent = (
    <div className={classes.content}>
      <img src={"/images/logo.png"} alt="logo" style={{ width: "100%" }} />
      <Divider className={classes.divider} />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button component={Link} to="/logout">
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
      </List>
      <Typography className={classes.versionText}>
        Version: {version}
      </Typography>
    </div>
  );
  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div {...rest} className={clsx(classes.root, className)}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
          {navbarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

export default Navbar;
