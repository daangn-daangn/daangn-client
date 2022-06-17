import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ImageProps } from './Image';

export const StyledImage = styled.div<ImageProps>`
  ${(props) => {
    const background = `no-repeat center/100% url("${props.imgUrl}")`;
    return css`
      border-radius: ${props.borderRedius || '7px'};
      background: ${background};
      background-image: ${props.innerContent &&
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imgUrl})`};
      background-size: cover;
      width: ${props.width || '100px'};
      height: ${props.height || '100px'};
      color: white;
      font-weight: 700;
      font-size: 1.15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `;
  }}
`;
