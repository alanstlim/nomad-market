import Router from "./routes";
import "./styles/global.css";
import THEMES from "./styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={THEMES}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
