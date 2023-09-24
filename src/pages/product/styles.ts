import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: 1rem;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
`;
