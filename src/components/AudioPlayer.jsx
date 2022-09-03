import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/AudioPlayer.module.css";

import { Container, Slider, Box, Grid } from "@mui/material";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay30Icon from "@mui/icons-material/Replay30";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import IconButton from "@mui/material/IconButton";

import CoverImage from "./CoverImage";

const AudioPlayer = (props) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [shuffle, setShuffle] = useState(false);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  // showing the final duration of the song
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);

    setDuration(seconds);

    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // calculating the current time of the song and showing it in lable
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
    console.log(audioPlayer.current.currentTime);
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  //to add smooth transition to the progress bar
  const changePlayerCurrentTime = () => {
    // progressBar.current.style.setProperty(
    //   "--seek-before-width",
    //   `${(progressBar.current.value / duration) * 100}%`

    // );
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${progressBar.current.value / duration}%`
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
      value: duration,
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

        {/* progress bar */}
        <Container>
          <Slider
            type="range"
            className={styles.progressBar}
            defaultValue="0"
            ref={progressBar}
            // onChange={changeRange}
            value={currentTime}
            min={0}
            max={duration}
            step="0.1"
            marks={mark}
            color="secondary"
          />
        </Container>

        {/* audio controls*/}
        <Container maxWidth="xs">
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

            <IconButton></IconButton>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default AudioPlayer;
