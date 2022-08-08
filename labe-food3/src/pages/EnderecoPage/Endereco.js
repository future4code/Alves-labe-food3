import React from "react";
import Header from '../../components/Header/Header'
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { ScreenContainer, InputsContainer, ButtonGo } from "./styled";

const Endereco = () => {
  return (
    <div>
      <Header title ='Cadastrar' back ='true'/>
    <ScreenContainer>
      <p><b>Meu endereço</b></p>

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
        <ButtonGo
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            margin="normal"
            font-color="secondary"
          >
          <b>Salvar</b>  
          </ButtonGo>
        </Stack>
      </form>
    </ScreenContainer>
    </div>
  );
};

export default Endereco;
