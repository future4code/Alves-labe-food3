import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ScreenContainer, InputsContainer, LogoImage, ButtonGo } from "./styled";
import Logo from "../../assents/logo.svg";
import { goEndereco } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const onSubmitCadastro = () => {
    goEndereco(navigate);
  };

  return (
    <ScreenContainer>
      <LogoImage src={Logo} alt={"Logo Labe Food"} />
      <p><b>Cadastrar</b></p>

      <form onSubmit={onSubmitCadastro}>
        <InputsContainer>
          <TextField
            label="Nome"
            placeholder="Nome e sobrenome"
            type="text"
            margin={"dense"}
            name={"username"}
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="E-mail"
            placeholder="email@email.com"
            type="email"
            margin={"dense"}
            name={"email"}
            fullWidth
            required
          />
          <TextField
            label="CPF"
            placeholder="000.000.000-00"
            type="number"
            margin={"dense"}
            name={"number"}
            fullWidth
            required
          />
          <TextField
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            type="password"
            margin={"dense"}
            name={"password"}
            fullWidth
            required
          />
          <TextField
            label="Confirmar"
            placeholder="Confirmar a senha anterior"
            type="password"
            margin={"dense"}
            name={"password"}
            fullWidth
            required
          />
        </InputsContainer>

        <Stack direction="column" spacing={2}>
        <ButtonGo
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            margin="normal"
            font-color="secondary"
          >
          <b>Criar</b>  
          </ButtonGo>
        </Stack>
      </form>
    </ScreenContainer>
  );
}
