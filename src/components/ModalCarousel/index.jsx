import { useState } from "react";
import { Typography, DialogTitle, IconButton } from "@material-ui/core";
import {
  StyledDialog as Dialog,
  StyledDialogContent as DialogContent,
  StyledDialogActions as DialogActions,
  DialogImage,
} from "./styles";
import { Img } from "../Project/styles";
import SwipeableViews from "react-swipeable-views";
import StyledButton from "../../styles/Global/StyledButton";
import { CancelOutlined } from "@material-ui/icons";
import Chips from "../Chips";

const ModalCarousel = ({ content, isOpen, onClose, button }) => {
  const [curentStep, setCurentStep] = useState(0);
  const handleStepChange = (step) => {
    setCurentStep(step);
  };
  const handleNextStep = () => {
    setCurentStep((prevStep) => {
      console.log(prevStep);
      if (prevStep === 0) return 1;
      else return 0;
    });
  };
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <Typography variant="h4" align="center">
          {content.title}
        </Typography>
        <IconButton
          // size="small"
          style={{ position: "absolute", top: "0.5%", right: "0.5%" }}
          onClick={() => onClose()}
          color="secondary"
        >
          <CancelOutlined variant="outlined" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogImage>
          {isOpen ? <Img src={content.gif} /> : <Img />}
        </DialogImage>
        <SwipeableViews
          enableMouseEvents
          index={curentStep}
          onChangeIndex={handleStepChange}
          style={{ flex: 1 }}
        >
          <Typography variant="subtitle1" align="justify">
            {content.learning}
          </Typography>
          <Chips content={content.tools} />
        </SwipeableViews>
      </DialogContent>
      <DialogActions>
        <StyledButton onClick={handleNextStep}>
          {curentStep ? "< Learned " : "Tools Used >"}
        </StyledButton>
        {button}
      </DialogActions>
    </Dialog>
  );
};

export default ModalCarousel;
