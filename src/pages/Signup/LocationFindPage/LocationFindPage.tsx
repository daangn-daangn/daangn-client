import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import Map from '@molecules/Map/Map';
import { LocationFindPageStyled } from './LocationFindPageStyled';
import { IUserLocation } from 'pages/Signup/LocationCheckPage/LocationCheckPage';
import { getUserLocation } from 'apis/kakao';
import { useForm } from 'react-hook-form';
import { IUser } from 'interfaces/User.interface';

const LocationFindPage = () => {
  const location = useLocation();
  const state = location.state as IUserLocation;

  const MapWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { handleSubmit, setValue, watch } = useForm<Pick<IUser, 'location'>>();

  const [latitude, setLatitude] = useState<number>(state.latitude);
  const [longitude, setLongitude] = useState<number>(state.longitude);

  useEffect(() => {
    const coordToAddress = async () => {
      setValue('location', await getUserLocation(longitude, latitude));
    };
    coordToAddress();
  }, [latitude, longitude]);

  const onSubmit = (data: Pick<IUser, 'location'>) => {
    console.log(data);
  };

  return (
    <>
      <LocationFindPageStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title fontSize="23px" fontWeigt="700">
            현재 위치를 선택해주세요
          </Title>
          <p className="current-location">현재 선택된 주소: {watch('location')}</p>
          <div className="map-wrap" ref={MapWrapRef}>
            <div style={{ height: `${MapWrapRef.current?.offsetHeight - 3}px` }}>
              <Map latitude={latitude} setLatitude={setLatitude} longitude={longitude} setLongitude={setLongitude} />
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
