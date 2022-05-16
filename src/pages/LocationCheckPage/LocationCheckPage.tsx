import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLocation } from 'apis/kakao';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import Button from '@atoms/Button/Button';
import { LocationCheckPageStyled } from './LocationCheckPageStyled';

export interface IUserLocation {
  latitude: number; //위도
  longitude: number; //경도
}

const LocationCheckPage = () => {
  const navigate = useNavigate();

  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setCurrentAddress(await getUserLocation(position.coords.longitude, position.coords.latitude));
    });
  }, []);

  return (
    <>
      <LocationCheckPageStyled>
        <form>
          <Title fontSize="23px" fontWeigt="700">
            현재 위치가 맞나요?
          </Title>
          <div className="text-input-wrap">
            <InputText label="현재 위치" placeholder={currentAddress} />
            <Button
              width="100%"
              height="37px"
              onClick={() => {
                navigate('find', { state: { latitude: latitude, longitude: longitude } });
              }}
            >
              위치 찾기
            </Button>
          </div>
        </form>
        <Button width="100%" height="56px">
          완료
        </Button>
      </LocationCheckPageStyled>
    </>
  );
};

export default LocationCheckPage;
