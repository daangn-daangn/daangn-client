import styled from '@emotion/styled';

export const MannerPageStyled = styled.div`
  padding: 70px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .sub-title {
    display: flex;
    align-items: center;
    font-weight: 700;
    gap: 10px;
    svg {
      width: 26px;
    }
  }

  li {
    .manner-score__people-count {
      display: flex;
      align-items: center;
      gap: 8px;
      svg {
        width: 20px;
      }
      span {
        font-weight: 700;
      }
    }
  }
`;
