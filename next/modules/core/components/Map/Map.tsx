import React, {FC, useMemo, useState} from 'react';
import 'leaflet/dist/leaflet.css';
import {TileLayer, Marker} from 'react-leaflet';
import {Icon, IconOptions} from 'leaflet';
import {
  PopupContentWrapper,
  PopupImage,
  PopupSubtitle,
  PopupTitle,
  StyledMapContainer,
  StyledPopup,
} from '@/modules/core/components/Map/styles';
import {CoordinateType} from '@/modules/placement/components/BookingCard';
import Link from 'next/link';
import {getAverageCoordinates} from '@/modules/core/helpers/averageCoordinateFunction';
import SetBoundsComponent from './SetBoundsComponent';

export type MarkerType = {
  city: string;
  avatar: string;
  name: string;
  address: string;
  id: number;
  coordinate: CoordinateType;
};

interface MapProps {
  value?: CoordinateType;
  clickable?: boolean;
  markers?: MarkerType[];
  linkTo?: string;
  queries?: string;
}

export const createIcon = (url: string): Icon<IconOptions> => {
  return new Icon({
    iconUrl: url,
    iconSize: [45, 49],
    iconAnchor: [22, 44],
    popupAnchor: [20, 10],
  });
};
const Map: FC<MapProps> = ({markers, linkTo, queries, value, clickable}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const calculatedCenterPosition: CoordinateType = useMemo(() => {
    const coordinatesArray = markers?.map(({coordinate}) => coordinate);
    return getAverageCoordinates(coordinatesArray || []);
  }, [markers]);
  const handleClick = (i: number): void => {
    setSelectedIndex(i);
  };

  const getMarkerIcon = (index: number): Icon<IconOptions> => {
    if (index === selectedIndex) {
      return createIcon('/images/activePin.svg');
    }
    return createIcon('/images/inactivePin.svg');
  };

  if (!markers && !value?.lat) {
    return null;
  }

  return (
    <StyledMapContainer
      doubleClickZoom={false}
      scrollWheelZoom={true}
      attributionControl={false}
      center={value || calculatedCenterPosition}
      zoom={14}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers?.map(({coordinate, avatar, name, address, id}, index) => (
        <Marker
          position={coordinate}
          key={index}
          interactive={true}
          icon={getMarkerIcon(index)}
          eventHandlers={{click: () => handleClick(index)}}>
          <StyledPopup closeButton={false}>
            <PopupImage src={avatar} alt={'Pin image'} />
            <PopupContentWrapper>
              <Link href={`/${linkTo}/${id}?${queries}`} passHref>
                <PopupTitle>{name}</PopupTitle>
              </Link>
              <PopupSubtitle>{address}</PopupSubtitle>
            </PopupContentWrapper>
          </StyledPopup>
        </Marker>
      ))}
      {value && (
        <Marker
          position={value}
          interactive={false}
          icon={createIcon('/images/activePin.svg')}
        />
      )}
      {markers && <SetBoundsComponent markers={markers} />}
    </StyledMapContainer>
  );
};

export default Map;
