import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 0.125rem;

  @media (max-width: 1154px) {
    width: 80px;
  }
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

  @media (max-width: 1154px) {
    height: 45px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex: 9;
  width: 100%;
  flex-direction: column;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  @media (max-width: 1154px) {
    width: 80px;
  }

  :first-child {
    margin-top: 0.5rem;
  }
`;

type ButtonProps = {
  active?: boolean;
};

export const ItemButton = styled.button`
  display: flex;
  height: 50px;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  cursor: pointer;

  :first-child {
    margin-left: 0.75rem;

    @media (max-width: 1154px) {
      margin-left: 0;
      justify-content: center;
    }
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.backgroundDark};
  }
`;

export const ItemContainer = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  flex: 1;

  svg {
    margin-bottom: 0.75rem;
  }

  ${({ active, theme }) => css`
    background-color: ${active
      ? theme.colors.primary
      : theme.colors.backgroundLight};
  `}
`;

export const ItemTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
