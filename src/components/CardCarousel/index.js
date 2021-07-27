import { CardActionArea, Typography } from "@material-ui/core";
import React from "react";
import {
  StyledCard as Card,
  StyledCardHeader as CardHeader,
  StyledCardMedia as CardMedia,
  StyledCardContent as CardContent,
  StyledCardActions as CardActions,
} from "../Project/styles";
import ModalCarousel from "../ModalCarousel";
import StyledButton from "../../styles/Global/StyledButton";

const CardCarousel = ({ content, buttonAction, modalAction }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <ModalCarousel
        isOpen={open}
        onClose={handleClickDialog}
        content={content}
        button={
          <StyledButton
            onClick={() => {
              modalAction.action();
              handleClickDialog();
            }}
          >
            {modalAction.name}
          </StyledButton>
        }
      />
      <Card raised key={content.id}>
        <CardActionArea onClick={handleClickDialog}>
          <CardHeader
            title={
              <Typography variant="h4" align="center">
                {content.title}
              </Typography>
            }
          />
          <CardMedia image={content.image} title={content.title} />
        </CardActionArea>

        <CardContent>
          <Typography variant="subtitle2">{content.description}</Typography>
        </CardContent>
        <CardActions>
          <StyledButton onClick={() => buttonAction(content)}>
            View Source
          </StyledButton>
          <StyledButton onClick={() => handleClickDialog()}>
            View Demo
          </StyledButton>
        </CardActions>
      </Card>
    </>
  );
};

export default CardCarousel;
