import styled from "@emotion/styled";
import { DetailTabBarProps } from "./DetailTabBar";

export const DetailTabBarStyled = styled.nav<DetailTabBarProps>`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  background: ${props => (props.isScroll ? "white" : "rgba( 255, 255, 255, 0 )")};
  border-bottom: ${props => (props.isScroll ? "0.7px solid #BCBCBC" : "none")};
  display: flex;
  gap: 15px;
  padding: 10px 15px;
  svg {
    fill: ${props => (props.isScroll ? "black" : "white")};
    &:hover {
      fill: ${(props) => props.theme.$black30};
    }
  }
`;