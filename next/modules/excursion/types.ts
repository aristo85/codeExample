import {CreateExcursionRequestBody} from '../core/api/model/excursion/createExcursionRequestBody';

export type PhotoComponentValue = {
  id: string;
  url: string;
};

export type TourFormData = CreateExcursionRequestBody & {
  photos: PhotoComponentValue[];
  guideAvatar: PhotoComponentValue[];
  mainPhoto: PhotoComponentValue[];
};

export enum TravelModeType {
  FOOT = 'FOOT',
  CAR = 'CAR',
  BIKE = 'BIKE',
  BUS = 'BUS',
  MOTORCYCLE = 'MOTORCYCLE',
  BOAT = 'BOAT',
  MUSEUM = 'MUSEUM',
  IN_DOOR = 'IN_DOOR',
  HORSEBACK = 'HORSEBACK',
}

export enum ExcursionType {
  INDIVIDUAL = 'INDIVIDUAL',
  GROUP = 'GROUP',
}

export const excursionTypes = [
  {
    id: ExcursionType.INDIVIDUAL,
    title: 'Индивидуальный',
    subtitle:
      'Бронирование закрывается сразу после того, как турист оплатил заказ, и становится недоступным для поиска',
  },
  {
    id: ExcursionType.GROUP,
    title: 'Групповой',
    subtitle:
      'Бронирование закрывается, когда все места будут выкуплены, либо когда наступит указанное время.',
  },
];

export const timeOptionsArray = [
  {title: '1 час', value: '1'},
  {title: '1.5 часа', value: '1.5'},
  {title: '2 часа', value: '2'},
  {title: '2.5 часа', value: '2.5'},
  {title: '3 часа', value: '3'},
  {title: '3.5 часа', value: '3.5'},
  {title: '4 часа', value: '4'},
  {title: '4.5 часа', value: '4.5'},
  {title: '5 часов', value: '5'},
  {title: '5.5 часа', value: '5.5'},
  {title: '6 часов', value: '6'},
  {title: '7 часов', value: '7'},
  {title: '8 часов', value: '8'},
  {title: '9 часов', value: '9'},
  {title: '10 часов', value: '10'},
  {title: '11 часов', value: '11'},
  {title: 'более 12 часов', value: '12'},
];

export const closingHours = [
  {title: 'За 1 час', value: '1'},
  {title: 'За 2 часа', value: '2'},
  {title: 'За 3 часа', value: '3'},
  {title: 'За 4 часа', value: '4'},
  {title: 'За 5 часов', value: '5'},
  {title: 'За 6 часов', value: '6'},
  {title: 'За 7 часов', value: '7'},
  {title: 'За 8 часов', value: '8'},
  {title: 'За 9 часов', value: '9'},
  {title: 'За 10 часов', value: '10'},
  {title: 'За 11 часов', value: '11'},
  {title: 'За 12 часов', value: '12'},
  {title: 'За 24 часа', value: '24'},
];
