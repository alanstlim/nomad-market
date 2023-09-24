import styled from "styled-components";

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

export const Input = styled.input`
  height: 35px;
  padding: 0 0.5rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;
