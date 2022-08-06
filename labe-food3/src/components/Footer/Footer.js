import React from "react";
import {useNavigate} from 'react-router-dom'
import {goHome, goToCarrinho, goPerfil} from '../../routes/coordinator'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { PaperFooter } from "./Styled";


export default function Footer() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 switch (value){
  case "home":
    goHome(navigate)
    break
  case "carrinho":
    goToCarrinho(navigate)
    break
  case "perfil":
    goPerfil(navigate)
    
  

 }

  return (
   
    <PaperFooter variant="dense">
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          color="terciary"
          value="home"
          icon={<HouseOutlinedIcon sx={{ fontSize: 36 }}/>}
        />
        <BottomNavigationAction
          color="terciary"
          value="carrinho"
          icon={<LocalGroceryStoreOutlinedIcon sx={{ fontSize: 36 }} />}
        />
        <BottomNavigationAction
          color="terciary"
          value="perfil"
          icon={<AccountCircleOutlinedIcon sx={{ fontSize: 36 }} />}
        />
       
      </BottomNavigation>
    </PaperFooter>
   
  );
}
