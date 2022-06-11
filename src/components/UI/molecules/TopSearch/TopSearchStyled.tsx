import styled from '@emotion/styled';

export const TopSearchStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: ${(props) => props.theme.$zindex_ToolBar};
  padding: 12px 20px;
  display: flex;
  align-items: center;
  background: white;
  gap: 15px;
  a {
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  form {
    gap: 15px;
    flex: 1;
    display: flex;
  }
`;
