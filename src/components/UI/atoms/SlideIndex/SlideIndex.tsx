import { SlideIndexStyled } from './SlideIndexStyled';

export interface SlideIndexProps {
  totalSlides: number;
  currentSlide: number;
}

const SlideIndex = (props: SlideIndexProps) => {
  return (
    <>
      <SlideIndexStyled>
        {Array(props.totalSlides + 1)
          .fill(0)
          .map((slide, idx) =>
            idx === props.currentSlide ? (
              <div className="current mark" key={idx} />
            ) : (
              <div className="normal mark" key={idx} />
            ),
          )}
      </SlideIndexStyled>
    </>
  );
};

export default SlideIndex;
