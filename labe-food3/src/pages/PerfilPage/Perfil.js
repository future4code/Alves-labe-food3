import React, { useEffect, useState } from 'react'
import {
  Container,
  Toolbar,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
} from "@material-ui/core";
import { useNavigate } from 'react-router-dom'
import EditIcon from '../../assets/editIcon.png'
import { goToEditUsuario, goToEditEndereco } from '../../routes/coordinator'
import { useStyles } from "./styled";
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'


function Perfil() {

  const classes = useStyles();
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [orders, setOrders] = useState([])


  useEffect(() => {
    GetProfile()
    GetOrderHistory()
  }, [])


  const GetProfile = () => {
    axios.get(`${BASE_URL}profile`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    }).then((resp) => {
      setUser(resp.data.user)
    }).catch((err) => {
      console.log(err)

    })
  }

  const GetOrderHistory = () => {
    axios.get(`${BASE_URL}orders/history`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    }).then((resp) => {
      setOrders(resp.data.orders)
    }).catch((err) => {
      console.log(err)

    })
  }

  console.log(orders)

  const ListOrders = orders && orders.map((order) => {
    const date = new Date(order.expiresAt).toLocaleDateString(
      "pt-br")
    return (
      <Grid container className={classes.ordersInnerGrid}>
        <Grid

          item
          xs={12}
          className={classes.orderGridItem}
        >
          <Paper className={classes.withPadding}>
            <Typography className={classes.restaurantText}>
              {order.restaurantName}
            </Typography>
            <Typography className={classes.dateText}>
              {date}
            </Typography>
            <Typography className={classes.totalPriceText}>
              SUBTOTAL R${order.totalPrice.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

    )
  })

  return (
    <Container
      maxWidth="md"
      className={classes.container}
      data-testid="container"
    >
      <div
      >

        <Toolbar />
        <Grid container>
          <Grid item xs={12}>
            <List>
              <ListItem className={classes.userListItem}>
                <Box className={classes.listBox}>
                  <ListItemText
                    className={classes.noMargin}
                    primary={user.name}
                  />
                  <ListItemText
                    className={classes.noMargin}
                    primary={user.email}
                  />
                  <ListItemText
                    className={classes.noMargin}
                    primary={user.cpf}
                  />
                </Box>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"

                  >
                    <img
                      src={EditIcon}
                      alt="Edit"
                      className={classes.imgEditIcon}
                      onClick={() => goToEditUsuario(navigate)}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem className={classes.addressListItem}>
                <Box className={classes.listBox}>
                  <ListItemText
                    primary={
                      <Typography className={classes.addressText}>
                        Endereço cadastrado
                        <br />
                        {user.address}
                      </Typography>
                    }
                  />
                  <ListItemText />
                </Box>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                  >
                    <img
                      src={EditIcon}
                      alt="Edit"
                      className={classes.imgEditIcon}
                      onClick={() => goToEditEndereco(navigate)}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} className={classes.ordersOutterGrid}>
            <Box className={classes.withBorderBottom}>
              <Typography className={classes.historyText}>
                Histório de pedidos
              </Typography>
            </Box>
            {ListOrders}
          </Grid>
        </Grid> 
      </div>
    </Container>
  )
}

export default Perfil