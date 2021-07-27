import { Link } from "react-router-dom";
import { styled } from "@material-ui/core";

const StyledComponent = styled(Link)({
  color: "inherit",
  textDecoration: "none",
});

export default function MyLink({ children, ...rest }) {
  return <StyledComponent {...rest}>{children}</StyledComponent>;
}
