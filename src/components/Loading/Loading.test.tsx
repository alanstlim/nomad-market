import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Loading from '.';
import THEMES from 'styles/theme';
describe('Loading Component', () => {
  it('should render the spinner', () => {
    render(
      <ThemeProvider theme={THEMES}>
        <Loading />
      </ThemeProvider>
    );
    screen.getByTestId('loading');
  });

  it('should not render the spinner', () => {
    render(
      <ThemeProvider theme={THEMES}>
        <Loading />
      </ThemeProvider>
    );
    const loading = screen.queryByTestId('loading');
    expect(loading).toBeNull();
  });
});

export default {};
