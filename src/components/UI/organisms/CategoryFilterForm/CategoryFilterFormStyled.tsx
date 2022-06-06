import styled from '@emotion/styled';

export const CategoryFilterFormStyled = styled.form`
  .price_filter {
    padding: 30px 0;
    flex: 1;
    .price_filter-input {
      margin-top: 15px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  .categoryfilter_btns {
    display: flex;
    gap: 10px;
    button {
      flex: 1;
    }
    button:first-of-type {
      background: ${(props) => props.theme.$black50};
    }
  }
`;
