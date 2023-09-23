import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Logo = styled.img`
  height: 75px;
  mix-blend-mode: multiply;
`;

export const Menu = styled.div`
  display: flex;
  flex: 9;
  width: 15vw;
  flex-direction: column;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  :first-child {
    margin-top: 0.5rem;
  }
`;

export const ItemButton = styled.button`
  display: flex;
  height: 50px;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  cursor: pointer;

  :first-child {
    margin-left: 0.75rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  flex: 1;

  svg {
    margin-bottom: 0.75rem;
  }
`;

export const ItemTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.5rem;
`;
