import styled from '@emotion/styled';
import { ListProps } from './List';

export const ListStyled = styled.li<ListProps>`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  list-style-type: none;
  padding: ${(props) => props.padding || '23px 15px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  display: flex;
  flex-direction: column;
  gap: 10px;
  .justify-space-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
