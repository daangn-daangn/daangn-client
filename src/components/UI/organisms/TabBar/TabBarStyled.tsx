import styled from "@emotion/styled";
import { TabBarProps } from "./TabBar";

export const TabBarStyled = styled.nav<TabBarProps>`
  background: white;
  border-top: 0.7px solid #BCBCBC;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99999;
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
      fill: ${props => (props.curTab === 1 ? props.theme.mainColor : "black")};
    }
    :nth-of-type(2) {
      fill: ${props => (props.curTab === 2 ? props.theme.mainColor : "black")};
    }
    :nth-of-type(3) {
      fill: ${props => (props.curTab === 3 ? props.theme.mainColor : "black")};
    }
  }
`;