import React from 'react';
import ErrorCustomPage from '@/modules/core/components/ErrorComponent';
import {FetchBaseQueryError} from '@reduxjs/toolkit/dist/query';
import {Response} from '@/modules/core/api/Response';
import {ErrorData} from '@/modules/core/api/ErrorData';
import {useApproveBookingMutation} from '@/modules/booking/apiBookingSlice';
import Spinner from '@/modules/core/components/Spinner';
import BookingDetailComp from '@/modules/profile/BookingDetail';
import {useRouter} from 'next/router';
import {useCancelBooking} from '@/modules/core/hooks/useCancelBooking';
import {BookingCancellationModal} from '@/modules/profile/components/BookedListWithCategories/BookingCancellationModal';
import {useGetDetailedBookingDataByIdQuery} from '@/modules/profile/profileApi';
import useRefetchOnPaymentStatus, {
  DataWithStatus,
} from '@/modules/core/hooks/useRefetchOnPaymentStatus';

const BookingDetailPage = () => {
  const router = useRouter();
  const {id} = router.query;
  const {
    data,
    isLoading: isLoadingFetch,
    isError,
    error,
    refetch,
  } = useGetDetailedBookingDataByIdQuery(Number(id), {
    skip: !id,
  });
  const [approve, {isLoading: isLoadingApprove}] = useApproveBookingMutation();

  // refetch on every route, if requires
  useRefetchOnPaymentStatus(data as DataWithStatus, refetch);

  const {
    isCancellationModalOpen,
    modalCancelButtonClickFunction,
    modalAcceptButtonClickFunction,
    penaltyAmount,
    onCancelButtonClick,
    isCalculatePenaltyLoading,
    isLoadingCancel,
  } = useCancelBooking();

  if (isError) {
    const {data} = error as FetchBaseQueryError;
    const errorData = data as Response<ErrorData>;
    return (
      <ErrorCustomPage
        status={errorData?.status}
        message={errorData?.message}
      />
    );
  }

  if (
    isLoadingFetch ||
    isLoadingCancel ||
    isLoadingApprove ||
    isCalculatePenaltyLoading ||
    data?.data == undefined
  ) {
    return <Spinner showSpinner={true} />;
  }
  return (
    <>
      <BookingCancellationModal
        isOpen={isCancellationModalOpen}
        closeButton={modalCancelButtonClickFunction}
        cancelBooking={modalAcceptButtonClickFunction}
        penaltyAmount={penaltyAmount}
      />
      <BookingDetailComp
        data={data.data}
        cancel={onCancelButtonClick}
        approve={approve}
        id={id as string}
      />
    </>
  );
};

export default BookingDetailPage;
