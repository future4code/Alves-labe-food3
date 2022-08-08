
import React,{ useState, useEffect } from 'react'
import { Typography, ListItem, ListItemSecondaryAction, Box, ListItemText, Grid, IconButton, List, Paper } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { useStyles } from './styled'
import EditIcon from '../../assets/editIcon.png'
import { goToEditUsuario, goToEditEndereco } from '../../routes/coordinator'
import Footer from "../../components/Footer/Footer";
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

export default function Perfil() {

  const [users, setUsers] = useState({})
  const [history, setHistory] = useState([])

  const classes = useStyles();
  const navigate = useNavigate()


useEffect(() => {
  getProfile()
  OrdersHistory()
},[])

const getProfile = () =>{
  axios.get(`${BASE_URL}profile`,{
    headers:{
      auth:localStorage.getItem('token')
    }
  }).then((resp) =>{
      setUsers(resp.data.user)
  }).catch((err)=>{
      alert('Erro na requisição, tente novamente')
  })

}

const OrdersHistory = () =>{
  axios.get(`${BASE_URL}orders/history`,{
    headers:{
      auth:localStorage.getItem('token')
    }
  }).then((resp) =>{
    setHistory(resp.data.orders)
  }).catch((err) =>{
    console.log(err)
  })

}

console.log(history)

const ListHistory = history && history.map((OrderHistory) =>{
  const date = new Date(OrderHistory.expiresAt).toLocaleDateString(
    "pt-br"
  );

    return (
      <Grid container className={classes.ordersInnerGrid}>
      <Grid
        item
        xs={12}
        className={classes.orderGridItem}
      >
        <Paper className={classes.withPadding}>
          <Typography className={classes.restaurantText}>
            {OrderHistory.restaurantName}
          </Typography>
          <Typography className={classes.dateText}>
            {date}
          </Typography>
          <Typography className={classes.totalPriceText}>
            SUBTOTAL: {OrderHistory.totalPrice.toFixed(2)}R$
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    )
})

  return (
    <div>
      <List>
        <ListItem className={classes.userListItem}>
          <Box className={classes.listBox}>
            <ListItemText
              primary={users.name}
            />
            <ListItemText
              primary={users.email}
            />
            <ListItemText
              primary={users.cpf}
            />
          </Box>
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick = {() => goToEditUsuario(navigate)}
            >
              <img
                className={classes.imgEditIcon}
                src={EditIcon}
                alt="Edit" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <Box>
            <Typography >
              Endereço cadastrado
            </Typography>

            <ListItemText
              primary={users.address}
            />
          </Box>
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick = {() => goToEditEndereco(navigate)}
            >
              <img
                className={classes.imgEditIcon}
                src={EditIcon}
                alt="Edit" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Grid item xs={12} className={classes.ordersOutterGrid}>
          <Box className={classes.withBorderBottom}>
            <Typography className={classes.historyText}>
              Histório de pedidos
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.orderGridItem}>
          <Typography inline="true" align="center">
            {history.length === 0? 'Você não realizou nenhum pedido' : ListHistory}
          </Typography>
        </Grid>
      </List>
      <Footer/>
    </div>
  )
}