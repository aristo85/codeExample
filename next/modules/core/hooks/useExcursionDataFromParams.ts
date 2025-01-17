import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks/index';
import {useRouter} from 'next/router';
import {
  selectExcursionFilterValues,
  setExcursionFilterValue,
} from '@/modules/excursion/components/ExcursionFilter/ExcursionFilterSlice';
import {ExcursionTypes} from '@/modules/excursion/excursion.types';
import {TravelMode} from '@/modules/core/api/model/common/travelMode';
import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export const useExcursionFilterDataFromQuery = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const excursionFilterData = useAppSelector(selectExcursionFilterValues);

  useEffect(() => {
    const {cityId, offset, withChildren, limit, type, travelMode} =
      router.query;

    let {date, dateTo} = router.query;

    if (dayjs(date as string).isBefore(dayjs().startOf('D'))) {
      date = dayjs().format(DEFAULT_DATE_FORMAT);
      dateTo = dayjs(date).add(3, 'day').format(DEFAULT_DATE_FORMAT);
    }

    if (dayjs(dateTo as string).isBefore(date as string)) {
      dateTo = dayjs().add(3, 'day').format(DEFAULT_DATE_FORMAT);
    }

    dispatch(
      setExcursionFilterValue({
        date: date ? String(date) : excursionFilterData.date,
        dateTo: dateTo ? String(dateTo) : excursionFilterData.dateTo,
        cityId:
          cityId && cityId !== 'null'
            ? String(cityId)
            : excursionFilterData.cityId,
        offset: offset ? Number(offset) : excursionFilterData.offset,
        withChildren: withChildren === 'true',
        travelMode: travelMode
          ? (String(travelMode) as TravelMode)
          : excursionFilterData.travelMode,
        limit: limit ? Number(limit) : excursionFilterData.limit,
        type: type
          ? (String(type) as ExcursionTypes)
          : excursionFilterData.type,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
};
