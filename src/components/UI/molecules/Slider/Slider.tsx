import { useState, useEffect, useRef } from 'react';
import SlideButton from '../../atoms/SlideButton/SlideButton';
import Image from '../../atoms/Image/Image';
import { SliderStyled } from './SliderStyled';
import { IProduct } from '../../../../interfaces/Product.interface';

export interface SliderProps {
  slides: Pick<IProduct, 'images'>;
}

const Slider = ({ slides }: SliderProps) => {
  const TOTAL_SLIDES = slides.images.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const prevSlide = () => {
    currentSlide <= 0 ? setCurrentSlide(TOTAL_SLIDES) : setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <>
      <SliderStyled {...slides}>
        <SlideButton direction='previous' onClick={prevSlide} />
        <SlideButton direction='next' onClick={nextSlide} />
        <div className='slider-container' ref={slideRef}>
          {slides.images.map((slide, idx) => (
            <div className='slide' key={idx}>
              <Image imgUrl={slide} width='100%' height='400px' borderRedius='0px' />
            </div>
          ))}
        </div>
        <div className='slide-index'>
          {Array(TOTAL_SLIDES + 1).fill(0).map((slide, idx) => (
            idx === currentSlide ? <div className='current mark' key={idx} /> : <div className='normal mark' key={idx} />
          ))}
        </div>
      </SliderStyled>
    </>
  );
};

export default Slider;
