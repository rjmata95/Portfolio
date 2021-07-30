import ContactForm from "../components/ContactForm";
import emailjs from "emailjs-com";
import Background from "../styles/Global/Background";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import Loading from "../components/Loading";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
  process.env;
const Contact = () => {
  const [loading, setLoading] = useState(false);
  // const onSubmit = (values, resetForm, cb) => {
  //   setLoading(true);
  //   console.log(values);
  //   setTimeout(() => {
  //     resetForm({ values: "" });
  //     setLoading(false);
  //     cb();
  //   }, 2000);
  // };

  const handleSubmit = async (values, resetForm, cb) => {
    setLoading(true);
    try {
      const templateParams = {
        name: values.name,
        email: values.email,
        organization: values.organization,
        message: values.message,
      };
      await emailjs.send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        templateParams,
        REACT_APP_USER_ID
      );
      resetForm({ values: "" });
      setLoading(false);
      return cb();
    } catch (e) {
      alert("Something went wrong, try again");
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <>
      <Background />
      <ContactForm onSubmit={handleSubmit} loading={loading} />
    </>
  );
};

export default Contact;
