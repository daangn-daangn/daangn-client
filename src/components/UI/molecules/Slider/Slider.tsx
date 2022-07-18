import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SlideButton from '../../atoms/SlideButton/SlideButton';
import Image from '../../atoms/Image/Image';
import { SliderStyled } from './SliderStyled';
import { IProduct } from '../../../../interfaces/Product.interface';
import SlideIndex from '@atoms/SlideIndex/SlideIndex';
import { PRODUCT_DEFAULT_IMAGE } from 'constants/defaultImages';

export interface SliderProps {
  slides: Pick<IProduct, 'product_images'>;
  height?: string;
  currentIdx?: number;
}

const Slider = ({ slides, height, currentIdx }: SliderProps) => {
  const navigate = useNavigate();
  const TOTAL_SLIDES = slides.product_images.length - 1;
  const [currentSlide, setCurrentSlide] = useState(currentIdx || 0);

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

  const clickImage = (idx: number) => {
    navigate('/image', {
      state: {
        currentIdx: idx,
        slides: {
          product_images: slides.product_images,
        },
      },
    });
  };

  return (
    <>
      <SliderStyled {...slides}>
        <SlideButton direction="previous" onClick={prevSlide} />
        <SlideButton direction="next" onClick={nextSlide} />
        <div className="slider-container" ref={slideRef}>
          {slides.product_images.map((slide, idx) => (
            <div className="slide" key={idx}>
              {height ? (
                <Image onClick={() => clickImage(idx)} imgUrl={slide} width="100%" height="400px" borderRedius="0px" />
              ) : (
                <img src={slide} width="100%" />
              )}
            </div>
          ))}
        </div>
        <SlideIndex totalSlides={TOTAL_SLIDES} currentSlide={currentSlide} />
      </SliderStyled>
    </>
  );
};

export default Slider;
