import styled from '@emotion/styled';
import { TabBarProps } from './TabBar';

export const TabBarStyled = styled.nav<TabBarProps>`
  background: white;
  border-top: 1px solid ${(props) => props.theme.$black20};
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: ${(props) => props.theme.$zindex_ToolBar};
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  div {
    font-size: 0.6rem;
    text-align: center;
    svg {
      &:hover {
        fill: ${(props) => props.theme.hoverColor};
      }
    }
    :nth-of-type(1) {
      fill: ${(props) => (props.curTab === 1 ? props.theme.mainColor : props.theme.$black30)};
    }
    :nth-of-type(2) {
      fill: ${(props) => (props.curTab === 2 ? props.theme.mainColor : props.theme.$black30)};
    }
    :nth-of-type(3) {
      fill: ${(props) => (props.curTab === 3 ? props.theme.mainColor : props.theme.$black30)};
    }
  }
`;
