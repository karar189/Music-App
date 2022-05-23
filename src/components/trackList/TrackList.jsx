import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const TrackList = () => {
  return (
    <>
      <IconButton aria-label="loop">
        <CloseIcon fontSize="medium" />
      </IconButton>
    </>
  );
};

export default TrackList;
