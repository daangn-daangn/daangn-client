import styled from '@emotion/styled';

export const StyledNotificationCard = styled.div<{ isRead: boolean }>`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px 10px 20px;
  background-color: ${(props) => (!props.isRead ? props.theme.$black20 : '#fff')};
  cursor: pointer;
  .noti_detail {
    flex: 1;
    & > div {
      color: ${(props) => props.theme.$black80};
      font-size: 0.9rem;
    }
  }
`;
