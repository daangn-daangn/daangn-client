import styled from '@emotion/styled';

export const CategotyPageStyled = styled.div`
  padding: 50px 20px 0px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.$black20};
    margin: 0px -20px;
    padding: 15px 20px;
    &:hover {
      background: ${(props) => props.theme.$black20};
    }
    svg {
      fill: ${(props) => props.theme.mainColor};
    }
  }
`;
