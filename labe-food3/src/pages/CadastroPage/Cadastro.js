import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {
  ScreenContainer,
  InputsContainer,
  LogoImage,
  ButtonGo,
  ChevronLeftIconE,
} from "./styled";
import Logo from "../../assents/logo.svg";
import { goEndereco, goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Cadastro() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmitCadastro = () => {
    goEndereco(navigate);
  };

  return (
    <div>
      <Header
        title={
          <ChevronLeftIconE
            onClick={() => goBack(navigate)}
            sx={{ fontSize: 36 }}
          />
        }
      />
      <ScreenContainer>
        <LogoImage src={Logo} alt={"Logo Labe Food"} />
        <p>
          <b>Cadastrar</b>
        </p>

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
              margin={"dense"}
              name={"password"}
              fullWidth
              required
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
              InputProps={{
              endAdornment: <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>}}/>
              <TextField
              label="Confirmar"
              placeholder="Confirmar a senha anterior"
              margin={"dense"}
              name={"password"}
              fullWidth
              required
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
              InputProps={{
                endAdornment: 
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }}
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
    </div>
  );
}
