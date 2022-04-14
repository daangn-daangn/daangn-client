import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTop = styled.header<{ isPrevArrow: boolean; mb?: string }>`
  ${(props) => {
    if (props.isPrevArrow) {
      return css`
        width: 100%;
        padding: 12px 0;
        margin-bottom: ${props.mb};
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          cursor: pointer;
        }
        & > h3 {
          flex: 1;
          margin-right: 24px;
          display: flex;
          justify-content: center;
        }
      `;
    }
    return css`
      width: 100%;
      padding: 12px 0;
      margin-bottom: ${props.mb};
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;
