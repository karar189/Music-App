import React, { useState } from "react";
import { Grid, Typography, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const TrackList = () => {
  return (
    <>
      <Box>
        <Divider />

        <Box sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" }}>
          <Grid container spacing={5}>
            <Grid item xs={8}>
              <Container>
                <Typography>Track List</Typography>
              </Container>
            </Grid>
            <Grid item xs={1}>
              {/* <Container>
                <IconButton aria-label="close">
                  <CloseIcon fontSize="medium" />
                </IconButton>
              </Container> */}
            </Grid>
          </Grid>

          <List aria-label="tracklist">
            <ListItemButton>
              <ListItemText primary="track 1" />
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="track 2" />
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default TrackList;
