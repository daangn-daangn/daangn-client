import { useNavigate } from 'react-router-dom';
import Title from '@atoms/Title/Title';
import InputText from '@molecules/InputText/InputText';
import Button from '@atoms/Button/Button';
import { LocationCheckPageStyled } from './LocationCheckPageStyled';
import { useForm } from 'react-hook-form';
import { IUser } from 'interfaces/User.interface';
import useCurrentLocation from 'hooks/queries/kakao/useCurrentLocation';
import useSetLocation from 'hooks/common/useSetLocation';
import { useRecoilValue } from 'recoil';
import { nicknameState, profileImageFileState } from 'stores/User';
import useUserInfoEdit from 'hooks/queries/user/useUserInfoEdit';
import { KAKAO_PROFILE_URL } from 'constants/localstoregeKeys';
import { uploadFileToS3 } from 'utils/handleFileToS3';

export interface IUserLocation {
  latitude: number; //위도
  longitude: number; //경도
}

const LocationCheckPage = () => {
  const navigate = useNavigate();

  const nickname = useRecoilValue(nicknameState);
  const profileImageFile = useRecoilValue(profileImageFileState);

  const [userLocation] = useSetLocation();

  const { data } = useCurrentLocation({
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    enabled: !!(userLocation.latitude && userLocation.longitude),
  });
  const { register, handleSubmit, setValue } = useForm<Pick<IUser, 'location'>>();

  const userInfoEditMutation = useUserInfoEdit({
    onSuccess: (data) => {
      console.log(data.response.profile_url);
      uploadFileToS3(data.response.profile_url, profileImageFile);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (!data) setValue('location', '위치 찾는 중...');
  else setValue('location', data);

  const onSubmit = (data: Pick<IUser, 'location'>) => {
    if (!profileImageFile) {
      // 어떻게 처리 할지 생각
      return;
    }
    userInfoEditMutation.mutate({
      nickname,
      location: data.location,
      profile_url: profileImageFile.name,
    });
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
