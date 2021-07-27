import { Typography, Button } from "@material-ui/core";
import React from "react";
import {
  StyledCard as Card,
  StyledCardHeader as CardHeader,
  StyledCardMedia as CardMedia,
  StyledCardContent as CardContent,
  StyledCardActionArea as CardActionArea,
  StyledCardActions as CardActions,
} from "./styles";
import SwipeableViews from "react-swipeable-views";
import Chips from "../Chips";
// import Modal from "./Modal";
import { useHistory } from "react-router-dom";
const Project = ({ content, buttonAction }) => {
  // const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleClickDialog = (data) => {
    if (data.route) history.push(data.route);
  };
  const { id, title, tools, description, image } = content;
  const [curentStep, setCurentStep] = React.useState(0);
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
    <>
      <Card raised key={id}>
        <CardHeader
          title={
            <Typography variant="h4" align="center">
              {content.title}
            </Typography>
          }
        />
        <CardActionArea onClick={() => handleClickDialog(content)}>
          <CardMedia image={image} title={title} />
        </CardActionArea>
        <CardContent>
          <SwipeableViews
            enableMouseEvents
            index={curentStep}
            onChangeIndex={handleStepChange}
          >
            <Chips content={tools} />
            <Typography variant="caption">{description}</Typography>
          </SwipeableViews>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={handleNextStep}
          >
            {curentStep ? "< Stack Used" : "What I've Learned >"}
          </Button>
          {/* <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => buttonAction(title)}
          >
            View Demo
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
};

export default Project;
