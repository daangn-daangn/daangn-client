import styled from '@emotion/styled';

export const ProfileEditPageStyled = styled.div`
  overflow: hidden;
  form {
    padding: 70px 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    min-height: 100vh;
    position: relative;
    align-items: center;
    width: 100%;
  }
  .profile-url {
    position: relative;
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
  .nickname {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  button {
    border-radius: 0px;
    position: absolute;
    bottom: 0px;
  }
`;
