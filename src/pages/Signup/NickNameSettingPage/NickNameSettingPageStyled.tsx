import styled from '@emotion/styled';

export const NickNameSettingPageStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  .text-input-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  form {
    .profile-url {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .profile-url_image {
        border: 1px solid ${(props) => props.theme.$black30};
        border-radius: 50%;
        position: relative;
      }
      .camera-icon {
        background: white;
        position: absolute;
        top: 75px;
        right: 5px;
        z-index: ${(props) => props.theme.$zindex_Layer};
        border: 1px solid ${(props) => props.theme.$black20};
        border-radius: 50%;
        padding: 3px;
        svg {
          width: 16px;
          fill: ${(props) => props.theme.$black60};
        }
      }
    }
  }
`;
