import React, { useContext, useEffect } from "react";
// import usePageTitle from "../../hooks/usePageTitle";
import { useLocation } from "react-router-dom";
// import AppContext from "../../context/AppContext";
import NavBar from "./NavBar";
import { Button, Avatar, Menu, MenuItem, Typography } from "@material-ui/core";
import Link from "../../styles/Global/Link";
import { avatar as avatarRay } from "../../constants/constants";
import usePageTitle from "../../hooks/usePageTitle";

const Header = () => {
  // const { state, setUser } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const title = usePageTitle("RAYNULFO MATA");
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <NavBar
        logo={
          <Link to="/">
            <Avatar
              alt={"Avatar Ray"}
              src={avatarRay}
              onClick={handleAvatarClick}
            />
          </Link>
        }
        title={<Typography>{title}</Typography>}
        // btn={}
        // searchBar={}
        signIn={
          <>
            <Button onClick={handleAvatarClick}></Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            ></Menu>
          </>
        }
        menuItems={[
          <Link to="/projects">Projects</Link>,
          // <Link to="/resume">Resume</Link>,
          <Link to="/about">About me</Link>,
          <Link to="/contact">Contact</Link>,
        ]}
      />
    </>
  );
};

export default Header;
