import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Background from "../styles/Global/Background";
import GifBackground from "../styles/Global/GifBackground";
import Project from "../components/Project";
import { experiences } from "../constants/constants";
import { useEffect, useState } from "react";

const Projects = () => {
  const handleModalClick = (name) => console.log(`this is the action ${name}`);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      {/* {!isMobile && <Background />} */}
      <Background />
      <Grid container spacing={3} justifyContent="space-around">
        {experiences.map((experience) => (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <Project content={experience} buttonAction={handleModalClick} />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
