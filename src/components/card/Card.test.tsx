import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import THEMES from 'styles/theme';
import Card from '.';
import { ProductType } from 'stores/products';
import { strawberry } from 'assets/strawberry';

const data = {
  name: 'Test',
  description: 'Test description',
  price: 10,
  image: strawberry,
  quantity: 1,
} as ProductType;

describe('Card Component', () => {
  it('should render data informations', () => {
    render(
      <ThemeProvider theme={THEMES}>
        <Card data={data} />
      </ThemeProvider>
    );
    screen.getByText(data.name);
    screen.getByText(data.description);
    screen.getByText(data.quantity);
  });

  it('should render value', () => {
    render(
      <ThemeProvider theme={THEMES}>
        <Card data={data} />
      </ThemeProvider>
    );
    const value = data.price * data.quantity;

    screen.getByText(`$${value}`);
  });

  it('should render render plus button', () => {
    render(
      <ThemeProvider theme={THEMES}>
        <Card data={data} />
      </ThemeProvider>
    );
    screen.getByTestId('plus');
  });

  it('should render minus and plus button', () => {
    render(
      <ThemeProvider theme={THEMES}>
        <Card data={data} variant="negative" />
      </ThemeProvider>
    );

    screen.getByTestId('plus');
    screen.getByTestId('minus');
  });

  it('should call onPlusClick prop', () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={THEMES}>
        <Card data={data} onPlusClickButton={onClick} />
      </ThemeProvider>
    );
    const button = screen.getByTestId('plus');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should call onMinusClick prop', () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={THEMES}>
        <Card data={data} onMinuslickButton={onClick} variant="negative" />
      </ThemeProvider>
    );
    const button = screen.getByTestId('minus');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});

export default {};
