import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import TextField from "@mui/material/TextField";
import { ButtonGo, Title, ChevronLeftIconE } from "./styled";
import Stack from "@mui/material/Stack";
import { goPerfil } from "../../../routes/coordinator";
import { BASE_URL } from "../../../constants/urls";
import axios from "axios";
import { ScreenContainer, InputsContainer } from "./styled";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { goBack } from "../../../routes/coordinator";
import Header from '../../../components/Header/Header'

const Endereco = () => {

  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const navigate = useNavigate();

  const onSubmitAdress = (event) => {
    event.preventDefault();
    UpdateAdress();
    goPerfil(navigate);
  };

  const UpdateAdress = () => {
    axios
      .put(`${BASE_URL}address`, form, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((resp) => {
        localStorage.removeItem("token");
        localStorage.setItem("token", resp.data.token);
        alert("Endereço Atualizado");
        document.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
    <Header title ={<ChevronLeftIconE onClick={()=>goBack(navigate)} sx={{ fontSize: 36 }} />} /> 
   
    <ScreenContainer> 
      <form onSubmit={onSubmitAdress}>
        <InputsContainer>
          <TextField
            label="Logradouro"
            placeholder="Rua / Av."
            type="text"
            margin={"dense"}
            name={"street"}
            value={form.street}

            onChange={onChange}
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="Número"
            placeholder="Número"
            type="number"
            margin={"dense"}
            name={"number"}
            value={form.number}
            onChange ={onChange}

            fullWidth
            required
          />
          <TextField
            label="Complemento"
            placeholder="Apto. / Bloco"
            type="text"
            margin={"dense"}
            name={"complement"}
            value={form.complement}
            onChange ={onChange}

            fullWidth
          />
          <TextField
            label="Bairro"
            placeholder="Bairro"
            type="text"
            margin={"dense"}
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange ={onChange}

            fullWidth
            required
          />
          <TextField
            label="Cidade"
            placeholder="Cidade"
            type="text"
            margin={"dense"}
            name={"city"}
            value={form.city}
            onChange ={onChange}

            fullWidth
            required
          />
          <TextField
            label="Estado"
            placeholder="Estado"
            type="text"
            margin={"dense"}
            name={"state"}
            value={form.state}
          onChange ={onChange}

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
