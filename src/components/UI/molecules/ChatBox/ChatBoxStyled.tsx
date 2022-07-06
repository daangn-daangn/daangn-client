import styled from '@emotion/styled';

export const StyledChatBox = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  display: flex;
  align-items: center;
  gap: 20px;
  .chatBox_info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 7px;
    & > div:first-of-type {
      display: flex;
      align-items: center;
      gap: 5px;
      .chatBox_info-nickname {
        font-weight: 700;
      }
      .chatBox_info-location,
      .chatBox_info-dot {
        color: ${(props) => props.theme.$black50};
      }
      .chatBox_info-location {
        font-size: 0.8rem;
      }
    }
  }
`;
