import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import Carousel from "../../Carousel";
import { Img, StyledDialogContent as DialogContent } from "../styles";
const Modal = ({ content, button, isOpen, onClose, classes }) => {
  return (
    <Dialog
      open={isOpen}
      // TransitionComponent={<Slide />}
      // keepMounted
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{content.title}</DialogTitle>
      <DialogContent>
        <Img alt={content.title} src={content.image} />
        {/* <Carousel /> */}
        {/* {content} */}
        {/* <DialogContentText id="alert-dialog-slide-description">
          {content.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ea esse corporis sunt velit aliquid autem reiciendis voluptatibus
          officia sed harum deleniti similique, placeat praesentium?
        </DialogContentText> */}
      </DialogContent>
      <DialogActions>{button}</DialogActions>
    </Dialog>
  );
};

export default Modal;
