import { Button, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goCadastro } from '../../routes/coordinator';
import { CadastroContainer, FormContainer, LoginContainer, LogoImage } from './styled';
import Logo from "../../assents/logo.svg"

export default function Login() {
  const navigate = useNavigate()

  const onSubmitLogin = () => {
   goCadastro(navigate)
}

  return (
    <LoginContainer>
      <LogoImage src={Logo} alt={"Logo Labefood"}/>
      <p>Entrar</p>
      <form onSubmit={onSubmitLogin}>
        <FormContainer>
          <TextField
            name={"email"}
            label={"E-mail"}
            fullWidth
            margin="normal"
            color="primary"
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            label={"Senha"}
            fullWidth
            margin="normal"
            color="primary"
            required
            type={"password"}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            margin="normal"
          >
            Entrar
          </Button>
        </FormContainer>
      </form>
      <CadastroContainer>
        <Button
          onClick={() => goCadastro(navigate)}
          type="submit"
          fullWidth
          variant="text"
          color="primary"
          margin="normal"
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </CadastroContainer>
    </LoginContainer>
  )
}
