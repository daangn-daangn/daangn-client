import styled from "@emotion/styled";
import { NavBarProps } from "./NavBar";

export const NavBarStyled = styled.nav<NavBarProps>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100%;
  background: white;
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  padding: 15px 20px;
  display: flex;
  .current-tab {
    font-weight: 600;
    font-size: 1.2rem;
  }
  .icons {
    display: flex;
    margin-left: auto;
    align-content: center;
    gap: 15px;
    svg {
      height: 20px;
    }
  }
`;