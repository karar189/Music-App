import React, { useState } from "react";
import TrackList from "../trackList/TrackList";

import { Grid, Modal, Container } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import LoopIcon from "@mui/icons-material/Loop";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const PlayFunction = () => {
  const [paused, setPaused] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid>
        <IconButton aria-label="loop">
          <LoopIcon fontSize="medium" />
        </IconButton>

        <IconButton aria-label="previous song">
          <FastRewindRounded fontSize="large" />
        </IconButton>
        <IconButton
          aria-label={paused ? "play" : "pause"}
          onClick={() => setPaused(!paused)}
        >
          {paused ? (
            <PlayArrowRounded sx={{ fontSize: "3rem" }} />
          ) : (
            <PauseRounded sx={{ fontSize: "3rem" }} />
          )}
        </IconButton>
        <IconButton aria-label="next song">
          <FastForwardRounded fontSize="large" />
        </IconButton>

        <IconButton aria-label="list">
          <QueueMusicOutlinedIcon onClick={handleOpen} fontSize="queue list" />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <TrackList />
        </Modal>
        <IconButton aria-label="shuffle">
          <ShuffleIcon fontSize="medium" />
        </IconButton>
      </Grid>
    </>
  );
};

export default PlayFunction;
