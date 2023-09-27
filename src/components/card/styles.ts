import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  height: 250px;
  width: 195px;
  padding: 8px;
  border-radius: 0.75rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  cursor: pointer;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 125px;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  width: 95%;
  height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.span`
  font-size: 0.75rem;
  height: 35px;
  width: 95%;
  text-align: center;
  font-weight: bold;
  overflow: auto;
  word-wrap: break-word;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 0.3rem;
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  display: flex;
  border-radius: 100%;
  width: 28px;
  height: 28px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  cursor: pointer;
`;

export const QuantityContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 0.2rem;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: bold;
  overflow: auto;
  word-wrap: break-word;
  text-overflow: ellipsis;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;
