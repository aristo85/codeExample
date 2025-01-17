import React, {FC} from 'react';
import {useRouter} from 'next/router';
import {
  ExcursionButtonBlock,
  ExcursionDetailWrapper,
  ExcursionHeaderBlock,
  ExcursionMapContainer,
  ExcursionStatusBlock,
  DetailBookingContentWrapper,
  DetailBookingContentItem,
  FieldRow,
  Field,
  FieldValue,
  FieldHeader,
  Divider,
} from '@/modules/profile/ExcursionDetail/styles';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import DynamicMap from '@/modules/core/components/Map';
import BusinessCard from '@/modules/core/components/BusinessCard';
import {CancelButton} from '@/modules/profile/BookingDetail/styles';
import {useCancelBooking} from '@/modules/core/hooks/useCancelBooking';
import Spinner from '@/modules/core/components/Spinner';
import {BookingCancellationModal} from '@/modules/profile/components/BookedListWithCategories/BookingCancellationModal';
import {useGetDetailedBookingDataByIdQuery} from '@/modules/profile/profileApi';
import {excursionType} from '@/modules/excursion/constants';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {CoordinateType} from '@/modules/placement/components/BookingCard';
import Status from '@/modules/core/components/Status';
import dayjs from 'dayjs';
import {peopleCounter} from '@/modules/core/helpers/peopleCounter';
import useRefetchOnPaymentStatus, {
  DataWithStatus,
} from '@/modules/core/hooks/useRefetchOnPaymentStatus';
import {travelModeSelectorValues} from '@/modules/core/constants';
import {BookingStatus} from '@/modules/core/api/types';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import usePayment from '@/modules/core/hooks/usePayment';
import {BookingType} from '@/modules/core/api/model/booking/bookingType';

const ExcursionDetailComponent: FC = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, isLoading, refetch} = useGetDetailedBookingDataByIdQuery(
    Number(id),
    {
      skip: !id,
    },
  );
  const {
    name,
    type,
    description,
    duration,
    travelMode,
    guide,
    coordinate,
    excursionTime,
    meetingPlaceDescription,
    numberOfParticipants = 1,
    numberOfChildren = 0,
    excursionDate,
    id: excursionId,
  } = data?.data?.excursionData || {};
  const isLoadingDetail = false;

  const [paymentResponseHandler] = usePayment();
  const payHandler = async (id: number) => {
    if (!id || !excursionId) return;

    void paymentResponseHandler({
      bookingId: id,
      type: BookingType.EXCURSION,
      itemId: excursionId as number,
    });
  };

  // refetch on every route, if requires
  useRefetchOnPaymentStatus(data as DataWithStatus, refetch);

  const breadcrumbsItems = [
    {url: '/profile', label: 'Личный кабинет'},
    {label: 'Забронированные экскурсии'},
    {label: name || ''},
  ];

  const {
    isCancellationModalOpen,
    modalCancelButtonClickFunction,
    modalAcceptButtonClickFunction,
    isLoadingCancel,
    onCancelButtonWithoutCalculatePenaltyClick,
  } = useCancelBooking();

  return (
    <>
      <Spinner showSpinner={isLoadingCancel || isLoadingDetail || isLoading} />
      <BookingCancellationModal
        isOpen={isCancellationModalOpen}
        closeButton={modalCancelButtonClickFunction}
        cancelBooking={modalAcceptButtonClickFunction}
        penaltyAmount={null}
      />
      {data?.data && (
        <ExcursionDetailWrapper>
          <Breadcrumbs paths={breadcrumbsItems} />
          <ExcursionHeaderBlock>
            <ExcursionMapContainer>
              <DynamicMap value={coordinate as CoordinateType} />
            </ExcursionMapContainer>
            {guide && (
              <BusinessCard
                photo={guide.guideAvatar}
                names={guide.guideName}
                jobTitle="Экскурсовод"
                phone={guide.guidePhone}
              />
            )}
          </ExcursionHeaderBlock>
          <DetailBookingContentWrapper>
            <DetailBookingContentItem $fullWidth>
              <FieldRow $reverse>
                <Field>
                  <FieldHeader>Описание</FieldHeader>
                  <FieldValue style={{whiteSpace: 'pre-wrap'}}>
                    {description}
                  </FieldValue>
                </Field>
                <ExcursionStatusBlock>
                  {data?.data.status && (
                    <Status status={data?.data.status} bordered />
                  )}
                </ExcursionStatusBlock>
              </FieldRow>
              <Divider />
              <FieldRow>
                <Field>
                  <FieldHeader>Дата</FieldHeader>
                  <FieldValue>
                    {excursionDate
                      ? dayjs(excursionDate).format('DD MMMM YYYY')
                      : null}
                  </FieldValue>
                </Field>
                <Field>
                  <FieldHeader>Время</FieldHeader>
                  <FieldValue>{excursionTime}</FieldValue>
                </Field>
                {duration && (
                  <Field>
                    <FieldHeader>Длительность</FieldHeader>
                    <FieldValue>
                      {`${duration} ${pluralizationFn(duration, [
                        'час',
                        'часа',
                        'часов',
                      ])}`}
                    </FieldValue>
                  </Field>
                )}
              </FieldRow>
              <Divider />
              <FieldRow>
                <Field>
                  <FieldHeader>Ваши места</FieldHeader>
                  <FieldValue>
                    {peopleCounter(numberOfParticipants, numberOfChildren)}
                  </FieldValue>
                </Field>
                <Field>
                  <FieldHeader>Место встречи</FieldHeader>
                  <FieldValue>{meetingPlaceDescription}</FieldValue>
                </Field>
              </FieldRow>
              <Divider />
              <FieldRow>
                <Field>
                  <FieldHeader>Формат экскурсии</FieldHeader>
                  <FieldValue>
                    {
                      excursionType.find(
                        excursionTypeItem => excursionTypeItem.value === type,
                      )?.title
                    }
                  </FieldValue>
                </Field>
                <Field>
                  <FieldHeader>Способ передвижения</FieldHeader>
                  <FieldValue>
                    {
                      travelModeSelectorValues.find(
                        mode => mode.value === travelMode,
                      )?.title
                    }
                  </FieldValue>
                </Field>
              </FieldRow>
            </DetailBookingContentItem>
          </DetailBookingContentWrapper>
          <ExcursionButtonBlock>
            {data?.data.isCanBeCancelled && (
              <CancelButton
                onClick={() =>
                  data?.data.id &&
                  onCancelButtonWithoutCalculatePenaltyClick(data?.data.id)
                }>
                Отменить бронирование
              </CancelButton>
            )}
            {data?.data.status === BookingStatus.WAITING_PAYMENT && (
              <>
                <ButtonBasic
                  style={{width: 'auto'}}
                  onClick={() => payHandler(Number(id))}>
                  Оплатить
                </ButtonBasic>
              </>
            )}
          </ExcursionButtonBlock>
        </ExcursionDetailWrapper>
      )}
    </>
  );
};

export default ExcursionDetailComponent;
