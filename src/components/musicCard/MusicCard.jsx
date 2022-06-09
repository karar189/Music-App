import React from "react";
import "./musicCard.css";
import { styled } from "@mui/material/styles";
import { useState, useEffect, useRef } from "react";
import { Container, Grid, Paper, Typography, ButtonBase } from "@mui/material";

import ProgressBar from "../progressBar/ProgressBar";
import PlayFunction from "../playFunctions/PlayFunction";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const MusicCard = (props) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });
  // audioElement.current.play();
  // audioElement.current.pause();
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

  return (
    <>
      <Container>
        <Paper
          sx={{
            p: 5,
            margin: "auto",
            maxWidth: 500,
            height: 200,
            flexGrow: 1,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img
                  alt="musicCover"
                  src={props.songs[props.currentSongIndex].img_src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="h5" component="h2">
                    {props.songs[props.currentSongIndex].title}
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    {props.songs[props.currentSongIndex].artist}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ProgressBar />
          <Grid>
            <audio
              src={props.songs[props.currentSongIndex].src}
              ref={audioElement}
            ></audio>
            <PlayFunction
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              SkipSong={SkipSong}
            />
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default MusicCard;
