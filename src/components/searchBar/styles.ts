import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  margin-bottom: 2rem;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  width: 100%;

  @media (max-width: 1154px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-left: 1rem;
  align-items: center;
`;
export const Input = styled.input`
  height: 35px;
  flex: 1;
  border: none;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;
