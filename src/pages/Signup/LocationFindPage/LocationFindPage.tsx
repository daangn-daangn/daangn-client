import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import Map from '@molecules/Map/Map';
import { LocationFindPageStyled } from './LocationFindPageStyled';
import { useForm } from 'react-hook-form';
import useCurrentLocation from 'hooks/queries/kakao/useCurrentLocation';
import { useRecoilValue } from 'recoil';
import { userLocationState } from 'stores/User';
import useSetLocation from 'hooks/common/useSetLocation';
import useLogOut from 'hooks/common/useLogOut';

const LocationFindPage = () => {
  const navigae = useNavigate();
  const MapWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { handleSubmit } = useForm();
  const [userLocation, setUserLocation] = useSetLocation();
  const { data: mapLocation } = useCurrentLocation({
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    enabled: !!(userLocation.latitude && userLocation.longitude),
  });
  useLogOut();
  const onSubmit = () => {
    navigae(-1);
  };

  return (
    <>
      <LocationFindPageStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title fontSize="23px" fontWeigt="700">
            현재 위치를 선택해주세요
          </Title>
          <p className="current-location">현재 선택된 주소: {mapLocation ? mapLocation : '로딩중...'}</p>
          <div className="map-wrap" ref={MapWrapRef}>
            <div style={{ height: `${MapWrapRef.current?.offsetHeight - 3}px` }}>
              <Map />
            </div>
          </div>
          <Button width="100%" height="56px" type="submit">
            완료
          </Button>
        </form>
      </LocationFindPageStyled>
    </>
  );
};

export default LocationFindPage;
