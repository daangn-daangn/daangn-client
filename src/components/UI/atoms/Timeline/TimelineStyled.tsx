import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TimelineStyled = styled.div`
  ${(props) => {
    return css`
      width: 100%;
      display: flex;
      align-items: center;
      .timeline_bar {
        flex: 1;
        height: 1px;
        background-color: ${props.theme.$black30};
      }
      .timeline_time {
        margin: 0 5px;
        color: ${props.theme.$black50};
      }
    `;
  }}
`;

export const StickyHeader = styled.header`
  ${(props) => {
    return css`
      /* width: 100%; */
      display: flex;
      align-items: center;
      height: 100%;
      position: sticky;
      top: 10px;
    `;
  }}
`;
