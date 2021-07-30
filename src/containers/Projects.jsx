import Grid from "@material-ui/core/Grid";
import Background from "../styles/Global/Background";
import Project from "../components/Project";
import { experiences } from "../constants/constants";
import useStyles from "../styles";
import { Typography } from "@material-ui/core";

const Projects = () => {
  const handleModalClick = (name) => console.log(`this is the action ${name}`);
  const classes = useStyles();
  return (
    <>
      <Background />
      <Grid container spacing={4} justifyContent="space-around">
        <Grid item xs={12}>
          <div className={classes.background__dark}>
            <Typography variant="h5" align="center" color="secondary">
              Which kind of projects would you like to see first?
            </Typography>
          </div>
        </Grid>
        {experiences.map((experience) => (
          <>
            <Grid item xs={12} sm={6} lg={4}>
              <Project content={experience} buttonAction={handleModalClick} />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
