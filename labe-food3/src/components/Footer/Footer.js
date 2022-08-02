import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { PaperFooter } from "./Styled";


export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
    <PaperFooter variant="dense">
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          color="terciary"
          value="recents"
          icon={<HouseOutlinedIcon sx={{ fontSize: 36 }}/>}
        />
        <BottomNavigationAction
          color="terciary"
          value="favorites"
          icon={<LocalGroceryStoreOutlinedIcon sx={{ fontSize: 36 }} />}
        />
        <BottomNavigationAction
          color="terciary"
          value="nearby"
          icon={<AccountCircleOutlinedIcon sx={{ fontSize: 36 }} />}
        />
       
      </BottomNavigation>
    </PaperFooter>
   
  );
}
