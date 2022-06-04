import styled from '@emotion/styled';
import { SelectModalProps } from './SelectModal';

export const SelectModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${(props) => props.theme.$zindex_Modal};
  background: rgba(0, 0, 0, 0.3);
`;

export const SelectModalStyled = styled.div<SelectModalProps>`
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 100%;
  padding: 0 0 20px;
  background-color: #ffffff;
  border: 1px solid #e4ebf5;
  border-radius: 16px 16px 0px 0px;
  .selectModal_title {
    color: ${(props) => props.theme.$black60};
    padding: 10px;
    text-align: center;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .selectModal_buttons {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    .selectModal_button {
      cursor: pointer;
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
  div:first-of-type {
    border-radius: ${(props) => props.title ?? '16px 16px 0px 0px'};
  }
`;
