import React from "react";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import Background from "../styles/Global/Background";
import Modal from "../components/Project/Modal";
const Notfound = () => {
  const history = useHistory();
  return (
    <>
      <Background />
      <Modal
        isOpen
        content={
          <Typography variant="h2" align="center">
            Page Not Found
          </Typography>
        }
        button={
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            go home
          </Button>
        }
      />
    </>
  );
};

export default Notfound;
