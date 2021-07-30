import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "./Textfield";
import Button from "./Button";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "../../styles";
import StyledButton from "../../styles/Global/StyledButton";
import Loading from "../Loading";

const ContactForm = ({ onSubmit, submitBtn, loading }) => {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const toggleSubmitted = () => {
    setSubmitted((prev) => !prev);
  };
  const initialValues = {
    name: "",
    email: "",
    organization: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    organization: Yup.string(),
    email: Yup.string().email("Enter a valid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <div className={classes.background__dark}>
      {!submitted ? (
        !loading ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              onSubmit(values, resetForm, toggleSubmitted);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Textfield name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Textfield name="email" label="Email Address" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="organization"
                    label="Organization (optional)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    name="message"
                    label="Message"
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12}>
                  {submitBtn ? submitBtn : <Button>Submit</Button>}
                </Grid>
              </Grid>
            </Form>
          </Formik>
        ) : (
          <Loading />
        )
      ) : (
        <Grid container xs={12} alignItems="center" direction="column">
          <Typography
            variant="h6"
            color="secondary"
            align="center"
            gutterBottom
          >
            Thanks for contacting me!
          </Typography>
          <Typography
            variant="subtitle1"
            color="secondary"
            align="center"
            gutterBottom
          >
            I'll reach you back as soon as possible!
          </Typography>
          <StyledButton onClick={() => toggleSubmitted()}>
            Submit another Response
          </StyledButton>
        </Grid>
      )}
    </div>
  );
};

export default ContactForm;
