import { TextField, Button, Typography} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goCadastro } from "../../routes/coordinator";
import {
  CadastroContainer,
  FormContainer,
  LoginContainer,
  LogoImage,
} from "./styled";
import Logo from "../../assents/logo.svg";
import { useForm } from "../../hooks/useForm";
import { login } from "./UserLogin";
import { useProtected } from "../../hooks/useProtected";

export default function Login({ setRightButtonText }) {
  const navigate = useNavigate()
  useProtected()
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitLogin = (event) => {
    event.preventDefault()
    login(form, clear, navigate, setRightButtonText, setIsLoading)
  }

  return (
    <LoginContainer>
      <LogoImage src={Logo} alt={"Logo Labefood"} />
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
            pattern={"^.{6,}"}
          />

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
            Entrar
          </Button>
        </FormContainer>
      </form>
      <CadastroContainer>
        <Typography
          onClick={() => goCadastro(navigate)}
          type="submit"
          fullWidth
          variant="text"
          color="secundary"
          margin="normal"
          style={{ cursor: 'pointer' }}
        >
          Não possui cadastro? Clique aqui.
        </Typography>
      </CadastroContainer>
    </LoginContainer>
  )
}
