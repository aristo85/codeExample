import {ExcursionListData} from '@/modules/core/api/model/excursion/excursionListData';
import {BookingListData} from '@/modules/core/api/model/booking/bookingListData';
import {Response} from '@/modules/core/api/Response';
import {ErrorResponse} from '@/modules/core/hooks/useToast';
import {Dayjs} from 'dayjs';
import {TravelMode} from '@/modules/core/api/model/common/travelMode';
export interface GetExcursionListResponse {
  data: ExcursionListData[];
  totalCount: string;
}

export enum TableStatusEnum {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  CHECK = 'CHECK',
}

export interface BookedListResponse extends Response<BookingListData[]> {
  totalCount: string;
}

export interface ExcursionListResponse extends Response<ExcursionListData[]> {
  totalCount: string;
  error?: ErrorResponse;
}

export enum ExcursionTypes {
  GROUP = 'GROUP',
  INDIVIDUAL = 'INDIVIDUAL',
}

export interface ExcursionFilterValuesForm {
  cityId: string | null;
  date: Dayjs | string;
  dateTo: Dayjs | string;
  withChildren: boolean;
  sort?: string[];
  offset?: string | number;
  limit?: string | number;
  type: ExcursionTypes | null;
  travelMode: TravelMode | null;
}
