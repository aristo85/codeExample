import {useAppDispatch, useAppSelector} from '@/modules/core/hooks/index';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {TravelMode} from '@/modules/core/api/model/common/travelMode';
import {
  selectGuideFilterValues,
  setGuideFilterValue,
} from '@/modules/guide/components/GuideFilter/guideFilterSlice';
import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export const useGuideFilterDataFromQuery = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const guideFilterData = useAppSelector(selectGuideFilterValues);

  useEffect(() => {
    const {cityId, offset, withChildren, limit, travelMode} = router.query;

    let {date, dateTo} = router.query;

    if (dayjs(date as string).isBefore(dayjs().startOf('D'))) {
      date = dayjs().format(DEFAULT_DATE_FORMAT);
      dateTo = dayjs(date).add(3, 'day').format(DEFAULT_DATE_FORMAT);
    }

    if (dayjs(dateTo as string).isBefore(date as string)) {
      dateTo = dayjs().add(3, 'day').format(DEFAULT_DATE_FORMAT);
    }

    dispatch(
      setGuideFilterValue({
        date: date ? String(date) : guideFilterData.date,
        dateTo: dateTo ? String(dateTo) : guideFilterData.dateTo,
        cityId:
          cityId && cityId !== 'null' ? String(cityId) : guideFilterData.cityId,
        offset: offset ? Number(offset) : guideFilterData.offset,
        withChildren: withChildren === 'true',
        travelMode: travelMode
          ? (String(travelMode) as TravelMode)
          : guideFilterData.travelMode,
        limit: limit ? Number(limit) : guideFilterData.limit,
      }),
    );
  }, [router]);
};
