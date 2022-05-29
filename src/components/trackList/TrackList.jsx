import React from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const TrackList = () => {
  return (
    <>
      <Box>
        <Divider />
        <Grid>
          <Grid item xs={2}>
            hello
          </Grid>
          <Grid item xs={8}>
            <IconButton aria-label="close">
              <CloseIcon fontSize="medium" />
            </IconButton>
          </Grid>
        </Grid>

        <Box sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" }}>
          <List aria-label="tracklist">
            <ListItemButton>
              <ListItemText primary="Inbox" />
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Drafts" />
              <ListItemIcon>
                <DraftsIcon />
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
