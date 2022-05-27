import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLocation } from 'apis/kakao';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import Button from '@atoms/Button/Button';
import { LocationCheckPageStyled } from './LocationCheckPageStyled';
import { useForm } from 'react-hook-form';
import { IUser } from 'interfaces/User.interface';

export interface IUserLocation {
  latitude: number; //위도
  longitude: number; //경도
}

const LocationCheckPage = () => {
  const navigate = useNavigate();

  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  const { register, handleSubmit, setValue } = useForm<Pick<IUser, 'location'>>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setValue('location', await getUserLocation(position.coords.longitude, position.coords.latitude));
    });
  }, []);

  const onSubmit = (data: Pick<IUser, 'location'>) => {
    console.log(data);
  };

  return (
    <>
      <LocationCheckPageStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title fontSize="23px" fontWeigt="700">
            현재 위치가 맞나요?
          </Title>
          <div className="text-input-wrap">
            <InputText label="현재 위치" register={{ ...register('location') }} readOnly={true} />
            <Button
              width="100%"
              height="37px"
              type="button"
              onClick={() => {
                navigate('find', { state: { latitude: latitude, longitude: longitude } });
              }}
            >
              위치 찾기
            </Button>
          </div>
          <Button width="100%" height="56px" type="submit">
            완료
          </Button>
        </form>
      </LocationCheckPageStyled>
    </>
  );
};

export default LocationCheckPage;
