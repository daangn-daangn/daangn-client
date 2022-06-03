import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TopLeftType } from './Top';

export const StyledTop = styled.header<{ left: TopLeftType; mb?: string }>`
  ${(props) => {
    return css`
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: ${props.theme.$zindex_ToolBar};
      padding: 12px 20px;
      margin-bottom: ${props.mb};
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      border-bottom: 1px solid ${props.theme.$black20};
      a {
        cursor: pointer;
        svg {
          width: 24px;
          height: 24px;
        }
      }
      & > h3 {
        flex: 1;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `;
  }}
`;
