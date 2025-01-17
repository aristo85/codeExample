import {TravelMode} from '@/modules/core/api/model/common/travelMode';

export const DEFAULT_LIMIT = 10;
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
export const travelModeSelectorValues: {
  title: string;
  value: TravelMode;
}[] = [
  {title: 'Пешком', value: TravelMode.FOOT},
  {title: 'На машине', value: TravelMode.CAR},
  {title: 'На велосипеде', value: TravelMode.BIKE},
  {title: 'На автобусе', value: TravelMode.BUS},
  {title: 'На мотоцикле', value: TravelMode.MOTORCYCLE},
  {title: 'На лодке', value: TravelMode.BOAT},
  {title: 'В музее', value: TravelMode.MUSEUM},
  {title: 'В помещении', value: TravelMode.IN_DOOR},
  {title: 'Конный', value: TravelMode.HORSEBACK},
];
