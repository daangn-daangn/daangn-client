import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Top from '@molecules/Top/Top';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import Map from '@molecules/Map/Map';
import { LocationFindPageStyled, FormStyled, BottomButton } from './LocationFindPageStyled';
import { IUserLocation } from 'pages/LocationCheckPage/LocationCheckPage';
import axios from 'axios';

const LocationFindPage = () => {
  const location = useLocation();
  const state = location.state as IUserLocation;

  const MapWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(state.latitude);
  const [longitude, setLongitude] = useState<number>(state.longitude);

  useEffect(() => {
    const kakaoGeo = () => {
      return axios.create({
        headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_KEY}` },
        params: { x: longitude, y: latitude },
      });
    };
    async function getUserLocation() {
      try {
        const res = await kakaoGeo().get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json');
        const address_name = res.data.documents[0].address_name;
        setCurrentAddress(address_name);
      } catch (error) {
        console.log(error);
      }
    }
    getUserLocation();
  }, [latitude, longitude]);

  return (
    <>
      <LocationFindPageStyled>
        <Top isPrevArrow={false} title="프로필 설정" />
        <FormStyled>
          <Title fontSize="23px" fontWeigt="700">
            현재 위치를 선택해주세요
          </Title>
          <Title fontSize="15px" fontWeigt="500">
            현재 선택된 주소: {currentAddress}
          </Title>
          <div className="map-wrap" ref={MapWrapRef}>
            <div style={{ height: `${MapWrapRef.current?.offsetHeight - 3}px` }}>
              <Map latitude={latitude} setLatitude={setLatitude} longitude={longitude} setLongitude={setLongitude} />
            </div>
          </div>
        </FormStyled>
        <BottomButton>
          <Button width="100%" height="56px">
            완료
          </Button>
        </BottomButton>
      </LocationFindPageStyled>
    </>
  );
};

export default LocationFindPage;
