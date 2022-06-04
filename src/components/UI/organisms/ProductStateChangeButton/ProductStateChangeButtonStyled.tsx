import styled from '@emotion/styled';

export const ProductStateChangeButtonStyled = styled.button`
  width: 90px;
  padding: 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.$black30};
  font-size: 0.75rem;
  color: ${(props) => props.theme.$black};
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 700;
  svg {
    width: 13px;
    height: 13px;
  }
`;
