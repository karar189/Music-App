import React from "react";

import { styled } from "@mui/material/styles";
import { Container, Grid, Paper, Typography, ButtonBase } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CoverImage = ({ props }) => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default CoverImage;
