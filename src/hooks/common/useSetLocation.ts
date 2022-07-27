import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userLocationState } from 'stores/User';

const useSetLocation = () => {
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);
  useEffect(() => {
    if (userLocation.latitude == 0 && userLocation.longitude == 0) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        console.log(position.coords.latitude, position.coords.longitude);
      });
    }
  }, []);
  return useRecoilState(userLocationState);
};

export default useSetLocation;
