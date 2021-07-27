import React, { useEffect } from "react";
import {
  // AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomDrawer from "./Drawer/CustomDrawer";
import AppBar from "./styles/AppBar";
import opacity from "../../Layout/opacity";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logo: {
    marginRight: "auto",
  },
  navBar__offset: {
    marginBottom: "10vh",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "12vh",
    },
  },
}));

const NavBar = ({ logo, title, btn, menuItems, searchBar }) => {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickTitle = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <AppBar opacity={opacity(location)}>
        <Toolbar>
          <IconButton className={classes.logo}>{logo}</IconButton>
          <Button onClick={handleClickTitle} className={classes.title}>
            <Typography variant="h6">{title}</Typography>
          </Button>
          {!isMobile ? (
            <>
              {searchBar}
              <Button>{btn}</Button>
              {menuItems.map((item) => (
                <Button>{item}</Button>
              ))}
            </>
          ) : (
            <CustomDrawer menuItems={menuItems} />
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.navBar__offset} />
    </>
  );
};

export default NavBar;
