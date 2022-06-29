import styled from '@emotion/styled';

export const NotificationPageStyled = styled.div``;

export const NotificationCardGroup = styled.div`
  display: flex;
  padding: 70px 0;
  flex-direction: column;
  gap: 20px;
  & > div {
    border-bottom: 1px solid ${(props) => props.theme.$black20};
  }
  & > div:last-child {
    /* border-bottom: none; */
  }
`;
