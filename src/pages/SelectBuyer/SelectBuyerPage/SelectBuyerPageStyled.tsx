import styled from '@emotion/styled';

export const StyledSelectBuyerPage = styled.div`
  padding: 80px 20px 50px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 20px;
  button {
    margin-top: auto;
  }
`;

export const UserList = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  .buyer_list {
    padding: 30px 0 20px;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    row-gap: 25px;
    cursor: pointer;
  }
`;
