import styled from '@emotion/styled';

export const StyledDescriptionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  .DescriptionBox_categoryAndTime {
    display: flex;
    gap: 3px;
    color: ${(props) => props.theme.$black50};
    font-size: 0.7rem;
    span:first-child {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  p {
    line-height: 1.2;
    font-size: 0.9rem;
  }
  .DescriptionBox_status {
    display: flex;
    gap: 3px;
    color: ${(props) => props.theme.$black50};
    font-size: 0.7rem;
  }
`;
