import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex: 1;
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

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.backgroundLight};
  text-align: left;
`;

export const TH = styled.th`
  padding: 12px 15px;
`;

export const TD = styled.td`
  padding: 12px 15px;
  min-width: 80px;

  * {
    margin-right: 0.25rem;
  }

  svg {
    cursor: pointer;
  }
`;

export const TR = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  tr:last-of-type {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const Image = styled.img`
  height: 30px;
`;
