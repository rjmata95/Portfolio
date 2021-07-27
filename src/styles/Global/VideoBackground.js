import { bgvideo } from "../../constants/constants";

const VideoBackground = () => {
  return (
    <>
      <video
        autoPlay
        // loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
          height: "100%",
          objectFit: "cover",
          opacity: "0.8",
          zIndex: "-1",
        }}
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
          height: "100%",
          background: "#2b4852",

          mixBlendMode: "overlay",
        }}
      />
    </>
  );
};

export default VideoBackground;
