import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  gap: 0.125rem;

  @media (max-width: 1154px) {
    height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.125rem;

  @media (max-width: 1154px) {
    width: 100%;
  }
`;
