import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/AudioPlayer.module.css";

import { Container, Slider, Box, Grid } from "@mui/material";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay30Icon from "@mui/icons-material/Replay30";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import IconButton from "@mui/material/IconButton";

import CoverImage from "./CoverImage";

const AudioPlayer = (props) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };
  const mark = [
    {
      value: 0,
      label: calculateTime(currentTime),
    },
    {
      value: 100,

      label: calculateTime(duration),
    },
  ];
  return (
    <>
      <CoverImage props={props} />
      <Container>
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioPlayer}
        ></audio>
        {/* current time */}
        {/* <div className={styles.currentTime}>{calculateTime(currentTime)}</div> */}
        {/* progress bar */}
        <Container>
          {" "}
          <Slider
            type="range"
            className={styles.progressBar}
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
            value={currentTime}
            min={0}
            max={100}
            step="1"
            marks={mark}
            color="secondary"
          />
        </Container>
        <Container maxWidth="xs">
          {/* duration */}
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton>
              {" "}
              <FastRewindIcon
                onClick={() => {
                  SkipSong(true);
                }}
                fontSize="large"
              />
            </IconButton>
            <IconButton>
              <Replay30Icon onClick={backThirty} fontSize="large" />
            </IconButton>

            <IconButton onClick={togglePlayPause}>
              {isPlaying ? (
                <PauseRounded fontSize="large" />
              ) : (
                <PlayArrowRoundedIcon fontSize="large" />
              )}
            </IconButton>

            <IconButton>
              <Forward30Icon onClick={forwardThirty} fontSize="large" />
            </IconButton>

            <IconButton>
              <FastForwardIcon
                onClick={() => {
                  SkipSong(true);
                }}
                fontSize="large"
              />
            </IconButton>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default AudioPlayer;
