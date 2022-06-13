import { useState, useEffect, useRef } from 'react';
import Map from '@molecules/Map/Map';
import Top from '@molecules/Top/Top';
import { LocationSharePageStyled } from './LocationSharePageStyled';
import { getUserLocation } from 'apis/kakao';

const LocationSharePage = () => {
  const MapWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setCurrentAddress(await getUserLocation(position.coords.longitude, position.coords.latitude));
    });
  }, []);

  return (
    <>
      <LocationSharePageStyled>
        <Top title="장소공유" left="prev" />
        <div className="map-wrap" ref={MapWrapRef}>
          <div style={{ height: `${MapWrapRef.current?.offsetHeight}px` }}>
            <Map
              share={true}
              latitude={latitude}
              setLatitude={setLatitude}
              longitude={longitude}
              setLongitude={setLongitude}
            />
          </div>
        </div>
      </LocationSharePageStyled>
    </>
  );
};

export default LocationSharePage;
