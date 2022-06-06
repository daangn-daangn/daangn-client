import styled from '@emotion/styled';

export const NavStateBarStyled = styled.div`
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid white;
  margin-top: -1px;
  .state {
    cursor: pointer;
    padding: 10px 0px;
    text-align: center;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 700;
    box-sizing: border-box;
    &:hover {
      color: black !important;
    }
  }
`;
