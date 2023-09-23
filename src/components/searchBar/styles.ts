import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 85vw;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  align-items: center;
`;
export const Input = styled.input`
  height: 35px;
  width: 25vw;
  padding: 0 0.6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;
