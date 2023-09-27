import './matchMedia.mock'; // Must be imported before the tested file
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import THEMES from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '.';

describe('Sidebar Component', () => {
  it('should render sidebar', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={THEMES}>
          <Sidebar />
        </ThemeProvider>
      </BrowserRouter>
    );
    screen.getByTestId('sidebar');
  });
});

export default {};
