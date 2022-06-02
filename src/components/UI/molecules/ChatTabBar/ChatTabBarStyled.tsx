import styled from '@emotion/styled';

export const ChatTabBarStyled = styled.nav`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  padding: 10px 15px;
  background-color: #fff;
  svg {
    fill: black;
    stroke: black;
    &:hover {
      fill: ${(props) => props.theme.$black60};
      stroke: ${(props) => props.theme.$black60};
    }
  }
  .user-detail {
    display: flex;
    margin: 0 auto;
    span {
      font-weight: 600;
      white-space: nowrap;
      margin-right: 4px;
      height: 20px;
      line-height: 20px;
    }
  }
`;
