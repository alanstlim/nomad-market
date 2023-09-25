import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  align-items: center;
`;
export const Input = styled.input`
  height: 35px;
  width: 25vw;
  border: none;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;
