import styled from 'styled-components';

export const Background = styled.div`
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  display: flex;
  min-width: 250px;
  flex-direction: column;
  min-height: 325px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border: 2px outset ${({ theme }) => theme.colors.secondary};
  border-radius: 0.75rem;
  padding: 1rem;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  padding: 1rem;
  width: 350px;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.span`
  font-size: 0.75rem;
  width: 350px;
  font-weight: bold;
  color: gray;
  text-align: center;
`;
