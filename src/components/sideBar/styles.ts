import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 15rem;
  padding: 0 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Header = styled.div`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 5rem;
  mix-blend-mode: multiply;
`;

export const Menu = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  margin: 0.25rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
`;

export const ItemTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0.5rem;
`;
