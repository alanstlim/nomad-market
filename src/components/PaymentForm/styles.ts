import styled from 'styled-components';

export const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.5rem;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 0.2rem;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const TotalValue = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 550px) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
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

export const PaymentContainer = styled.div`
  width: 450px;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
