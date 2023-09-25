import Contexts from 'context';
import Router from './routes';
import './styles/global.css';
import THEMES from './styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={THEMES}>
        <Contexts>
          <Router />
        </Contexts>
      </ThemeProvider>
    </div>
  );
}

export default App;
