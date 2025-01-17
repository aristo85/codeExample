import React from 'react';

import SuccessComponent from '@/modules/core/components/PaymentSuccessComponent';

const PaymentSuccessPage = () => {
  return (
    <SuccessComponent
      paymentTitle={'Обработка платежа'}
      paymentSubTitle={
        'Отслеживайте статус бронирования на странице бронирования.'
      }
      buttonInfo={{
        href: (id: string) => `/profile/booking/placement/${id}`,
        title: 'На страницу бронирования',
      }}
    />
  );
};

export default PaymentSuccessPage;
