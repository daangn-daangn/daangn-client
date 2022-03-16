import styled from '@emotion/styled';
import { ProductBoxProps } from './ProductBox';

export const StyledProductBox = styled.div<ProductBoxProps>`
  width: 100%;
  display: flex;
  .product_info {
    flex: 1;
    margin-left: 10px;
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
    .product_info__price {
      color: ${(props) => props.theme.$black};
      font-weight: 700;
    }
  }
  .product_state {
    display: flex;
    align-items: flex-end;
  }
`;
