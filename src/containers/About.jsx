import { Typography, useTheme, Link } from "@material-ui/core";
import Skills from "../components/Skills/Skills";
import { cvpdf, career } from "../constants/constants";
import Timeline from "../components/Timeline";

const About = () => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.palette.background.secondary }}>
      <Typography variant="h3" align="center" color="secondary">
        I'm a Electronics Engineer who developed an immeasurable love for
        building software solutions
      </Typography>
      <Skills />
      {/* <div style={{ backgroundColor: theme.palette.background.primary }}> */}
      <Typography variant="h3" align="center" color="secondary">
        Career
      </Typography>
      <Timeline content={career} />
      {/* </div> */}
      <Typography variant="body2" color="primary">
        <Link href={cvpdf} target="_blank" download>
          Click here for PDF version
        </Link>
      </Typography>
    </div>
  );
};

export default About;
