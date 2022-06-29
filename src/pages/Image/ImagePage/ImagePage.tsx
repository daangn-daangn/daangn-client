import { useNavigate } from 'react-router';
import { ImagePageStyled } from './ImagePageStyled';
import Top from '@molecules/Top/Top';
import { ReactComponent as Close } from 'assets/close.svg';
import Slider from '@molecules/Slider/Slider';

const ImagePage = () => {
  const navigate = useNavigate();
  const Images = [
    'https://play-lh.googleusercontent.com/6Adeoocj4FktXRmkcFY8j6sknDBK_eoCjsMv6EPJI_ZLhLUeAmZH_r5QxKBBa8xoxgni',
    'https://img.pixers.pics/pho(s3:700/PI/23/28/700_PI2328_929d479296b1a4e351ad083979e06dca_5b7aba17b76ce_.,700,700,jpg)/shower-curtains-hello-kitty.jpg.jpg',
    'https://img.insight.co.kr/static/2016/02/15/700/yy1275us791rlld79jxb.jpg',
  ];

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
        <Slider slides={{ images: Images }} />
      </ImagePageStyled>
    </>
  );
};

export default ImagePage;
