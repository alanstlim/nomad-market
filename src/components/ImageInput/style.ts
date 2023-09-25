import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  min-height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.backgroundDark};
  border: ${({ theme }) => `1.5px dashed ${theme.colors.secondary}`};
  border-radius: 4px;
  gap: 1rem;

  img {
    object-fit: "contain";
    max-height: 100px;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.1rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Error = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
