import React from 'react';
import SuccessComponent from '@/modules/core/components/PaymentSuccessComponent';

const ExcursionSuccessPage = () => {
  return (
    <SuccessComponent
      paymentTitle={'Экскурсия создана'}
      paymentSubTitle={
        'Ваша экскурсия отправлена на модерацию.\n После проверки экскурсия сразу станет доступна туристам для бронирования.'
      }
      buttonInfo={{
        href: () => `/`,
        title: 'На главную',
      }}
    />
  );
};

export default ExcursionSuccessPage;
