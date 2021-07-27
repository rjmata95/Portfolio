import { Chip } from "@material-ui/core";
import React from "react";

const Chips = ({ content }) => {
  return (
    <div>
      {content.map((item) => (
        <Chip
          label={item}
          clickable
          size="small"
          // variant="outlined"
          // color="secondary"
          style={{ margin: ".2em" }}
        />
      ))}
    </div>
  );
};

export default Chips;
