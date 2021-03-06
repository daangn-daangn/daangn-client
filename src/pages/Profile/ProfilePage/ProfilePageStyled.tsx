import styled from '@emotion/styled';

export const ProfilePageStyled = styled.div`
  padding: 70px 0px;
  width: 100%;
  .profile-box {
    padding: 0px 15px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .profile-box_image_name {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .profile-box_user_history {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .history-item {
        text-align: center;
        .history-item_icon-wrap {
          background: #ffeae3;
          border-radius: 50%;
          margin-bottom: 8px;
          padding: 13px 0px;
          &:hover {
            svg {
              fill: ${(props) => props.theme.hoverColor};
            }
          }
          svg {
            width: 18px;
            fill: ${(props) => props.theme.mainColor};
          }
        }
        p {
          cursor: pointer;
          font-size: 0.75rem;
        }
      }
    }
    .profile-box_manner {
      position: relative;
      width: 100%;
      p {
        cursor: pointer;
        text-decoration: underline;
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  }
  .user-activity {
    background: ${(props) => props.theme.$black10};
    color: ${(props) => props.theme.$black};
    font-size: 0.75rem;
    padding: 20px;
    line-height: 20px;
  }
  @keyframes loop {
    0% {
      top: 0px;
      left: 0px;
    }
    50% {
      top: 0px;
      left: 3px;
    }
    100% {
      top: 0px;
      left: 0px;
    }
  }
  li {
    .justify-space-between {
      &:hover {
        .next-svg {
          animation: loop 1.1s infinite;
        }
      }
    }
    .next-svg {
      width: 13px;
      height: 13px;
      position: relative;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
`;
