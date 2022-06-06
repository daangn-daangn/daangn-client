import styled from '@emotion/styled';

export const ReviewBoxStyled = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  padding: 20px 0px 25px;
  background-color: #fff;
  width: 100%;
  display: flex;
  .review_info {
    flex: 1;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      font-size: 0.85rem;
      font-weight: 500;
    }
    .review_info__writer {
      font-weight: 700;
    }
    .review_info__detail {
      display: flex;
      gap: 3px;
      .review_info__detail-location {
        color: ${(props) => props.theme.$black50};
        font-size: 0.7rem;
      }
    }
  }
  .review_state {
    display: flex;
    svg {
      width: 18px;
      fill: ${(props) => props.theme.$black60};
    }
  }
`;
