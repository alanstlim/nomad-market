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

export const Description = styled.span`
  font-size: 1rem;
  width: 95%;
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
  overflow: auto;
  word-wrap: break-word;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.secondary};
`;
