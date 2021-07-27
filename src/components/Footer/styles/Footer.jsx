import { Box, styled } from "@material-ui/core";
const MyFooter = styled(Box)(({ theme, opacity }) => ({
  // color: "inherit",
  backgroundColor: opacity
    ? "rgba(0,0,0,0.5)"
    : theme.palette.background.secondary,
  color: theme.palette.text.primary,
  padding: "1rem 0",
  marginTop: "2rem",
  zIndex: "1000",
  // boxSizing: "border-box",
}));

export default function (props) {
  return <MyFooter {...props} />;
}
