import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Error = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  margin-right: 0.75rem;
  text-align: end;
  color: ${({ theme }) => theme.colors.error};
`;

type InputProps = {
  error?: boolean;
};

export const Input = styled.input<InputProps>`
  height: 35px;
  padding: 0 0.5rem;
  border-radius: 8px;

  ${({ error, theme }) =>
    css`
      border: solid 1.5px ${error ? theme.colors.error : theme.colors.secondary};
    `}
`;
