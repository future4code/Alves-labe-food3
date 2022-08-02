import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goCadastro } from "../../routes/coordinator";
import {
  ButtonLogin,
  CadastroContainer,
  FormContainer,
  LoginContainer,
  LogoImage,
  SubTitle,
  ButtonGo
} from "./styled";
import Logo from "../../assents/logo.svg";

export default function Login() {
  const navigate = useNavigate();

  const onSubmitLogin = () => {
    goCadastro(navigate);
  };

  return (
    <LoginContainer>
      <LogoImage src={Logo} alt={"Logo Labefood"} />
      <SubTitle>Entrar</SubTitle>
      <form onSubmit={onSubmitLogin}>
        <FormContainer>
          <TextField
            name={"email"}
            label={"email@email.com"}
            fullWidth
            margin="normal"
            color="terciary"
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            label={"Mínimo 6 caracteres"}
            fullWidth
            margin="normal"
            color="terciary"
            required
            type={"password"}
          />

          <ButtonGo
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            margin="normal"
            font-color="secondary"
          >
            Entrar
          </ButtonGo>
        </FormContainer>
      </form>
      <CadastroContainer>
        <ButtonLogin
          onClick={() => goCadastro(navigate)}
          type="submit"
          fullWidth
          variant="text"
          color="primary"
          margin="normal"
        >
          Não possui cadastro? Clique aqui.
        </ButtonLogin>
      </CadastroContainer>
    </LoginContainer>
  );
}
