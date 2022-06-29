import styled from '@emotion/styled';

export const SlideIndexStyled = styled.div`
  position: absolute;
  z-index: ${(props) => props.theme.$zindex_Layer};
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  .mark {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
  .normal {
    opacity: 0.6;
  }
  .current {
    opacity: 1;
  }
`;
