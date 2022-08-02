<<<<<<< HEAD
import { createTheme } from "@material-ui/core/styles/MuiThemeProvider";
=======
import { createTheme } from "@mui/material/styles";
>>>>>>> 4d2ab623e56461daafc03ca88d97e58679328a6a
import { neutralColor, primaryColor, secundaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    secondary: {
      main: secundaryColor,
    },
    terciary: {
        main: neutralColor,
      },
  },
});

export default theme;