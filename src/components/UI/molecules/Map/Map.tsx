import { MapStyled } from './MapStyled';

export interface MapProps {
  latitude: number; //위도
  longitude: number; //경도
  setLatitude?: (value: number) => void;
  setLongitude?: (value: number) => void;
}

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map(props: MapProps) {
  const mapScript = document.createElement('script');

  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;

  document.head.appendChild(mapScript);

  const onLoadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(props.latitude, props.longitude), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const imageSrc = 'https://www.daangn.com/logo.png';
      const imageSize = new window.kakao.maps.Size(60, 60);
      const imageOption = { offset: new window.kakao.maps.Point(27, 69) };

      const marker = new window.kakao.maps.Marker({
        position: map.getCenter(),
        image: new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      });
      marker.setMap(map);

      window.kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
        const latlng = mouseEvent.latLng;
        marker.setPosition(latlng);

        props.setLatitude ? props.setLatitude(latlng.getLat()) : null;
        props.setLongitude ? props.setLongitude(latlng.getLng()) : null;
      });
    });
  };
  mapScript.addEventListener('load', onLoadKakaoMap);

  return (
    <>
      <MapStyled id="map" />
    </>
  );
}
