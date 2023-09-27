import styled from 'styled-components';

export const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.5rem;
`;

export const TotalValue = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  * {
    text-align: center;
  }
`;
