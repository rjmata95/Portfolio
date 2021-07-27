import Header from "../Header";
import Footer from "../Footer";
import { Container, ThemeProvider } from "@material-ui/core";
import { theme } from "./styles/theme.js";
import { useStyles, StyledBox as Box } from "./styles";
import AppContext from "../../context/AppContext";
import initialState from "../../context/initialState";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={initialState}>
          <Box>
            <Header />
            <Container className={classes.content} maxWidth="lg">
              {children}
            </Container>
            <Footer className={classes.footer} />
          </Box>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
