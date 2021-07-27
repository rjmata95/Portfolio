import { AppBar, styled } from "@material-ui/core";
const MyAppBar = styled(AppBar)(({ theme, opacity }) => ({
  color: theme.palette.text.primary,
  backgroundColor: opacity
    ? "rgba(0,0,0,0.5)"
    : theme.palette.background.secondary,
}));

export default function (props) {
  return <MyAppBar {...props} />;
}
