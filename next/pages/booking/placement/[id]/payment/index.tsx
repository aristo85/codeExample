import React from 'react';
import useYooKassaPayment from '@/modules/core/hooks/useYooKassaPayment';
import Payment from '@/modules/payment';

const PaymentPage = () => {
  const {isLoading} = useYooKassaPayment();
  return <Payment {...{isLoading}} />;
};

export default PaymentPage;
