import styled from '@emotion/styled';

export const ProductStateChangeModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: rgba(32, 34, 36, 0.75);
`;

export const ProductStateChangeModalStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 100%;
  padding: 0 0 20px;
  background-color: #ffffff;
  border: 1px solid #e4ebf5;
  border-radius: 16px 16px 0px 0px;
  .productStateModal_title {
    color: ${(props) => props.theme.$black60};
    padding: 10px;
    text-align: center;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .productStateModal_buttons {
    display: flex;
    flex-direction: column;
    .productStateModal_button {
      width: 100%;
      padding: 15px;
      text-align: center;
      border-top: 1px solid #eceef4;
      color: ${(props) => props.theme.mainColor};
      &:hover {
        background: ${(props) => props.theme.$black10};
      }
    }
  }
`;
