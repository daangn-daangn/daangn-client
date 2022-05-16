import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import Map from '@molecules/Map/Map';
import { LocationFindPageStyled } from './LocationFindPageStyled';
import { IUserLocation } from 'pages/LocationCheckPage/LocationCheckPage';
import { getUserLocation } from 'apis/kakao';

const LocationFindPage = () => {
  const location = useLocation();
  const state = location.state as IUserLocation;

  const MapWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(state.latitude);
  const [longitude, setLongitude] = useState<number>(state.longitude);

  useEffect(() => {
    const coordToAddress = async () => {
      setCurrentAddress(await getUserLocation(longitude, latitude));
    };
    coordToAddress();
  }, [latitude, longitude]);

  return (
    <>
      <LocationFindPageStyled>
        <form>
          <Title fontSize="23px" fontWeigt="700">
            현재 위치를 선택해주세요
          </Title>
          <p className="current-location">현재 선택된 주소: {currentAddress}</p>
          <div className="map-wrap" ref={MapWrapRef}>
            <div style={{ height: `${MapWrapRef.current?.offsetHeight - 3}px` }}>
              <Map latitude={latitude} setLatitude={setLatitude} longitude={longitude} setLongitude={setLongitude} />
            </div>
          </div>
        </form>
      </LocationFindPageStyled>
      <Button width="100%" height="56px">
        완료
      </Button>
    </>
  );
};

export default LocationFindPage;
