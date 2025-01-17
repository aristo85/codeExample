import React, {FC} from 'react';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import {
  BreadcrumbsBlock,
  Field,
  FieldRow,
  FieldValue,
  DetailBookingPageHeader,
  DetailBookingPageWrapper,
  FieldHeader,
  Divider,
  DetailBookingContentWrapper,
  RoomImage,
  DetailBookingButtonsWrapper,
  CancelButton,
  DetailBookingContentItem,
} from '@/modules/booking/detail/styles';
import {useRouter} from 'next/router';
import {useGetDetailBookingQuery} from '@/modules/booking/apiBookingSlice';
import Head from 'next/head';
import Status from '@/modules/core/components/Status';
import Spinner from '@/modules/core/components/Spinner';
import dayjs from 'dayjs';
import ErrorCustomPage from '@/modules/core/components/ErrorComponent';
import {ErrorData} from '@/modules/core/api/ErrorData';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query/react';
import {Response} from '@/modules/core/api/Response';
import {useCancelBooking} from '@/modules/core/hooks/useCancelBooking';
import {BookingCancellationModal} from '@/modules/profile/components/BookedListWithCategories/BookingCancellationModal';
import {BookingRoomStaysData} from '@/modules/core/api/model/booking/bookingRoomStaysData';
import useRefetchOnPaymentStatus, {
  DataWithStatus,
} from '@/modules/core/hooks/useRefetchOnPaymentStatus';

export const BookingDetail: FC = () => {
  const router = useRouter();
  const {id} = router.query;
  const {
    data,
    isLoading: isLoadingFetch,
    isError,
    error,
    refetch,
  } = useGetDetailBookingQuery(
    {
      id: Number(id),
    },
    {
      skip: !id,
    },
  );

  const {
    isCancellationModalOpen,
    modalCancelButtonClickFunction,
    modalAcceptButtonClickFunction,
    penaltyAmount,
    onCancelButtonClick,
    isCalculatePenaltyLoading,
    isLoadingCancel,
  } = useCancelBooking();

  // refetch on every route, if requires
  useRefetchOnPaymentStatus(data as DataWithStatus, refetch);

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
    isCalculatePenaltyLoading ||
    data?.data == undefined
  ) {
    return <Spinner showSpinner={true} />;
  }

  const {bookingNumber, touristData, placementData, status, isCanBeCancelled} =
    data.data;
  const mainImage: string | undefined = placementData?.images?.[0];
  const roomStay: BookingRoomStaysData | undefined =
    placementData?.roomStays?.[0];

  const breadcrumbsItems = [
    {url: '/control-panel', label: 'Панель управления'},
    {
      label: 'Бронирования',
    },
    {
      url: `/control-panel/booking/placement/${id}`,
      label: placementData?.name ?? 'Бронирование',
    },
  ];

  return (
    <>
      <Head>
        <title>Go2Kavkaz : Бронирование {bookingNumber}</title>
      </Head>

      <BookingCancellationModal
        isOpen={isCancellationModalOpen}
        closeButton={modalCancelButtonClickFunction}
        cancelBooking={modalAcceptButtonClickFunction}
        penaltyAmount={penaltyAmount}
      />
      <DetailBookingPageWrapper>
        <DetailBookingContentWrapper>
          <DetailBookingContentItem $fullWidth>
            <BreadcrumbsBlock>
              <Breadcrumbs paths={breadcrumbsItems} />
            </BreadcrumbsBlock>
            <DetailBookingPageHeader>
              <span>
                <h2>
                  {touristData.lastName} {touristData.firstName}
                  {touristData?.middleName ? ` ${touristData.middleName}` : ''}
                </h2>
                <span>№ брони {bookingNumber}</span>
              </span>
              <Status status={status} bordered />
            </DetailBookingPageHeader>
            <FieldRow>
              <Field>
                <FieldHeader>Контактный телефон</FieldHeader>
                <FieldValue>{touristData?.phone}</FieldValue>
              </Field>
              <Field>
                <FieldHeader>Электронная почта</FieldHeader>
                <FieldValue>{touristData.email}</FieldValue>
              </Field>
            </FieldRow>
            {roomStay && (
              <>
                <Divider />
                <FieldRow>
                  <Field>
                    <FieldHeader>Дата заезда</FieldHeader>
                    <FieldValue>
                      {dayjs(roomStay.stayDates.arrivalDateTime).format(
                        'DD.MM.YYYY HH:mm',
                      )}
                    </FieldValue>
                  </Field>
                  <Field>
                    <FieldHeader>Дата выезда</FieldHeader>
                    <FieldValue>
                      {dayjs(roomStay.stayDates.departureDateTime).format(
                        'DD.MM.YYYY HH:mm',
                      )}
                    </FieldValue>
                  </Field>
                  <Field>
                    <FieldHeader>Количество гостей</FieldHeader>
                    <FieldValue>
                      Взрослых: {roomStay.guestCount.adultCount}
                      {(roomStay.guestCount.childAges?.length ?? 0) > 0
                        ? `, Детей: ${roomStay.guestCount.childAges?.length}`
                        : ''}
                    </FieldValue>
                  </Field>
                </FieldRow>
                <FieldRow>
                  <Field>
                    <FieldHeader>Сумма</FieldHeader>
                    <FieldValue>{roomStay?.total?.priceBeforeTax}</FieldValue>
                  </Field>
                </FieldRow>
                {touristData.comments && (
                  <FieldRow>
                    <Field>
                      <FieldHeader>Комментарий</FieldHeader>
                      <FieldValue style={{whiteSpace: 'pre-wrap'}}>
                        {touristData.comments}
                      </FieldValue>
                    </Field>
                  </FieldRow>
                )}
              </>
            )}
          </DetailBookingContentItem>
          <DetailBookingContentItem>
            <RoomImage src={mainImage} />
          </DetailBookingContentItem>
        </DetailBookingContentWrapper>
        <DetailBookingButtonsWrapper>
          {isCanBeCancelled && (
            <>
              <CancelButton onClick={() => id && onCancelButtonClick(+id)}>
                Отменить бронирование
              </CancelButton>
              {/*<ApproveButton dark onClick={() => approve({id: Number(id)})}>*/}
              {/*  Подтвердить бронирование*/}
              {/*</ApproveButton>*/}
            </>
          )}
        </DetailBookingButtonsWrapper>
      </DetailBookingPageWrapper>
    </>
  );
};
