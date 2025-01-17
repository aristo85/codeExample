import React, {FC} from 'react';
import Head from 'next/head';
import Spinner from '@/modules/core/components/Spinner';
import {
  PaymentButtonBack,
  PaymentButtonBackTitle,
  PaymentContainer,
  TextInfo,
} from './styles';
import {useRouter} from 'next/router';
import {ArrowLeftButton} from '@/modules/core/components/FilterCalendar/styles';

type Props = {
  isLoading: boolean;
};

const Payment: FC<Props> = ({isLoading}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Go2Kavkaz : Оплата</title>
      </Head>
      <Spinner showSpinner={isLoading} />
      <PaymentContainer>
        <PaymentButtonBack
          onClick={() => {
            void router.back();
          }}>
          <ArrowLeftButton />
          <PaymentButtonBackTitle>Назад</PaymentButtonBackTitle>
        </PaymentButtonBack>
        <TextInfo>
          Если у вас включен VPN, то вы можете столкнуться с проблемами при
          оплате. Рекомендуем выключить VPN сервисы.
        </TextInfo>
        <div id="payment-form"></div>
      </PaymentContainer>
    </>
  );
};

export default Payment;
