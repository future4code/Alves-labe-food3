import React from 'react'
import { Typography, ListItem, Box, ListItemText, Grid, IconButton, List } from "@mui/material";
import { useStyles } from './styled'
import EditIcon from '../../assets/editIcon.png'

export default function Perfil() {

  const classes = useStyles();

  return (
    <div>
      <List>
      <Box className={classes.listBox}>
      <ListItem>
          <Box>
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
        <IconButton
          edge="end"
          aria-label="edit"
          className={classes.imgEditIcon}
          >
          <img 
          src={EditIcon}
          alt="Edit"/>
          </IconButton>
          
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
        <IconButton
          edge="end"
          aria-label="edit"
          className={classes.imgEditIcon}
          >
          <img 
          className={classes.imgEditIcon}
          src={EditIcon}
          alt="Edit"/>
          </IconButton>
          </ListItem>
        </Box>
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
    </div>
  )
}
