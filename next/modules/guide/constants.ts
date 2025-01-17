import dayjs from 'dayjs';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';
import {DEFAULT_DATE_FORMAT, DEFAULT_LIMIT} from '@/modules/core/constants';

export const DefaultGuideValues: GuideFilterValuesForm = {
  date: dayjs().format(DEFAULT_DATE_FORMAT),
  dateTo: dayjs().add(3, 'days').format(DEFAULT_DATE_FORMAT),
  cityId: null,
  offset: 0,
  limit: DEFAULT_LIMIT,
  travelMode: null,
  withChildren: false,
};
