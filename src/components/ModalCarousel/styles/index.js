import {
  Dialog,
  styled,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export const Bg = styled((props) => <div {...props} />)(({ theme }) => ({
  height: "80vh",
  // maxWidth: "345",
  backgroundColor: theme.palette.background.secondary,
  color: theme.palette.text.primary,
  borderRadius: "25px",
  overflow: "hidden",
}));

export const StyledDialog = (props) => (
  <Dialog {...props} PaperComponent={Bg} />
);

export const StyledDialogContent = styled(DialogContent)({
  // paddingTop: "56.25%",
  height: "75%",
  width: "100%",
});

export const DialogImage = styled((props) => <div {...props} />)({
  height: "70%",
  width: "80%",
});

export const StyledDialogActions = styled(DialogActions)({
  display: "flex",
  justifyContent: "space-between",
});

export const SwipeButton = styled(Button)({
  textTransform: "none",
});
