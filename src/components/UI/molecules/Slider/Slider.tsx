import { useState, useEffect, useRef } from "react"; 
import SlideButton from "../../atoms/SlideButton/SlideButton";
import Image from "../../atoms/Image/Image";
import { SliderStyled } from './SliderStyled';

export interface SliderProps {
}

const Slider = (props: SliderProps) => {
  const dummySlideImages = ["https://play-lh.googleusercontent.com/6Adeoocj4FktXRmkcFY8j6sknDBK_eoCjsMv6EPJI_ZLhLUeAmZH_r5QxKBBa8xoxgni", "https://img.pixers.pics/pho(s3:700/PI/23/28/700_PI2328_929d479296b1a4e351ad083979e06dca_5b7aba17b76ce_.,700,700,jpg)/shower-curtains-hello-kitty.jpg.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3he9XCrjKds0D-MuWkEmH9NEk3NjxMBqZTOgXwSBT4DZu2RX6-T-ZNFfEXtnIHnMuuCQ&usqp=CAU"];
  const TOTAL_SLIDES = dummySlideImages.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const prevSlide = () => {
    currentSlide <= 0 ?
      setCurrentSlide(TOTAL_SLIDES) : setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES ? 
      setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <>
      <SliderStyled>
        <SlideButton direction="previous" onClick={prevSlide} />
        <SlideButton direction="next" onClick={nextSlide} />
        <div className="slider-container" ref={slideRef}>
        {dummySlideImages.map((slide, idx) =>
          <div className="slide" key={idx} >
            <Image
              imgUrl={slide}
              width="100%"
              height="300px"
              borderRedius="0px"
            />
          </div>
        )}
        </div>
      </SliderStyled>
    </>
  );
};

export default Slider;