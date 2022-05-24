import { MapStyled } from './MapStyled';

export interface MapProps {
  latitude: number; //위도
  longitude: number; //경도
  setLatitude?: (value: number) => void;
  setLongitude?: (value: number) => void;
  share?: boolean;
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
      const imageSize = new window.kakao.maps.Size(65, 65);
      const imageOption = { offset: new window.kakao.maps.Point(30, 65) };

      const marker = new window.kakao.maps.Marker({
        position: map.getCenter(),
        image: new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      });
      marker.setMap(map);

      if (props.share) {
        const content = document.createElement('div');
        const button = document.createElement('button');
        button.id = 'custon-overlay-button';
        button.innerHTML = '이 장소 공유하기';
        button.onclick = (e) => {
          // 채팅 보내지는
          console.log('이 장소 공유하기 버튼 눌림');
        };
        content.appendChild(button);

        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: map.getCenter(),
          content: content,
          yAnchor: 0.2,
        });
      } else {
        window.kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
          const latlng = mouseEvent.latLng;
          marker.setPosition(latlng);

          props.setLatitude ? props.setLatitude(latlng.getLat()) : null;
          props.setLongitude ? props.setLongitude(latlng.getLng()) : null;
        });
      }
    });
  };
  mapScript.addEventListener('load', onLoadKakaoMap);

  return (
    <>
      <MapStyled id="map" />
    </>
  );
}
