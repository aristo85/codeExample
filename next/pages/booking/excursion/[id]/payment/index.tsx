import React from 'react';
import {useAppSelector} from '@/modules/core/hooks';
import {useRouter} from 'next/router';
import {useGetExcursionByIdTouristQuery} from '@/modules/excursion/apiExcursionSlice';
import {selectExcursionFilterValues} from '@/modules/excursion/components/ExcursionFilter/ExcursionFilterSlice';
import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import {
  excursionQueryHandler,
  ExcursionQueryLocation,
} from '@/modules/core/helpers/excursionQueryHandler';
import useYooKassaPayment from '@/modules/core/hooks/useYooKassaPayment';
import Payment from '@/modules/payment';

const PaymentExcursionPage = () => {
  const router = useRouter();
  const {id} = router.query;

  const {isLoading} = useYooKassaPayment();

  const filterExcursionData: ExcursionFilterValuesForm = useAppSelector(
    selectExcursionFilterValues,
  );

  const {queriesString: bookingDetailParams} = excursionQueryHandler(
    filterExcursionData,
    ExcursionQueryLocation.detail,
  );
  const {queriesString: bookingListParams} = excursionQueryHandler(
    filterExcursionData,
    ExcursionQueryLocation.list,
  );
  const {data} = useGetExcursionByIdTouristQuery(
    {
      id: Number(id),
    },
    {
      skip: !id,
    },
  );

  const {name} = data?.data || {};
  const breadcrumbsItems = [
    {url: '/', label: 'Главная'},
    {
      url: `/excursion?${bookingListParams}`,
      label: 'Результаты поиска',
    },
    {
      url: `/excursion/${id}?${bookingDetailParams}`,
      label: name || '',
    },
    {
      url: `/booking/excursion/${id}?${bookingDetailParams}`,
      label: 'Бронирование',
    },
    {
      url: `/booking/excursion/${id}/payment?${bookingDetailParams}`,
      label: 'Оплата',
    },
  ];

  return <Payment {...{breadcrumbsItems, isLoading}} />;
};

export default PaymentExcursionPage;
