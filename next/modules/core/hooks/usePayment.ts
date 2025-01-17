import {useReInitPaymentMutation} from '@/modules/booking/apiBookingSlice';
import {useDispatch} from 'react-redux';
import {setPaymentData} from '@/modules/payment/paymentSlice';
import {BookingType} from '@/modules/core/api/model/booking/bookingType';
import {useRouter} from 'next/router';

const usePayment = () => {
  const [reInitPayment] = useReInitPaymentMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const paymentResponseHandler = async ({
    bookingId,
    itemId,
    type,
    additionalQuery,
  }: {
    bookingId: number;
    itemId: number;
    type: BookingType;
    additionalQuery?: string;
  }) => {
    const data = await reInitPayment(bookingId).unwrap();
    if (data.success) {
      await dispatch(setPaymentData(data.data));
      await router.push(
        `/booking/${type.toLowerCase()}/${itemId}/payment?bookingId=${bookingId}${
          additionalQuery ? `&${additionalQuery}` : ''
        }`,
      );
    }
  };
  return [paymentResponseHandler];
};

export default usePayment;
