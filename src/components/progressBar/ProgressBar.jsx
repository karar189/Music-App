import React from "react";
import Slider from "@mui/material/Slider";

const ProgressBar = () => {
  return (
    <>
      <Slider aria-label="Temperature" defaultValue={30} color="secondary" />
    </>
  );
};

export default ProgressBar;
