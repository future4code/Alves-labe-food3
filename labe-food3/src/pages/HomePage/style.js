import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  position: center;
  max-width: 55vh;
  margin: 5vw 2vw;
`;
export const ImputSearch = styled(TextField)`
  width: 70vh;
  
`;
export const SearchIcon = styled(SearchOutlined)`
  width: 4vw;
  color: #b8b8b8;
`;

export const TypesStyled = styled.div`
  display: flex;
  margin-top: 2vw;
  width: 70vw;
  max-width: 328px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 2px;
  }
  p {
    margin: 2vw;
    cursor: pointer;
  }
`;
