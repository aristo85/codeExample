import {useCallback, useEffect} from 'react';
import {useReInitPaymentMutation} from '@/modules/booking/apiBookingSlice';
import {
  setPaymentData,
  useAppPaymentSelector,
} from '@/modules/payment/paymentSlice';
import {useRouter} from 'next/router';
import {useAppDispatch} from '.';
import {useHasMounted} from './useHasMounted';
import {useNotification} from './useNotification';
import {YooMoneyError} from '@/global';

const useYooKassaPayment = () => {
  const dispatch = useAppDispatch();
  const {confirmationToken, returnUrl} = useAppPaymentSelector();
  const [reInitPayment, {isLoading}] = useReInitPaymentMutation();
  const router = useRouter();
  const {bookingId} = router.query;
  const isMount = useHasMounted();
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

  useEffect(() => {
    if (!confirmationToken && bookingId) {
      (async () => {
        try {
          const result = await reInitPayment(Number(bookingId)).unwrap();
          if (result.data && result.data.confirmationToken) {
            dispatch(setPaymentData(result.data));
          } else {
            throw new Error('Failed to fetch confirmationToken.');
          }
        } catch (error) {
          console.error('error==>', error);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingId, confirmationToken]);

  useEffect(() => {
    if (confirmationToken && isMount) {
      const script = document.createElement('script');
      script.src = 'https://yookassa.ru/checkout-widget/v1/checkout-widget.js';
      script.async = true;

      script.onload = () => onLoadYooKassa();

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMount, confirmationToken]);

  return {confirmationToken, returnUrl, isLoading};
};

export default useYooKassaPayment;
