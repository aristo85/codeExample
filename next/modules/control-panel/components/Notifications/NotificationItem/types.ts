import {BookingStatus} from '@/modules/core/api/types';

export enum NotificationType {
  BOOKING = 'BOOKING',
  BOOKING_GUIDE = 'BOOKING_GUIDE',
  BOOKING_EXCURSION = 'BOOKING_EXCURSION',
}

export type BookingMeta = {
  bookingId: number;
  status: BookingStatus;
  cityId: number;
  placementId: number;
  placementName: string;
  bookingNumber?: string;
};

export type ExcursionMeta = {
  bookingId: number;
  status: BookingStatus;
  excursionId: number;
  bookingNumber: string;
  excursionName: string;
};

export type GuideMeta = {
  bookingId: number;
  status: BookingStatus;
  guideId: number;
  bookingNumber: string;
  guideName: string;
};

export interface Notification<Meta> {
  id: number;
  message: string;
  type: NotificationType;
  isRead: boolean;
  meta: Meta;
}
