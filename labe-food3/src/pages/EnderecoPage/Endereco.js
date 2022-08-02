import React from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

import { ScreenContainer, InputsContainer } from "./styled";

const Endereco = () => {
  return (
    <ScreenContainer>
      <p>Meu endereço</p>

      <form>
        <InputsContainer>
          <TextField
            label="Logradouro"
            placeholder="Rua / Av."
            type="text"
            margin={"dense"}
            name={"username"}
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="Número"
            placeholder="Número"
            type="number"
            margin={"dense"}
            name={"numero"}
            fullWidth
            required
          />
          <TextField
            label="Complemento"
            placeholder="Apto. / Bloco"
            type="text"
            margin={"dense"}
            name={"complemento"}
            fullWidth
          />
          <TextField
            label="Bairro"
            placeholder="Bairro"
            type="text"
            margin={"dense"}
            name={"bairro"}
            fullWidth
            required
          />
          <TextField
            label="Cidade"
            placeholder="Cidade"
            type="text"
            margin={"dense"}
            name={"cidade"}
            fullWidth
            required
          />
          <TextField
            label="Estado"
            placeholder="Estado"
            type="text"
            margin={"dense"}
            name={"estado"}
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
            Salvar
          </Button>
        </Stack>
      </form>
    </ScreenContainer>
  );
};

export default Endereco;
