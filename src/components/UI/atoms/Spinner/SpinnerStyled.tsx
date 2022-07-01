import styled from '@emotion/styled';

export const SpinnerStyled = styled.div`
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 8em;
    height: 8em;
  }
  .loader {
    margin: 40vh auto 0;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(238, 133, 72, 0.2);
    border-right: 1.1em solid rgba(238, 133, 72, 0.2);
    border-bottom: 1.1em solid rgba(238, 133, 72, 0.2);
    border-left: 1.1em solid #ee8548;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
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
