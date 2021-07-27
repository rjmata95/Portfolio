import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = (home) => {
  const [path, setPath] = useState("");
  let location = useLocation();
  useEffect(() => {
    let rawPath = location.pathname.split("/");
    const finalPath = rawPath[rawPath.length - 1].toUpperCase();
    if (finalPath === "") setPath(home);
    else setPath(finalPath);
  }, [location]);
  return path;
};

export default usePageTitle;
