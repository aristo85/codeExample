import {BookingStatus} from '@/modules/core/api/types';

export interface BookingShortData {
  id: number;
  name: string; // Guide / excursion name
  status: BookingStatus;
  bookingNumber: string;
  date: string;
  time: string;
  numberOfParticipants: number;
  numberOfChildren: number;
  duration?: number;
}
