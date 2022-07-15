import { useEffect, useRef } from 'react';
import Map from '@molecules/Map/Map';
import Top from '@molecules/Top/Top';
import { LocationSharePageStyled } from './LocationSharePageStyled';
import { useRecoilState } from 'recoil';
import { userLocationState } from 'stores/User';
import useSetLocation from 'hooks/common/useSetLocation';

const LocationSharePage = () => {
  const MapWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [userLocation, setUserLocation] = useSetLocation();

  return (
    <>
      <LocationSharePageStyled>
        <Top title="장소공유" left="prev" />
        <div className="map-wrap" ref={MapWrapRef}>
          <div style={{ height: `${MapWrapRef.current?.offsetHeight}px` }}>
            <Map
            // share={true}
            // latitude={latitude}
            // setLatitude={setLatitude}
            // longitude={longitude}
            // setLongitude={setLongitude}
            />
          </div>
        </div>
      </LocationSharePageStyled>
    </>
  );
};

export default LocationSharePage;
