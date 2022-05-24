import styled from '@emotion/styled';

export const ChatSendBoxStyled = styled.div`
  background: ${(props) => props.theme.$black20};
  width: 100%;
  position: fixed;
  z-index: 99999;
  left: 0;
  bottom: 0;
  padding: 2px 2px 1px;
  height: auto;
  .div-stair {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  svg {
    fill: ${(props) => props.theme.$black60};
    width: 28px;
    margin: 0px 8px;
    &:hover {
      fill: ${(props) => props.theme.$black80};
    }
  }
  .plus-modal {
    padding: 20px;
    //justify-content: space-around;
    gap: 25px;
    .chat-item {
      text-align: center;
      .chat-item_icon-wrap {
        background: ${(props) => props.theme.mainColor};
        padding: 10px 4px;
        border-radius: 50%;
        margin-bottom: 8px;
        svg {
          width: 18px;
          fill: white;
        }
      }
      p {
        font-size: 0.7rem;
        color: ${(props) => props.theme.$black80};
      }
    }
    #hidden-input-file {
      visibility: hidden;
      position: absolute;
    }
  }
`;
