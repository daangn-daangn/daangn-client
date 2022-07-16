import axios from 'axios';

const instance = axios.create();

export const getUserLocation = async (longitude: number, latitude: number) => {
  return await instance
    .get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json', {
      params: { x: longitude, y: latitude },
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_KEY}`,
      },
    })
    .then((res) => {
      return res.data.documents[0].address_name;
    });
};
