import styled from '@emotion/styled';

export const NotificationPageStyled = styled.div``;

export const NotificationCardGroup = styled.div`
  display: flex;
  padding: 52px 0;
  flex-direction: column;
  & > div {
    border-bottom: 1px solid ${(props) => props.theme.$black20};
  }
  & > div:last-child {
    /* border-bottom: none; */
  }
`;
