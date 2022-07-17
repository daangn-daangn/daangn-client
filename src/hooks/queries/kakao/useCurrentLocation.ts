import { getUserLocation } from 'apis/kakao';
import QUERY_KEYS from 'constants/queryKeys';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';

interface CustomQueryOption extends UseQueryOptions<string, unknown> {
  latitude: number;
  longitude: number;
}

const useCurrentLocation = ({ latitude, longitude, ...option }: CustomQueryOption) => {
  return useQuery<string>([QUERY_KEYS.USER, latitude, longitude], () => getUserLocation(longitude, latitude), option);
};

export default useCurrentLocation;
