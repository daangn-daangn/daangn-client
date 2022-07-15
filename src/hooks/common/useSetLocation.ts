import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userLocationState } from 'stores/User';

const useSetLocation = () => {
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setUserLocation({
        latitude: userLocation.latitude || position.coords.latitude,
        longitude: userLocation.longitude || position.coords.longitude,
      });
    });
  }, []);
  return useRecoilState(userLocationState);
};

export default useSetLocation;
