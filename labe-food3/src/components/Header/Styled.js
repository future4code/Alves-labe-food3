import { Toolbar, Typography } from "@mui/material";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import styled from "styled-components";

export const TitleBar = styled(Typography)`
  color: black;
  margin-top: 1vw;
  /* position: fixed; */

`;

export const HeaderBar = styled(Toolbar)`
  padding-bottom: 2vw;
  background-color: white;
  display: flex;
  flex-direction: center;
  align-items:center;
  justify-content: center !important; 
  width: 95vw;
  position: fixed;
`;

export const BackButton = styled(ArrowBackIosIcon)`
  color: black ;
  position: relative;
  right: 48%;
  cursor: pointer;
`;
