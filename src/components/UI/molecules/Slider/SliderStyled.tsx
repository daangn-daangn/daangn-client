import styled from "@emotion/styled";
import { SliderProps } from "./Slider";

export const SliderStyled = styled.div<SliderProps>`
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