import styled from 'styled-components';

export interface Props {
  show?: 'false' | 'true';
}

export const Container = styled.div<Props>`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99999;
  display: ${({ show }) => (show === 'true' ? 'flex' : 'none')};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Spinner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  background: -moz-linear-gradient(
    left,
    ${({ theme }) => theme.colors.secondary} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.colors.secondary} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    ${({ theme }) => theme.colors.secondary} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    ${({ theme }) => theme.colors.secondary} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.secondary} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: ${({ theme }) => theme.colors.backgroundLight};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
