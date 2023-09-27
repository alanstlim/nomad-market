import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import THEMES from 'styles/theme';
import Container from '.';

describe('Card Component', () => {
  it('should render a children', () => {
    render(
      <ThemeProvider theme={THEMES}>
        <Container>
          <button>Test</button>
        </Container>
      </ThemeProvider>
    );
    screen.getByText('Test');
  });
});

export default {};
