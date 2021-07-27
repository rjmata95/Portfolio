import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core";

const StyledComponent = styled(Button)(({ theme }) => ({
  color: "inherit",
  "&:hover": {
    background: "#fff",
    color: "rgba(0,0,0,0.95)",
  },
  margin: "0 auto",
  alignSelf: "center",
}));

export default function MyButton({ children, ...rest }) {
  return <StyledComponent {...rest}>{children}</StyledComponent>;
}
