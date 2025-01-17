import React from 'react';
import SuccessComponent from '@/modules/core/components/PaymentSuccessComponent';

const GuideSuccessPage = () => {
  return (
    <SuccessComponent
      paymentTitle={'Гид добавлен'}
      paymentSubTitle={
        'Данные вашего гида отправлены на модерацию.\n После проверки гид сразу станет доступен туристам для бронирования.'
      }
      buttonInfo={{
        href: () => `/`,
        title: 'На главную',
      }}
    />
  );
};

export default GuideSuccessPage;
