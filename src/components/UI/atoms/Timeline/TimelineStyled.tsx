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
        background-color: ${props.theme.$black40};
      }
      .timeline_time {
        margin: 0 2px;
        color: ${props.theme.$black50};
      }
    `;
  }}
`;
