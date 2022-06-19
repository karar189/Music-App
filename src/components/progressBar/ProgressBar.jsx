import React from "react";
import Slider from "@mui/material/Slider";

const ProgressBar = () => {
  return (
    <>
      <Slider
        aria-label="Temperature"
        defaultValue={0}
        color="secondary"
        min={0}
        max={100}
      />
    </>
  );
};

export default ProgressBar;
