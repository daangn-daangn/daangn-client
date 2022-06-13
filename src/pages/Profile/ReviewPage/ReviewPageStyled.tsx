import styled from '@emotion/styled';

export const ReviewPageStyled = styled.div`
  padding: 110px 15px;
  min-height: 100vh;
  .review-count {
    font-weight: 700;
  }
  .review-page-top {
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
  .reviews-wrap {
    margin-top: 20px;
  }
`;
