import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ImageProps } from './Image';

export const StyledImage = styled.div<ImageProps>`
  ${(props) => {
    const background = `no-repeat center/100% url("${props.imgUrl}")`;
    return css`
      border-radius: ${props.borderRedius || '7px'};
      background: ${background};
      width: ${props.width || '100px'};
      height: ${props.width || '100px'};
    `;
  }}
`;