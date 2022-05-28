import styled from '@emotion/styled';

export const NewProductPageStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    textarea {
      line-height: 20px;
      font-family: 'inherit';
      font-size: 0.9rem;
    }
    input {
      font-family: 'inherit';
      font-size: 0.9rem;
    }
    input::placeholder {
      color: ${(props) => props.theme.$black40};
      font-size: 0.9rem;
    }
    textarea::placeholder {
      color: ${(props) => props.theme.$black40};
      font-size: 0.9rem;
    }
  }
  .borer-bottom-gray {
    border-bottom: 1px solid ${(props) => props.theme.$black20};
    padding: 15px 0px;
  }
  .input-photo-div {
    display: flex;
    gap: 20px;
    flex-direction: row;
    overflow-x: auto;
    ::-webkit-scrollbar {
      height: 0px;
    }
    .input-photo-div_button {
      cursor: pointer;
      background: white;
      border-radius: 7px;
      border: 1px solid ${(props) => props.theme.$black40};
      height: 70px;
      width: 70px;
      display: flex;
      gap: 5px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      color: ${(props) => props.theme.$black40};
      &:hover {
        border: 1px solid ${(props) => props.theme.$black50};
      }
      svg {
        width: 20px;
      }
    }
    .input-photo-div_image {
      position: relative;
      .input-photo-div_image_close {
        position: absolute;
        top: -5px;
        right: -5px;
        background: black;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        &:hover {
          svg {
            fill: ${(props) => props.theme.$black40};
          }
        }
        svg {
          fill: white;
          width: 15px;
          height: 15px;
        }
      }
      .input-photo-div_image_thumbnail {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
        font-size: 0.65rem;
        background: black;
        text-align: center;
        padding: 5px;
        border-radius: 0px 0px 7px 7px;
      }
    }
  }
  .input-categoty-div {
    display: flex;
    justify-content: space-between;
    padding: 15px 13px;
    font-family: 'inherit';
    font-size: 0.9rem;
  }
  .input-description-div {
    flex: 1;
  }
`;
