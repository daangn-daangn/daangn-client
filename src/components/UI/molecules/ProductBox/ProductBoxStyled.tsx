import styled from '@emotion/styled';

export const StyledProductBox = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  .product_info {
    flex: 1;
    margin-left: 10px;
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .product_info__detail {
      display: flex;
      gap: 3px;
      .product_info__detail-location {
        color: ${(props) => props.theme.$black50};
        font-size: 0.7rem;
      }
    }
  }
  .product_state {
    display: flex;
    align-items: flex-end;
  }
`;
