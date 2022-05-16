import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `KakaoAK ${process.env.REACT_APP_KAKAO_REST_KEY}`;

export const getUserLocation = async (longitude: number, latitude: number) => {
  return await axios
    .get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json', { params: { x: longitude, y: latitude } })
    .then((res) => {
      return res.data.documents[0].address_name;
    });
};
