import styled from '@emotion/styled';

export const ReviewGivePageStyled = styled.div`
  padding: 80px 20px 50px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .review-page-top {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
    .subtitle {
      color: ${(props) => props.theme.$black40};
      font-size: 0.9rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    gap: 10px;
    textarea {
      background-color: #f8995a;
      font-family: inherit;
      height: 200px;
      color: #fff;
    }
    button:last-of-type {
      margin-top: auto;
    }
  }
`;
