import { Typography } from "@material-ui/core";
import GoogleContactForm from "../components/GoogleContactForm";
import Background from "../styles/Global/Background";

const Contact = () => {
  return (
    <>
      <Background />
      {/* <Typography variant="h1" color="secondary">
        Contact Me Form
      </Typography> */}
      <GoogleContactForm />
    </>
  );
};

export default Contact;
