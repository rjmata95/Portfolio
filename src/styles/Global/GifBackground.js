import { bg, bggif } from "../../constants/constants";
import { Parallax } from "react-parallax";
const GifBackground = ({ children }) => {
  return <Parallax bgImage={bg}>{children}</Parallax>;
};

export default GifBackground;
