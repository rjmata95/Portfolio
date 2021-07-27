import {
  Dialog,
  styled,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const Bg = styled((props) => <div {...props} />)(({ theme }) => ({
  height: "80vh",
  // maxWidth: "345",
  backgroundColor: theme.palette.background.secondary,
  color: theme.palette.text.primary,
  borderRadius: "25px",
  overflow: "hidden",
  alignItems: "center",
}));

export const StyledDialog = styled((props) => (
  <Dialog {...props} PaperComponent={Bg} />
))({
  // alignItems: "center",
  // direction: "column",
  // margin: "0 auto",
});

export const StyledDialogContent = styled(DialogContent)({
  // paddingTop: "56.25%",
  height: "75%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  // alignSelf: "center",
  // margin: "0 auto",
});

export const DialogImage = styled((props) => <div {...props} />)({
  height: "60%",
  // width: "80%",
  margin: ".5rem 0",
});

export const StyledDialogActions = styled(DialogActions)({
  display: "flex",
  justifyContent: "space-between",
  width: "80%",
});

export const SwipeButton = styled(Button)({
  textTransform: "none",
});
