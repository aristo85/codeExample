import type {CSSProperties} from 'react';
import {
  CarouselData,
  MainPageAccomodationData,
  MainPageLeisureData,
} from '../home/types';
import {ProfileData} from '@/modules/auth/authSlice';
import {
  BookingMeta,
  ExcursionMeta,
  GuideMeta,
  Notification,
} from '@/modules/control-panel/components/Notifications/NotificationItem/types';
import {ExcursionDetailedData} from './api/model/excursion/excursionDetailedData';
import {GuideDetailedData} from './api/model/guide/guideDetailedData';

export type StylizationProps = {
  className?: string;
  style?: CSSProperties;
};

export type TourDataResponse = {
  carouselData: CarouselData[];
  mainPageAccomodationData: MainPageAccomodationData[];
  mainPageLeisureData: MainPageLeisureData[];
};

export interface ProfileResponse {
  data: ProfileData;
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
}

export interface DeleteProfileResponse {
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
}

export interface SignInResponse {
  data: {
    accessToken: 'string';
    refreshToken: 'string';
  };
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
}

export interface ChangeProfilePasswordResponse {
  data: unknown[];
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
}

export interface AddPlacementByIdResponse {
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
}

export interface DefaultResponse {
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
}

export interface ProfileUpdateData {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone?: string;
  email: string;
  avatar?: string;
  company?: string;
}

export interface NotificationResponse {
  data: Notification<BookingMeta | ExcursionMeta | GuideMeta>[];
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
  totalItemsCount: string;
}

declare module 'yup' {
  interface StringSchema {
    noOnlyDash(message?: string): StringSchema;
  }
}

export interface AddExcursionResponse {
  data: ExcursionDetailedData;
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
  totalItemsCount: string;
}

export interface AddGuideResponse {
  data: GuideDetailedData;
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
  totalItemsCount: string;
}
