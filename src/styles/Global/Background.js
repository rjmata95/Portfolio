import { Parallax } from "react-scroll-parallax";
import { bg } from "../../constants/constants";
import { useState, useEffect } from "react";

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* <Parallax> */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
          height: "100vh",
          background: "#463830",
          mixBlendMode: "overlay",
          zIndex: "-1",
          transform: `translateY(${offsetY}px)`,
          // transition: "transform 1s ease-in-out 0.01s",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
          height: "100vh",
          backgroundImage: `url(${bg})`,
          zIndex: "-1000",
          transform: `translateY(${offsetY}px)`,
        }}
      />
      <img
        src={bg}
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
          height: "100vh",
          objectFit: "cover",
          opacity: "0.8",
          zIndex: "-2",
          transform: `translateY(${offsetY}px)`,
          transition: "transform 1s ease-in-out 0.01s",
        }}
      />
      {/* <div
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
          height: "100vh",
          backgroundImage: `url(${bg})`,
          zIndex: "-1000",
          // transform: `translateY(${offsetY}px)`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      /> */}
      {/* </Parallax> */}
    </>
  );
};

export default Background;
