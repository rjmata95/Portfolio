import Header from "../Header";
import Footer from "../Footer";
import { Container, ThemeProvider } from "@material-ui/core";
import { theme } from "./styles/theme.js";
import { useStyles, StyledBox as Box } from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Header className={classes.header} />
          <Container className={classes.content} maxWidth="lg">
            {children}
          </Container>
          <Footer className={classes.footer} />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Layout;
