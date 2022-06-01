import styled from '@emotion/styled';
import { SlideButtonProps } from './SlideButton';

export const SlideButtonStyled = styled.button<SlideButtonProps>`
  color: black;
  border: none;
  border-radius: 50%;
  position: absolute;
  z-index: ${(props) => props.theme.$zindex_Layer};
  top: 48%;
  left: ${(props) => (props.direction === 'previous' ? '2px' : 'none')};
  right: ${(props) => (props.direction === 'next' ? '2px' : 'none')};
  &:hover {
    background: ${(props) => props.theme.$black50};
    color: white;
  }
`;
