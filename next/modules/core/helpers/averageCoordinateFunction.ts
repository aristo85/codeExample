import {CoordinateType} from '@/modules/placement/components/BookingCard';

export const getAverageCoordinates = (
  coordinates: CoordinateType[],
): CoordinateType => {
  if (!coordinates) return {lat: 0, lng: 0};

  let sumLng = 0;
  let sumLat = 0;

  for (let i = 0; i < coordinates.length; i++) {
    sumLat += coordinates[i].lat;
    sumLng += coordinates[i].lng;
  }

  return {
    lat: sumLat / coordinates.length,
    lng: sumLng / coordinates.length,
  };
};
