import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { HeaderBar, TitleBar } from "./Styled";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <HeaderBar color="white" variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <TitleBar variant="h5" color="prymaryColor" component="div">
            iFuture
          </TitleBar>
        </HeaderBar>
      </AppBar>
    </Box>
  );
}