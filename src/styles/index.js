import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  bg__primary: {
    background: theme.palette.secondary.main,
    width: "100%",
  },
  text__primary: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
