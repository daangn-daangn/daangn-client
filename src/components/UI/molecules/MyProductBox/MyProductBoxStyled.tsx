import styled from '@emotion/styled';
import { MyProductBoxProps } from './MyProductBox';

export const StyledMyProductBox = styled.div<MyProductBoxProps>`
  background: white;
  width: 100%;
  padding: 15px ${(props) => (props.type === 'like' ? '0px' : '15px')};
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  display: grid;
  grid-template-columns: 3fr 1fr;
  a {
    display: flex;
  }
  .product_info {
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
  }
  .product_state {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const StyledSelectState = styled.div`
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // border-bottom: 1px solid ${(props) => props.theme.$black20};
  margin-bottom: 10px;
  box-sizing: border-box;
  .product_state_select {
    cursor: pointer;
    padding: 10px 0px;
    text-align: center;
    border-left: 1px solid ${(props) => props.theme.$black20};
    border-bottom: 1px solid ${(props) => props.theme.$black20};
    width: 100%;
    font-size: 0.85rem;
    font-weight: 700;
    box-sizing: border-box;
    &:hover {
      background: ${(props) => props.theme.$black20};
    }
    &:first-of-type {
      border-left: none;
    }
  }
`;
