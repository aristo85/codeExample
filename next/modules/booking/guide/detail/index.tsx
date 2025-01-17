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
  DetailBookingButtonsWrapper,
  CancelButton,
  DetailBookingContentItem,
} from './styles';
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
import {BookingStatus} from '@/modules/core/api/types';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import {useNotification} from '@/modules/core/hooks/useNotification';

export const BookingGuideDetail: FC = () => {
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

  const {touristData, status, guideData, isCanBeCancelled} = data.data;

  const breadcrumbsItems = [
    {url: '/control-panel', label: 'Панель управления'},
    {
      url: `/control-panel/booking/guide/${id}`,
      label: guideData?.name ?? 'Бронирование',
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
                <h2>{guideData?.name}</h2>
                <span>№ брони {id}</span>
              </span>
              <Status status={status} bordered />
            </DetailBookingPageHeader>
            <FieldRow>
              <Field>
                <FieldHeader>Дата</FieldHeader>
                <FieldValue>
                  {guideData?.guideDate
                    ? dayjs(guideData?.guideDate).format('DD MMMM YYYY')
                    : null}
                </FieldValue>
              </Field>
              <Field>
                <FieldHeader>Время</FieldHeader>
                <FieldValue>
                  {guideData?.guideTime ? guideData?.guideTime : null}
                </FieldValue>
              </Field>
              <Field>
                <FieldHeader>Длительность</FieldHeader>
                <FieldValue>
                  {guideData?.duration &&
                    `${guideData.duration} ${pluralizationFn(
                      guideData.duration,
                      ['час', 'часа', 'часов'],
                    )}`}
                </FieldValue>
              </Field>
            </FieldRow>
            <FieldRow>
              <Field>
                <FieldHeader>Количество участников</FieldHeader>
                <FieldValue>{guideData?.numberOfParticipants}</FieldValue>
              </Field>
            </FieldRow>
            <Divider />
            <FieldRow>
              <FieldHeader>Данные гостя:</FieldHeader>
            </FieldRow>
            <FieldRow>
              <Field>
                <FieldHeader>Имя</FieldHeader>
                <FieldValue>{touristData.firstName}</FieldValue>
              </Field>
              <Field>
                <FieldHeader>Фамилия</FieldHeader>
                <FieldValue>{touristData.lastName}</FieldValue>
              </Field>
            </FieldRow>
            <FieldRow>
              <Field>
                <FieldHeader>Телефон</FieldHeader>
                <FieldValue>+{touristData.phone}</FieldValue>
              </Field>
              <Field>
                <FieldHeader>Электронная почта</FieldHeader>
                <FieldValue>{touristData.email}</FieldValue>
              </Field>
            </FieldRow>
            {guideData?.numberOfChildren ? (
              <FieldRow>
                <Field>
                  <FieldHeader>Дети до 7-ми лет</FieldHeader>
                  <FieldValue>{guideData?.numberOfChildren}</FieldValue>
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
            <div>
              <BusinessCard
                photo={guideData?.guide?.avatar ?? ''}
                age={guideData?.guide.age}
                names={guideData?.guide?.firstName ?? ''}
                jobTitle="Гид"
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
