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
  ExcursionImage,
  ExcursionTitle,
  DetailBookingButtonsWrapper,
  CancelButton,
  DetailBookingContentItem,
  ExcursionDataBlock,
} from '@/modules/booking/excursion/detail/styles';
import {useRouter} from 'next/router';
import {
  useApproveBookingMutation,
  useGetDetailBookingQuery,
} from '@/modules/booking/apiBookingSlice';
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
import BusinessCard from '@/modules/core/components/BusinessCard';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import useRefetchOnPaymentStatus, {
  DataWithStatus,
} from '@/modules/core/hooks/useRefetchOnPaymentStatus';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import {BookingStatus} from '@/modules/core/api/types';
import {useNotification} from '@/modules/core/hooks/useNotification';

export const BookingExcursionDetail: FC = () => {
  const router = useRouter();
  const toast = useNotification();
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

  const [approve, {isLoading: isLoadingApprove}] = useApproveBookingMutation();

  const {
    isCancellationModalOpen,
    modalCancelButtonClickFunction,
    modalAcceptButtonClickFunction,
    isLoadingCancel,
    onCancelButtonWithoutCalculatePenaltyClick,
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
    data?.data == undefined ||
    isLoadingApprove
  ) {
    return <Spinner showSpinner={true} />;
  }

  const {touristData, status, excursionData, isCanBeCancelled} = data.data;

  const breadcrumbsItems = [
    {url: '/control-panel', label: 'Панель управления'},
    {
      label: 'Бронирования',
    },
    {
      url: `/control-panel/booking/excursion/${id}`,
      label: excursionData?.name ?? 'Бронирование',
    },
  ];

  const approveBookingHandler = async (bookingId: number) => {
    try {
      const response = await approve({id: bookingId}).unwrap();
      if (response.success) {
        toast('Вы успешно подтвердили бронирование', 'success');
      }
      refetch();
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Go2Kavkaz : Бронирование {id}</title>
      </Head>

      <BookingCancellationModal
        isOpen={isCancellationModalOpen}
        closeButton={modalCancelButtonClickFunction}
        cancelBooking={modalAcceptButtonClickFunction}
        penaltyAmount={null}
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
                  {touristData.middleName ? ` ${touristData.middleName}` : ''}
                </h2>
                <span>№ брони {id}</span>
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
            <Divider />
            <FieldRow>
              <Field>
                <FieldHeader>Дата</FieldHeader>
                <FieldValue>
                  {excursionData?.excursionDate
                    ? dayjs(excursionData?.excursionDate).format('DD MMMM YYYY')
                    : null}
                </FieldValue>
              </Field>
              <Field>
                <FieldHeader>Время</FieldHeader>
                <FieldValue>
                  {excursionData?.excursionTime
                    ? excursionData?.excursionTime
                    : null}
                </FieldValue>
              </Field>
              <Field>
                <FieldHeader>Длительность</FieldHeader>
                <FieldValue>
                  {excursionData?.duration &&
                    `${excursionData.duration} ${pluralizationFn(
                      excursionData.duration,
                      ['час', 'часа', 'часов'],
                    )}`}
                </FieldValue>
              </Field>
            </FieldRow>
            <FieldRow>
              <Field>
                <FieldHeader>Количество участников</FieldHeader>
                <FieldValue>{excursionData?.numberOfParticipants}</FieldValue>
              </Field>
            </FieldRow>
            {excursionData?.numberOfChildren ? (
              <FieldRow>
                <Field>
                  <FieldHeader>Дети до 7-ми лет</FieldHeader>
                  <FieldValue>{excursionData?.numberOfChildren}</FieldValue>
                </Field>
              </FieldRow>
            ) : null}
            {touristData.comments && (
              <>
                <Divider />
                <FieldRow>
                  <Field>
                    <FieldHeader>Комментарий</FieldHeader>
                    <FieldValue style={{whiteSpace: 'pre-wrap'}}>
                      {touristData.comments}
                    </FieldValue>
                  </Field>
                </FieldRow>
              </>
            )}
          </DetailBookingContentItem>
          <DetailBookingContentItem>
            <ExcursionDataBlock>
              <ExcursionImage src={excursionData?.mainImage} />
              <ExcursionTitle>{excursionData?.name}</ExcursionTitle>
            </ExcursionDataBlock>
            <div>
              <BusinessCard
                photo={excursionData?.guide?.guideAvatar ?? ''}
                names={excursionData?.guide?.guideName ?? ''}
                jobTitle="Экскурсовод"
              />
            </div>
          </DetailBookingContentItem>
        </DetailBookingContentWrapper>

        <DetailBookingButtonsWrapper>
          {status === BookingStatus.WAITING_PARTNER && (
            <ButtonBasic
              onClick={() => id && approveBookingHandler(Number(id))}>
              Подтвердить
            </ButtonBasic>
          )}
          {isCanBeCancelled && (
            <CancelButton
              onClick={() =>
                id && onCancelButtonWithoutCalculatePenaltyClick(+id)
              }>
              Отменить бронирование
            </CancelButton>
          )}
        </DetailBookingButtonsWrapper>
      </DetailBookingPageWrapper>
    </>
  );
};
