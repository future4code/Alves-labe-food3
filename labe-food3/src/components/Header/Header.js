import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { HeaderBar, TitleBar, BackButton } from "./Styled";

export default function Header(props) {
  const { title, back } = props;

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <HeaderBar color="white" variant="dense">
          {back === "true" ? (
            <BackButton onClick={() => goBack(navigate)} />
          ) : (
            ""
          )}
  
          <TitleBar variant="h6" color="prymaryColor" component="div">
            {title}
          </TitleBar>
        </HeaderBar>
      </AppBar>
    </Box>
  );
}
