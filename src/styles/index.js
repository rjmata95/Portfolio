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
  text__secondary: {
    color: theme.palette.secondary.main,
  },
  background: {
    background: theme.palette.primary.light,
    margin: "1rem 0",
    padding: "2rem 0",
    borderRadius: "25px",
    color: theme.palette.background.secondary,
  },
  background__dark: {
    background: theme.palette.background.secondary,
    margin: "1rem",
    padding: "2rem",
    borderRadius: "25px",
    color: theme.palette.secondary.dark,
  },
  notchedOutline: {
    borderColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
