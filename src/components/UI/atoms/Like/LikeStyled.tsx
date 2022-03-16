import styled from '@emotion/styled';
import { LikeProps } from './Like';

export const StyledLike = styled.svg<LikeProps>`
  width: ${(props) => props.width || '17px'};
  height: ${(props) => props.height || '17px'};
  fill: ${(props) => props.theme.mainColor};
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.hoverColor};
  }
`;
