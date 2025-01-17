import React from 'react';
import {useAppSelector} from '@/modules/core/hooks';
import {useRouter} from 'next/router';
import {selectGuideFilterValues} from '@/modules/guide/components/GuideFilter/guideFilterSlice';
import {
  guideQueryHandler,
  GuideQueryLocation,
} from '@/modules/core/helpers/guideQueryHandler';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';
import {useGetGuideByIdTouristQuery} from '@/modules/guide/apiGuideSlice';
import useYooKassaPayment from '@/modules/core/hooks/useYooKassaPayment';
import Payment from '@/modules/payment';

const PaymentGuidePage = () => {
  const router = useRouter();
  const {id} = router.query;

  const {isLoading} = useYooKassaPayment();

  const filterGuideData: GuideFilterValuesForm = useAppSelector(
    selectGuideFilterValues,
  );
  const {queriesString: bookingDetailParams} = guideQueryHandler(
    filterGuideData,
    GuideQueryLocation.detail,
  );
  const {queriesString: bookingListParams} = guideQueryHandler(
    filterGuideData,
    GuideQueryLocation.list,
  );

  const {data} = useGetGuideByIdTouristQuery({id: Number(id)}, {skip: !id});

  const {name} = data?.data || {};
  const breadcrumbsItems = [
    {url: '/', label: 'Главная'},
    {
      url: `/guide?${bookingListParams}`,
      label: 'Результаты поиска',
    },
    {
      url: `/guide/${id}?${bookingDetailParams}`,
      label: name || '',
    },
    {
      url: `/booking/guide/${id}?${bookingDetailParams}`,
      label: 'Бронирование',
    },
    {
      url: `/booking/guide/${id}/payment?${bookingDetailParams}`,
      label: 'Оплата',
    },
  ];

  return <Payment {...{breadcrumbsItems, isLoading}} />;
};

export default PaymentGuidePage;
