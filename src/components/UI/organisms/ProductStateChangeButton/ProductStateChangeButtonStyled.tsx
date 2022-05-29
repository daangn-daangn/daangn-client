import styled from '@emotion/styled';

export const ProductStateChangeButtonStyled = styled.button`
  width: 65px;
  padding: 5px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.mainColor};
  font-size: 0.7rem;
  color: ${(props) => props.theme.$black};
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 700;
`;
