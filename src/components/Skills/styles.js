import { makeStyles, styled, Typography } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  icons: {
    fontSize: theme.typography.h3.fontSize,
    // backgroundColor: theme.palette.background.secondary,
    // borderRadius: "10px",
    padding: "0.5rem",
  },
  background: {
    background: theme.palette.primary.light,
    margin: "1rem 0",
    padding: "2rem 0",
    borderRadius: "25px",
    color: theme.palette.background.secondary,
  },
}));

// export const IconGrid = styled((props) => (
//   <Grid container item xs direction="column" alignItems="center" {...props} />
// ))(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   backgroundColor: theme.palette.background.secondary,
//   borderRadius: "10px",
//   margin: "2rem",
//   padding: "1rem",
//   width: "8rem",
// }));

export const IconGrid = styled((props) => <div {...props} />)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.background.secondary,
  borderRadius: "10px",
  margin: theme.typography.h5.fontSize,
  padding: "1rem",
  width: theme.typography.h1.fontSize,
}));

export const IconLabel = styled((props) => (
  <Typography variant="subtitle2" {...props} />
))({
  color: "inherit",
});
