import styled from '@emotion/styled';

export const StyledNotificationCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 10px 20px;
  cursor: pointer;
  .noti_detail {
    flex: 1;
    & > div {
      color: ${(props) => props.theme.$black80};
      font-size: 0.9rem;
    }
  }
`;
