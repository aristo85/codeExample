import {Dayjs} from 'dayjs';
import {TravelMode} from '@/modules/core/api/model/common/travelMode';

export interface GuideFilterValuesForm {
  cityId: string | null;
  date: Dayjs | string;
  dateTo: Dayjs | string;
  withChildren: boolean;
  sort?: string[];
  offset?: string | number;
  limit?: string | number;
  travelMode: TravelMode | null;
}
