import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import { TextField, Button} from '@mui/material';
import { InputsContainer, ScreenContainer } from './styled'
import Stack from "@mui/material/Stack";
import {goPerfil} from '../../../routes/coordinator'
import { BASE_URL } from '../../../constants/urls';
import axios from 'axios'

function EditUsuario() {

  const [form, onChange] = useForm({name:'', email:'', cpf:''})
  const navigate = useNavigate()


  const onSubmitUser =(event) =>{
    event.preventDefault()
    UpdateProfile()
    goPerfil(navigate)

  }

  const UpdateProfile = () =>{
    axios.put(`${BASE_URL}profile`,form,{
      headers:{
        auth:localStorage.getItem('token')
      }
     }).then((resp) =>{
      alert('Cadastro Atualizado')
      document.location.reload(true)
     }).catch((err) =>{
      console.log(err)
     })
  }



  return (
    <ScreenContainer>
        <p>Editar Perfil</p>
        <hr/>
         <form onSubmit={onSubmitUser}>
         <InputsContainer>
          <TextField
            label="Nome"
            value ={form.name}
            onChange={onChange}
            placeholder="Nome e sobrenome"
            type="text"
            margin={"normal"}
            name={"name"}
            variant='outlined'
            fullWidth
            required
            autoFocus
          />
          <TextField
            label="E-mail"
            value={form.email}
            onChange={onChange}
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
            value={form.cpf}
            onChange={onChange}
            placeholder="000.000.000-00"
            margin={"normal"}
            name={"cpf"}
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