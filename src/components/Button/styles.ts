import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type ButtonProps = {
  outline?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  width: 225px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  ${({ outline }) =>
    outline &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundDark};
      border: solid 1px ${({ theme }) => theme.colors.secondary};

      span {
        color: ${({ theme }) => theme.colors.secondary};
      }
    `}
`;

export const Tittle = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;
