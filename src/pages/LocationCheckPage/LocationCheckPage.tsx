import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Top from '@molecules/Top/Top';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import Button from '@atoms/Button/Button';
import { LocationCheckPageStyled, FormStyled, BottomButton } from './LocationCheckPageStyled';

export interface IUserLocation {
  latitude: number; //위도
  longitude: number; //경도
}

const LocationCheckPage = () => {
  const navigate = useNavigate();

  const [userLocation, setUserLocation] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      const kakaoGeo = () => {
        return axios.create({
          headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_KEY}` },
          params: { x: position.coords.longitude, y: position.coords.latitude },
        });
      };
      async function getUserLocation() {
        try {
          const res = await kakaoGeo().get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json');
          const address_name = res.data.documents[0].address_name;
          setUserLocation(address_name);
        } catch (error) {
          console.log(error);
        }
      }
      getUserLocation();
    });
  }, []);

  return (
    <>
      <LocationCheckPageStyled>
        <Top isPrevArrow={false} title="프로필 설정" />
        <FormStyled>
          <Title fontSize="23px" fontWeigt="700">
            현재 위치가 맞나요?
          </Title>
          <div className="text-input-wrap">
            <InputText label="현재 위치" placeholder={userLocation} />
            <Button
              width="100%"
              height="37px"
              onClick={() => {
                navigate('/find', { state: { latitude: latitude, longitude: longitude } });
              }}
            >
              위치 찾기
            </Button>
          </div>
        </FormStyled>
        <BottomButton>
          <Button width="100%" height="56px">
            완료
          </Button>
        </BottomButton>
      </LocationCheckPageStyled>
    </>
  );
};

export default LocationCheckPage;
