import styled from '@emotion/styled';

export const ProductInfoBoxStyled = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  padding: 10px 20px;
  width: 100%;
  .messageProduct_info {
    display: flex;
    .messageProduct_info-detail {
      margin-left: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      & > div {
        display: flex;
        text-overflow: ellipsis;
        white-space: nowrap;
        .messageProduct_info-state {
          font-size: 0.9rem;
          font-weight: 600;
        }
        h3 {
          display: block;
          flex: 1;
        }
        gap: 6px;
      }
    }
  }
`;
