import styled from '@emotion/styled';
import { PostButtonProps } from './PostButton';

export const PostButtonStyled = styled.div<PostButtonProps>`
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 99999;
  text-align: right;
  button {
    background: ${props => (props.toggle ? "white" : props.theme.mainColor)};
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(33, 33, 33, .1);
    color: ${props => (props.toggle ? "black" : "white")};
    font-weight: 500;
    font-size: 2rem;
    width: 50px;
    height: 50px;
    &:hover {
      background: ${props => (props.toggle ? props.theme.$black20: props.theme.hoverColor)};
    }
  }
  .Item {
    height: auto;
    padding: 8px;
    border-radius: 10px;
    font-size: 0.9rem;
    &:hover {
      background: ${props => props.theme.$black20};
    }
  }
  .modal-box {
    background: white;
    box-shadow: 0 0 5px rgba(33, 33, 33, .1);
    border-radius: 10px;
    padding: 5px;
    width: 200px;
    margin-bottom: 10px;
    text-align: left;
  }
`;

export const ModalStyled = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99998;
`;