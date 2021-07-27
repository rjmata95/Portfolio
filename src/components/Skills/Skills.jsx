import { IconContext } from "react-icons/lib";
import { Grid } from "@material-ui/core";
import { useStyles, IconGrid, IconLabel } from "./styles";
import { skills } from "../../constants/constants";
const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <IconContext.Provider
        value={{
          title: "Skill",
          className: classes.icons,
        }}
      >
        <IconLabel variant="h3" align="center">
          Skills
        </IconLabel>
        <Grid container justifyContent="space-around">
          {skills.map((skill, i) => (
            <IconGrid key={i}>
              {skill.icon}
              <IconLabel>{skill.label}</IconLabel>
            </IconGrid>
          ))}
        </Grid>
      </IconContext.Provider>
    </div>
  );
};

export default Skills;
