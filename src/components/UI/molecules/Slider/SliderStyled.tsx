import styled from "@emotion/styled";

export const SliderStyled = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  .slider-container {
    width: 100%;
    display: flex;
  }
  .slide {
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
  }
`;