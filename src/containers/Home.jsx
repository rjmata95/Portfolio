import { Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Typed from "react-typed";
import { avatarWink as avatarRay } from "../constants/constants";
import Button from "../styles/Global/Button";
import Link from "../styles/Global/Link";
import ParticlesBg from "particles-bg";
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  home: {
    height: "100%",
    // objectFit: "cover",
    color: "#fff",
  },
  typed: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <ParticlesBg bg type="lines" />
      <Grid container justify="center" spacing={6}>
        <Grid item>
          <Avatar
            className={classes.avatar}
            alt={"Avatar Ray"}
            src={avatarRay}
            //   onClick={handleAvatarClick}
          />
        </Grid>
        <Grid item xs="12">
          <Typography variant="h3" align="center" className={classes.typed}>
            <Typed strings={["Raynulfo Mata"]} typeSpeed={40} />
            <br />
            <Typed
              strings={["Software Developer", "Electronics Engineer"]}
              typeSpeed={60}
              backSpeed={200}
              loop
            />
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Button variant="outlined" color="inherit">
            <Link to="/projects">View My Projects</Link>
          </Button>
        </Grid>
        {/* <Grid item>
            <Typography variant="h4" align="center">
              I'm a Electronics Engineer who developed an immeasurable love for
              building software solutions. Welcome to my Portfolio!
            </Typography>
          </Grid> */}
      </Grid>
    </div>
  );
};

export default Home;
