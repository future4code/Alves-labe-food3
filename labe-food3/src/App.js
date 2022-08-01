import Routes from "./routes/Routes";
import GlobalState from "./Global/GlobalState";
import {GlobalStyle} from './routes/GlobalStyle'
// import { ThemeProvider } from "@emotion/react";
// import theme from "./constants/Theme";


function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalState>
          <GlobalStyle/>
          <Routes />
      </GlobalState>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
