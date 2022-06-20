import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

export const Header = () => {

  const [listopen, setlistopen] = useState(false);
  const listOpen=() => {
      setlistopen(!listopen);
  }

  const [snsopen, setsnsopen] = useState(false);
  const snsOpen=() => {
      setsnsopen(true);
  }
  const snsClose=() => {
      setsnsopen(false);
  }

  return (
    <>
        <Box sx={{ flexGrow: 1 }} style={{height: '56px'}}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={listOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
              50/50
            </Typography>
            <IconButton color="inherit" onClick={snsOpen}>
              <ShareIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor='left' open={listopen} onClose={listOpen}>
          <List sx={{ width: 200 }}>
            <ListItem>
              <ListItemIcon component={Link} to="/">
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Drawer>
        <Dialog open={snsopen} onClose={snsClose}>
          <DialogTitle id="alert-dialog-title" align="center">
            シェアする
          </DialogTitle>
          <DialogContent sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <FacebookShareButton url="location.href">
            <FacebookIcon/>
          </FacebookShareButton>
          <TwitterShareButton url="location.href">
            <TwitterIcon />
          </TwitterShareButton>
          </DialogContent>
        </Dialog>
        </Box>
    </>
  )
}