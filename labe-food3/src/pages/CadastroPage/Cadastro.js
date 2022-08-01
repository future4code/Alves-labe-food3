import React from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

import { ScreenContainer, InputsContainer, LogoImage } from "./styled";
import Logo from "../../assents/logo.svg"

export default function Cadastro() {
  return (
    <ScreenContainer>
      <LogoImage src={Logo} alt={"Logo Labe Food"}/>
      <p>Cadastrar</p>

      <form onSubmit={""}>
        <InputsContainer>
          <TextField
            label="Nome"
            placeholder="Nome e sobrenome"
            type="text"
            margin={"dense"}
            name={"username"}
            value={""}
            onChange={""}
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
            value={""}
            onChange={""}
            fullWidth
            required
          />
          <TextField
            label="CPF"
            placeholder="000.000.000-00"
            type="number"
            margin={"dense"}
            name={"number"}
            value={""}
            onChange={""}
            fullWidth
            required
          />
          <TextField
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            type="password"
            margin={"dense"}
            name={"password"}
            value={""}
            onChange={""}
            fullWidth
            required
          />
          <TextField
            label="Confirmar"
            placeholder="Confirmar a senha anterior"
            type="password"
            margin={"dense"}
            name={"password"}
            value={""}
            onChange={""}
            fullWidth
            required
          />
        </InputsContainer>

        <Stack direction="column" spacing={2}>
          <Button
            sx={{
              height: 51,
              boxShadow: 0,
              color: "white",
            }}
            fullWidth
            size={"large"}
            variant={"contained"}
            type={"submit"}
            color={"primary"}
          >
            Criar
          </Button>
        </Stack>
      </form>
    </ScreenContainer>
  );
}
