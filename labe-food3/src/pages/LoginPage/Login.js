import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
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
import { useForm } from "../../hooks/useForm";
import { login } from "./UserLogin";
import { useProtected } from "../../hooks/useProtected";

export default function Login({setRightButtonText}) {
  const navigate = useNavigate()
  useProtected()
  const [form,onChange, clear] = useForm({email: "", password: ""})
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitLogin = (event) => {
    event.preventDefault()
    login(form, clear, navigate, setRightButtonText, setIsLoading)
  }

  return (
    <LoginContainer>
      <LogoImage src={Logo} alt={"Logo Labefood"} />
      <SubTitle>Entrar</SubTitle>
      <form onSubmit={onSubmitLogin}>
        <FormContainer>
          <TextField
            name={"email"}
            label={"E-mail"}
            value={form.email}
            onChange={onChange}
            fullWidth
            margin="normal"
            color="terciary"
            required
            type={"email"}
          />
          <TextField
            name={"password"}

            label={"Senha"}

            value={form.password}
            onChange={onChange}

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
  )
}
