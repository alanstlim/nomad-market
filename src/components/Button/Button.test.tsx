import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from '.';
import THEMES from 'styles/theme';
describe('Buttom Component', () => {
  it('should render a title', () => {
    const title = 'ButtonTest';
    render(
      <ThemeProvider theme={THEMES}>
        <Button title={title} type="button" />
      </ThemeProvider>
    );
    screen.getByText(title);
  });

  it('should call onClick prop', () => {
    const title = 'ButtonTest';
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={THEMES}>
        <Button title={title} type="button" onClick={onClick} />
      </ThemeProvider>
    );
    const button = screen.getByText('ButtonTest');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});

export default {};
