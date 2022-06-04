import styled from '@emotion/styled';

export const CategoryFilterStyled = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  .category_list {
    padding: 30px 0 20px;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    row-gap: 25px;
  }
`;
