import React from 'react'
import { Typography, ListItem, ListItemSecondaryAction, Box, ListItemText, Grid, IconButton, List, Paper } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { useStyles } from './styled'
import EditIcon from '../../assets/editIcon.png'
import { goToEditUsuario, goToEditEndereco } from '../../routes/coordinator'

export default function Perfil() {

  const classes = useStyles();
  const navigate = useNavigate()



  return (
    <div>
      <List>
        <ListItem className={classes.userListItem}>
          <Box className={classes.listBox}>
            <ListItemText
              primary={'Joao Ferreira'}
            />
            <ListItemText
              primary={'Joao.f@gmail.com'}
            />
            <ListItemText
              primary={'111-555-448-78'}
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
              primary={'Rua Nossa Sra do Desterro , 85 - Ipatinga'}
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
            Você não realizou nenhum pedido
          </Typography>
        </Grid>
      </List>

      <Grid container className={classes.ordersInnerGrid}>
        <Grid
          item
          xs={12}
          className={classes.orderGridItem}
        >
          <Paper className={classes.withPadding}>
            <Typography className={classes.restaurantText}>
              Bullguer Vila Madalena
            </Typography>
            <Typography className={classes.dateText}>
              23 outubro 2019
            </Typography>
            <Typography className={classes.totalPriceText}>
              SUBTOTAL R$67,00
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
