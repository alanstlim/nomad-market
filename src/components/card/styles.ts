import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  height: 250px;
  width: 195px;
  padding: 8px;
  border-radius: 0.75rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  width: 100%;
  height: 125px;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Description = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: gray;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Button = styled.button`
  display: flex;
  border-radius: 100%;
  width: 28px;
  height: 28px;
  align-items: center;
  background-color: purple;
  border: none;
  cursor: pointer;
`;
