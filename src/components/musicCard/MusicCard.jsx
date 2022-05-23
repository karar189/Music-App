import React from "react";
import "./musicCard.css";
import { styled } from "@mui/material/styles";

import ProgressBar from "../progressBar/ProgressBar";
import PlayFunction from "../playFunctions/PlayFunction";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const MusicCard = () => {
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
                <Img alt="musicCover" src="" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="h5" component="h2">
                    Track 1
                  </Typography>
                  <Typography variant="subtitle1" component="h2">
                    Artist
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ProgressBar />
          <Grid>
            <PlayFunction />
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default MusicCard;
