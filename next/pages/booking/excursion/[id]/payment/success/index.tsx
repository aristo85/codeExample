import React from 'react';

import SuccessComponent from '@/modules/core/components/PaymentSuccessComponent';

const PaymentSuccessPage = () => {
  return (
    <SuccessComponent
      paymentTitle={'Бронирование оплачено'}
      paymentSubTitle={
        'Подробную информацию и номер бронирования отправим вам на почту.'
      }
      buttonInfo={{
        href: (id: string) => `/profile/booking/excursion/${id}`,
        title: 'На страницу бронирования',
      }}
    />
  );
};

export default PaymentSuccessPage;
