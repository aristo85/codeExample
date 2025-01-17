import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bookingListTest: any = [
  {
    id: 194,
    name: 'PartnerAPI для интеграции 11',
    arrivalDateTime: '2023-07-20T12:00',
    departureDateTime: '2023-07-28T09:58',
    bookingDateTime: '2023-07-20T14:47:44.272Z',
    price: 16000.0,
    commission: 800.0,
    bookingNumber: '20230720-8745-12310700',
    type: 'PLACEMENT',
    image:
      'https://partner-static.qatl.ru/images/p/8866/637867649681011134-44190d2d-58ec-4727-90eb-8fcae994f49a',
    owner: {
      firstName: 'Test',
      lastName: 'Testov',
      middleName: null,
    },
    guest: {
      firstName: 'Алексей',
      lastName: 'Михайлов',
    },
    status: 'CANCELLED',
    cancellationPolicy: {
      freeCancellationPossible: true,
      freeCancellationDeadlineUtc: null,
      penaltyAmount: null,
    },
    email: 'lala@mail.ru',
    phone: '12321313123',
    cityName: 'City',
  },
  {
    id: 194,
    name: 'PartnerAPI для интеграции 11',
    arrivalDateTime: '2023-07-20T12:00',
    departureDateTime: '2023-07-28T09:58',
    bookingDateTime: '2023-07-20T14:47:44.272Z',
    price: 16000.0,
    commission: 800.0,
    bookingNumber: '20230720-8745-12310700',
    type: 'PLACEMENT',
    image:
      'https://partner-static.qatl.ru/images/p/8866/637867649681011134-44190d2d-58ec-4727-90eb-8fcae994f49a',
    owner: {
      firstName: 'Test',
      lastName: 'Testov',
      middleName: null,
    },
    guest: {
      firstName: 'Алексей',
      lastName: 'Михайлов',
    },
    status: 'WAITING_PARTNER',
    cancellationPolicy: {
      freeCancellationPossible: true,
      freeCancellationDeadlineUtc: null,
      penaltyAmount: null,
    },
    email: 'lala@mail.ru',
    phone: '12321313123',
    cityName: 'City',
  },
  {
    id: 293,
    name: 'Крепость и экраноплан Лунь',
    arrivalDateTime: '2023-07-20T14:00',
    departureDateTime: '2023-07-21T12:00',
    bookingDateTime: '2023-07-20T14:46:04.483Z',
    price: 600.0,
    commission: 30.0,
    bookingNumber: null,
    type: 'EXCURSION',
    image:
      'https://www.qatl.ru/upload/resize_cache/iblock/cae/1920_1080_2/Depositphotos_4150984_original.jpg',
    owner: {
      firstName: 'Test',
      lastName: 'Testov',
      middleName: null,
    },
    guest: {
      firstName: 'Деплой',
      lastName: 'Ночной',
    },
    status: 'WAITING_PAYMENT',
    cancellationPolicy: {
      freeCancellationPossible: false,
      freeCancellationDeadlineUtc: null,
      penaltyAmount: 600.0,
    },
    email: 'lala@mail.ru',
    phone: '12321313123',
    cityName: 'City',
  },
  {
    id: 393,
    name: 'Новиков Павел',
    arrivalDateTime: '2023-07-20T14:00',
    departureDateTime: '2023-07-21T12:00',
    bookingDateTime: '2023-07-20T14:46:04.483Z',
    price: 600.0,
    commission: 30.0,
    bookingNumber: null,
    type: 'GUIDE',
    image: 'https://www.qatl.ru/upload/images/reviews/review_artemov.png',
    owner: {
      firstName: 'Test',
      lastName: 'Testov',
      middleName: null,
    },
    guest: {
      firstName: 'Деплой',
      lastName: 'Ночной',
    },
    status: 'WAITING_PARTNER',
    cancellationPolicy: {
      freeCancellationPossible: false,
      freeCancellationDeadlineUtc: null,
      penaltyAmount: 600.0,
    },
    email: 'lala@mail.ru',
    phone: '12321313123',
    cityName: 'City',
  },
];

export const boxes = [
  {
    id: '1',
    title: 'Недельное расписание',
    subtitle: 'Вы указываете время работы для каждого дня недели',
  },
  {
    id: '2',
    title: 'Настраиваемое расписание',
    subtitle: 'Можно точно настроить даты и время работы',
  },
];

export const prices = {
  upSection: {
    title: 'Cтоимость',
    list: [
      {listTitle: 'Взрослый', price: 1500},
      {listTitle: 'Ребенок младше 7л.', price: 500},
    ],
  },
  downSection: {
    title: 'Итого',
    list: [
      {listTitle: '2х Взрослый', price: 3000},
      {listTitle: '1х Ребенок младше 7л.', price: 500},
      {listTitle: '1х Ребенок младше 7л.', price: 175},
    ],
  },
};

export const scheduleDataWithNestedArrays = [
  {
    date: dayjs().format(DEFAULT_DATE_FORMAT),
    timeList: [{time: '10:00'}, {time: '14:00'}],
  },
];

export const uisImages = [
  'https://partner-static.qatl.ru/images/p/8746/637868466156453307-8b3aff7f-bab9-480d-9da0-f3612e834d21',
  'https://partner-static.qatl.ru/images/p/8155/637865800903806384-0dc8135c-ee11-45f1-abb4-e9b93331edc9',
  'https://partner-static.qatl.ru/images/p/5019/638016020384719795-69e4ba60-e9c7-41a7-90ea-48473fd3b671',
  'https://partner-static.qatl.ru/images/p/8865/637868261606348668-15929e58-cf99-4c2f-bfec-20cff298bae8',
  'https://partner-static.qatl.ru/images/p/5019/638016020384719795-69e4ba60-e9c7-41a7-90ea-48473fd3b671',
  'https://partner-static.qatl.ru/images/p/8865/637868261606348668-15929e58-cf99-4c2f-bfec-20cff298bae8',
  'https://partner-static.qatl.ru/images/p/8155/637865800903806384-0dc8135c-ee11-45f1-abb4-e9b93331edc9',
];
