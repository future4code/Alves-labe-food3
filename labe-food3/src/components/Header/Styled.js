import { Toolbar, Typography } from "@mui/material";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import styled from "styled-components";

export const TitleBar = styled(Typography)`
color:black;
margin-top:1vw;
position:fixed;
`

export const HeaderBar = styled(Toolbar)`
padding-bottom:2vw;
background-color:white;
display:flex;
justify-content: center;


`

export const BackButton = styled(ArrowBackIosIcon)`
  color: black;
  position:relative;  
  right:48%;
  cursor: pointer;
`;