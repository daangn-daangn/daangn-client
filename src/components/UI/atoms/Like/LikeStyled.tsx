import styled from '@emotion/styled';
import { LikeProps } from './Like';

export const StyledLike = styled.div<LikeProps>`
  display: flex;
  /* align-items: center; */
  gap: 3px;
  span {
    color: ${(props) => props.theme.$black60};
    font-size: 0.95rem;
  }
  svg {
    width: ${(props) => props.width || '14px'};
    height: ${(props) => props.height || '14px'};
    fill: ${(props) => (props.isLike ? props.theme.mainColor : props.theme.$black50)};
    cursor: pointer;
    &:hover {
      fill: ${(props) => props.theme.hoverColor};
    }
  }
`;
