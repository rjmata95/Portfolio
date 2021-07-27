import { Grid, useTheme, useMediaQuery } from "@material-ui/core";
import CardCarousel from "../components/CardCarousel";
import Background from "../styles/Global/Background";
import { backendProjects as projects } from "../constants/constants";
import { useHistory } from "react-router";
const Backend = () => {
  const history = useHistory();
  const handleModalButton = (project) => {
    window.open(project.src, "_blank");
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      {!isMobile && <Background />}
      <Grid container spacing={2} justifyContent="space-around">
        {projects.map((project) => (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <CardCarousel
                content={project}
                buttonAction={handleModalButton}
                modalAction={{
                  action: () => history.push("/contact"),
                  name: "Contact Me",
                }}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default Backend;
