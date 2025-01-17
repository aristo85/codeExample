import React, {FC, useCallback} from 'react';
import {YooMoneyError} from '@/global';
import Script from 'next/script';
import {useNotification} from '@/modules/core/hooks/useNotification';

export type YooKassaWidgetProps = {
  confirmationToken?: string;
  returnUrl?: string;
};

export const YooKassaWidget: FC<YooKassaWidgetProps> = ({
  confirmationToken,
  returnUrl,
}) => {
  const toast = useNotification();

  const onLoadYooKassa = useCallback(() => {
    const checkout = new window.YooMoneyCheckoutWidget({
      confirmation_token: confirmationToken ?? '',
      return_url: returnUrl ?? '',
      error_callback: (e: YooMoneyError) => {
        const message =
          e.error === 'token_expired'
            ? 'Истекло время оплаты'
            : 'Что-то пошло не так';
        toast(message, 'error');
      },
    });
    checkout.render('payment-form');
  }, [toast, confirmationToken, returnUrl]);

  if (!confirmationToken) {
    return <></>;
  }

  return (
    <>
      <Script
        src="https://yookassa.ru/checkout-widget/v1/checkout-widget.js"
        strategy="lazyOnload"
        onLoad={onLoadYooKassa}
      />
      <div id="payment-form"></div>
    </>
  );
};
