import React, {FC, forwardRef} from 'react';
import 'leaflet/dist/leaflet.css';
import {TileLayer, Marker, useMapEvents} from 'react-leaflet';
import {Map as LeafletMap} from 'leaflet';
import {
  Wrapper,
  ContainerWithError,
  MapError,
  StyledMapContainer,
  Label,
  MapInfo,
} from '@/modules/core/components/Map/styles';
import {useFormContext} from 'react-hook-form';
import {createIcon} from '@/modules/core/components/Map/Map';

export type Coordinates = {
  lat: number;
  lng: number;
};
interface MapFormComponentProps {
  name: string;
  isEditable: boolean;
  label?: string;
  txtInfo?: string;
}

export const defaultCoordinates: Coordinates = {
  lat: 55.75086157422359,
  lng: 37.62177859399459,
};

const MapFormComponent: FC<MapFormComponentProps> = forwardRef<
  React.RefAttributes<LeafletMap>,
  MapFormComponentProps
>(({isEditable, name, label, txtInfo}, ref) => {
  const {
    setValue,
    formState: {errors},
    watch,
    trigger,
  } = useFormContext();
  function GetLatitudeAndLongitudeFunction() {
    useMapEvents({
      click: e => {
        const {lat, lng} = e.latlng;
        setValue(name, {lat, lng});
        void trigger(name);
      },
    });
    return null;
  }

  const coords = watch(name);

  return (
    <ContainerWithError>
      {label && <Label>{label}</Label>}
      {txtInfo && <MapInfo>{txtInfo}</MapInfo>}
      <Wrapper>
        <StyledMapContainer
          doubleClickZoom={false}
          scrollWheelZoom={true}
          attributionControl={false}
          center={coords || defaultCoordinates}
          zoom={14}>
          {isEditable && <GetLatitudeAndLongitudeFunction />}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {coords && (
            <Marker
              position={coords}
              icon={createIcon('/images/activePin.svg')}
              autoPanOnFocus={true}
            />
          )}
        </StyledMapContainer>
      </Wrapper>
      <MapError>
        {errors[name] || errors[name] ? 'Выберите точку на карте' : ''}
      </MapError>
    </ContainerWithError>
  );
});

MapFormComponent.displayName = 'MapFormComponent';

export default MapFormComponent;
