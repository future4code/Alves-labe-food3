import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const ScreenContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:5vh;
`;

export const LogoImage = styled.img`
  margin-bottom: 5vh;
`;

export const InputsContainer = styled.div`
  width: 80vw;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 15px 0;
`;

export const ButtonGo = styled.button`
  border: none;
  background-color: #e8222e;
  font-size: 4.5vw;
  padding: 1.5vh 19vh;
  margin-top: 1vh;
`;

export const ChevronLeftIconE = styled(ChevronLeftIcon)`
  display: flex;
  margin-top: 1vh;
  margin-right: 50vh;
`;
