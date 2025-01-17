import {useEffect} from 'react';
import {BookingStatus} from '@/modules/core/api/types';

export interface DataWithStatus {
  data?: {
    status: BookingStatus;
  };
}

const useRefetchOnPaymentStatus = (
  data: DataWithStatus | undefined,
  refetch: () => void,
) => {
  useEffect(() => {
    const isNotNeedRefetch =
      data?.data?.status === BookingStatus.CANCELLED ||
      data?.data?.status === BookingStatus.PAID;
    if (data && !isNotNeedRefetch) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useRefetchOnPaymentStatus;
