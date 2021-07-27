import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  overrides: {
    MuiButton: {
      root: {
        color: "inherit",
        textTransform: "none",
        "&:hover": {
          color: "#ff9100",
        },
        // margin: "1rem .5rem",
      },
    },
    MuiIconButton: {
      root: {
        color: "inherit",
      },
    },
    MuiTypography: {
      root: {
        color: "inherit",
      },
    },
    MuiContainer: {
      root: {
        minHeight: "100%",
      },
    },
  },
  palette: {
    primary: {
      // main: "#14396a",
      // main: "#112c11",
      main: "#74d6aa",
    },
    secondary: {
      // main: "#ff9100",
      // main: "#c4efc5",
      main: "#fbcb63",
    },
    background: {
      // primary: "#0d210d",
      secondary: "#2b4852",
      // primary: "#173d17",
      // secondary: "#240805",
      primary: "#fc6464",
      // secondary: "#173d17",
    },
    text: {
      // primary: "#ff9100",
      primary: "#fbcb63",
    },
  },
});
