import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";
import { Topbar, Navbar } from "../components";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    width: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  topBar: {
    zIndex: 2,
    position: "relative",
  },
  container: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    minHeight: '100%'
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: "0 0 auto",
  },
  content: {
    overflowY: "auto",
    flex: "1 1 auto",
  },
}));
const DashboardLayout = (props) => {
  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  return (
    <div className={classes.root}>
      <Topbar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <div className={classes.container}>
        <Navbar
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <main className={classes.content}>
          <Suspense fallback={<LinearProgress />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
