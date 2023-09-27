import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: 1rem;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Catalog = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;
