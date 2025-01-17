import {Response} from '@/modules/core/api/Response';
import {ErrorResponse} from '@/modules/core/hooks/useToast';
import {Dayjs} from 'dayjs';
import {ExcursionType} from '../excursion/types';

export enum LeisureType {
  GUIDE = 'GUIDE',
  EXCURSION = 'EXCURSION',
}
export type LeisureFilterParamsData = {
  specialOfferCount: number;
  typeExcursionCount: number;
  typeGuideCount: number;
  withChildrenCount: number;
  excursionTypeIndividualCount: number;
  excursionTypeGroupCount: number;
  travelModeFootCount: number;
  travelModeCarCount: number;
  travelModeBikeCount: number;
  travelModeBusCount: number;
  travelModeMotorcycleCount: number;
  travelModeBoatCount: number;
  travelModeMuseumCount: number;
  travelModeIndoorCount: number;
  travelModeHorsebackCount: number;
};

export interface LeisureListData {
  id: number;
  type: LeisureType;
  name: string;
  description: string;
  cityName: string;
  mainPhotoUrl: string;
  withChildren: boolean;
  isHide: boolean;
  isSpecialOffer: boolean;
  excursionData: {
    adultPrice: number;
    childrenPrice: number;
    duration: number;
    type?: ExcursionType;
  };
  guideData: {
    costPerHour: number;
    age: number;
  };
}

export interface LeisureListResponse extends Response<LeisureListData[]> {
  totalCount: string;
  filterData: LeisureFilterParamsData;
  error?: ErrorResponse;
}

export interface LeisureFilterValuesForm {
  cityId: string | null;
  date: Dayjs | string;
  dateTo: Dayjs | string;
  popular?: boolean;
  sort?: string[];
  offset?: string | number;
  limit?: string | number;
  withChildren?: boolean;
  specialOffer?: boolean;
  travelMode: string[];
  type: LeisureType | null;
  excursionType: string[];
}
