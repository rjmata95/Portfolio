import {
  Container,
  Typography,
  Grid,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import MyFooter from "./styles/Footer";
import opacity from "../Layout/opacity";
import { useLocation } from "react-router-dom";
import {
  LinkedIn,
  GitHub,
  Instagram,
  PhoneIphone,
  Email,
} from "@material-ui/icons";

const Footer = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = false;

  return !isMobile ? (
    <MyFooter component="footer" opacity={opacity(location)}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
                How do you take your coffee?
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              {/* <Button
                href="tel:+14079238918"
                target="_blank"
                startIcon={<PhoneIphone />}
              >
                <Typography>+1 (407)-9238918</Typography>
              </Button> */}
              <Button
                href="mailto:rjmata95@gmail.com"
                target="_blank"
                startIcon={<Email />}
                size="small"
              >
                <Typography variant="subtitle2">Rjmata95@gmail.com</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            justifyContent="space-evenly"
            xs={12}
            sm={6}
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
                Raynulfo Mata ©
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                href="https://www.linkedin.com/in/raynulfo-mata/"
                target="_blank"
                size="small"
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://github.com/rjmata95"
                target="_blank"
                size="small"
              >
                <GitHub fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://instagram.com/rjmata95"
                target="_blank"
                size="small"
              >
                <Instagram fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MyFooter>
  ) : (
    <></>
  );
};

export default Footer;
