import { Button, styled } from "@material-ui/core";
const StyledButton = styled((props) => (
  <Button variant="outlined" color="secondary" {...props} />
))({
  textTransform: "none",
});

export default StyledButton;
