import {useAppDispatch, useAppSelector} from '@/modules/core/hooks/index';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {
  selectLeisureFilterValues,
  setLeisureFilterValue,
} from '@/modules/leisure/leisureSlice';
import {LeisureType} from '@/modules/leisure/types';
import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export const useLeisureFilterDataFromQuery = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const leisureFilterData = useAppSelector(selectLeisureFilterValues);

  useEffect(() => {
    const {
      cityId,
      offset,
      withChildren,
      limit,
      travelMode,
      excursionType,
      specialOffer,
      type,
    } = router.query;

    let {date, dateTo} = router.query;
    if (dayjs(date as string).isBefore(dayjs().startOf('D'))) {
      date = dayjs().format(DEFAULT_DATE_FORMAT);
      dateTo = dayjs(date).add(3, 'day').format(DEFAULT_DATE_FORMAT);
    }

    if (dayjs(dateTo as string).isBefore(date as string)) {
      dateTo = dayjs().add(3, 'day').format(DEFAULT_DATE_FORMAT);
    }

    dispatch(
      setLeisureFilterValue({
        date: date ? String(date) : leisureFilterData.date,
        dateTo: dateTo ? String(dateTo) : leisureFilterData.dateTo,
        cityId:
          cityId && cityId !== 'null'
            ? String(cityId)
            : leisureFilterData.cityId,
        offset: offset ? Number(offset) : leisureFilterData.offset,
        withChildren: withChildren === 'true',
        specialOffer: specialOffer === 'true',
        limit: limit ? Number(limit) : leisureFilterData.limit,
        travelMode: travelMode ? (travelMode as string).split(',') : [],
        type: (type as LeisureType) ?? null,
        excursionType: excursionType
          ? (excursionType as string).split(',')
          : [],
        popular: leisureFilterData.popular && !leisureFilterData.cityId,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
};
