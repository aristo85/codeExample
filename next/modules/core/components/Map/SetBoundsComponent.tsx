import React, {FC} from 'react';
import {useMap} from 'react-leaflet';
import {MarkerType} from './Map';

type SetBoundsComponentProps = {
  markers: MarkerType[];
};

const SetBoundsComponent: FC<SetBoundsComponentProps> = ({markers}) => {
  const map = useMap();

  const bounds = markers.map(
    el => [el.coordinate.lat, el.coordinate.lng] as [number, number],
  );

  React.useEffect(() => {
    if (bounds && bounds.length > 0) {
      map.fitBounds(bounds, {
        padding: [20, 20],
      });
    }
  }, [bounds, map]);

  return null;
};

export default SetBoundsComponent;
