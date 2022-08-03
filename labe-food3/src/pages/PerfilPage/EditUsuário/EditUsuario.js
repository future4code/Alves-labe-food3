import React from 'react'
import { Toolbar, TextField, Button} from '@mui/material';
import { InputsContainer, ScreenContainer } from './styled'
import Stack from "@mui/material/Stack";

function EditUsuario() {


  return (
    <ScreenContainer>
        <p>Editar Perfil</p>
        <hr/>
         <form>
         <InputsContainer>
          <TextField
            label="Nome"
            placeholder="Nome e sobrenome"
            type="text"
            margin={"normal"}
            name={"username"}
            variant='outlined'
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="E-mail"
            placeholder="email@email.com"
            type="email"
            margin={"normal"}
            name={"email"}
            variant='outlined'
            fullWidth
            required
          />
          <TextField
            label="CPF"
            placeholder="000.000.000-00"
            type="number"
            margin={"normal"}
            name={"number"}
            variant='outlined'
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
  )
}

export default EditUsuario