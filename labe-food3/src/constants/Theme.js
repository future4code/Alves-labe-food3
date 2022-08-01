import { createTheme } from "@mui/material/styles";
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