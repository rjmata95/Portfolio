import {
  DialogContent,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  styled,
  CardActionArea,
} from "@material-ui/core";

export const StyledDialogContent = styled(DialogContent)({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const Img = styled((props) => <img {...props} />)({
  // height: "100%",
  maxWidth: "100%",
  // paddingTop: "56.25%",
  // margin: "0 auto",
});

export const StyledCard = styled(Card)(({ theme }) => ({
  minHeight: "100%",
  // maxWidth: "345",
  backgroundColor: theme.palette.background.secondary,
  color: theme.palette.text.primary,
  borderRadius: "25px",
  boxShadow: "2px 2px 10px 2px rgba(255,255,255,.3)",
  display: "flex",
  flexDirection: "column",
  // padding: "0 .5rem",
}));

export const StyledCardHeader = styled(CardHeader)({
  // height: "20%",
  flex: "1 0 15%",
});

export const StyledCardActionArea = styled(CardActionArea)({
  flex: "0 0 35%",
  // width: "80%",
});

export const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%",
  height: 0,
  width: "80%",
  margin: "0 auto",
});

export const StyledCardContent = styled(CardContent)({
  flex: "0 0 25%",
  width: "80%",
  alignSelf: "center",
  textAlign: "justify",
});

export const StyledCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "space-around",
  width: "80%",
  margin: "0 auto",
  flex: "0 1 20%",
});
