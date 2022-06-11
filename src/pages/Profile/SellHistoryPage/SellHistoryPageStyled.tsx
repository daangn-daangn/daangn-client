import styled from '@emotion/styled';

export const SellHistoryPageStyled = styled.div`
  padding: 85px 0px;
  background: ${(props) => props.theme.$black10};
  min-height: 100vh;
  .sell-history-page-top {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: ${(props) => props.theme.$zindex_ToolBar};
    header {
      position: relative;
      z-index: -1;
    }
  }
`;
