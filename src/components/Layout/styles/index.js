import { makeStyles, styled, Box } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flex: "1 1 auto",
    // minHeight: "100vh",
    zIndex: "1000",
    // [theme.breakpoints.up("lg")]: {
    //   width: "75%",
    // },
  },
  footer: {
    flexShrink: 0,
    // flex: "1 0 auto",
  },
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  // [theme.breakpoints.down("xs")]: {
  //   minHeight: "90vh",
  // },
  backgroundColor: theme.palette.background.secondary,
}));

// export default useStyles;
