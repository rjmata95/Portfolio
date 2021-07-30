import { CircularProgress } from "@material-ui/core";
import useStyles from "../../styles";

const Loading = () => {
  const classes = useStyles();
  return (
    // <div className={classes.background__dark}>
    <CircularProgress
      style={{
        padding: "4rem",
        position: "relative",
        left: "35%",
      }}
      size={200}
    />
  );
};

export default Loading;
