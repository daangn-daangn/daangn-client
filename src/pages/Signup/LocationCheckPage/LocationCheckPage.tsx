import { useNavigate } from 'react-router-dom';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import Button from '@atoms/Button/Button';
import { LocationCheckPageStyled } from './LocationCheckPageStyled';
import { useForm } from 'react-hook-form';
import { IUser } from 'interfaces/User.interface';
import useCurrentLocation from 'hooks/queries/kakao/useCurrentLocation';
import useSetLocation from 'hooks/common/useSetLocation';

export interface IUserLocation {
  latitude: number; //위도
  longitude: number; //경도
}

const LocationCheckPage = () => {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useSetLocation();
  const { data } = useCurrentLocation({
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    enabled: !!(userLocation.latitude && userLocation.longitude),
  });
  const { register, handleSubmit, setValue } = useForm<Pick<IUser, 'location'>>();

  const onSubmit = (data: Pick<IUser, 'location'>) => {
    console.log(data);
  };

  if (!data) setValue('location', '위치 찾는 중...');
  else setValue('location', data);

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
                navigate('find', { state: { latitude: userLocation.latitude, longitude: userLocation.longitude } });
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
