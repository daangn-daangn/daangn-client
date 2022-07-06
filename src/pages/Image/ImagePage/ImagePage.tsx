import { useNavigate, useLocation } from 'react-router';
import { ImagePageStyled } from './ImagePageStyled';
import Top from '@molecules/Top/Top';
import { ReactComponent as Close } from 'assets/close.svg';
import Slider, { SliderProps } from '@molecules/Slider/Slider';

export type ImagePageState = SliderProps;

const ImagePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ImagePageState;

  const clickClose = () => {
    navigate(-1);
  };

  return (
    <>
      <ImagePageStyled>
        <Top
          background="transparent"
          borderBottom="none"
          title=""
          right={<Close fill="white" onClick={clickClose} />}
        />
        <Slider slides={{ product_images: state.slides.product_images }} currentIdx={state.currentIdx} />
      </ImagePageStyled>
    </>
  );
};

export default ImagePage;
