import React, {FC} from 'react';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';

import {
  DetailGuideWrapper,
  DetailHeaderBlock,
  GuideHeaderContainer,
  GuideTitle,
  GuideValue,
  InformationBlock,
  InformationBlockContainer,
} from './styles';

import BusinessCard from '@/modules/core/components/BusinessCard';

import {useGetDetailedBookingDataByIdQuery} from '@/modules/profile/profileApi';
import {useRouter} from 'next/router';
import {useCancelBooking} from '@/modules/core/hooks/useCancelBooking';
import {BookingCancellationModal} from '@/modules/profile/components/BookedListWithCategories/BookingCancellationModal';
import {
  ButtonAndStatusBlock,
  CancelButton,
} from '@/modules/profile/BookingDetail/styles';
import Spinner from '@/modules/core/components/Spinner';
import {peopleCounter} from '@/modules/core/helpers/peopleCounter';
import BookingImageMap, {
  Location,
} from '@/modules/placement/components/BookingImagesMap';
import dayjs from 'dayjs';
import Status from '@/modules/core/components/Status';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import useRefetchOnPaymentStatus, {
  DataWithStatus,
} from '@/modules/core/hooks/useRefetchOnPaymentStatus';
import usePayment from '@/modules/core/hooks/usePayment';
import {BookingType} from '@/modules/core/api/model/booking/bookingType';
import {BookingStatus} from '@/modules/core/api/types';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const GuideDetailComponentTourist: FC = () => {
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
    description,
    duration,
    guide,
    numberOfParticipants,
    numberOfChildren,
    images,
    guideDate,
    guideTime,
    id: guideId,
  } = data?.data.guideData || {};

  // refetch on every route, if requires
  useRefetchOnPaymentStatus(data as DataWithStatus, refetch);

  const {
    isCancellationModalOpen,
    modalCancelButtonClickFunction,
    modalAcceptButtonClickFunction,
    isLoadingCancel,
    onCancelButtonWithoutCalculatePenaltyClick,
  } = useCancelBooking();

  const [paymentResponseHandler] = usePayment();
  const payHandler = async (id: number) => {
    if (!id || !guideId) return;

    void paymentResponseHandler({
      bookingId: id,
      type: BookingType.GUIDE,
      itemId: guideId as number,
    });
  };

  const breadcrumbsItems = [
    {url: '/', label: 'Главная'},
    {url: `/control-panel`, label: 'Бронирования'},
    {label: `${name}`},
  ];

  return (
    <>
      <Spinner showSpinner={isLoadingCancel || isLoading} />

      <BookingCancellationModal
        isOpen={isCancellationModalOpen}
        closeButton={modalCancelButtonClickFunction}
        cancelBooking={modalAcceptButtonClickFunction}
        penaltyAmount={null}
      />

      {data?.data && (
        <DetailGuideWrapper>
          <Breadcrumbs paths={breadcrumbsItems} />
          <DetailHeaderBlock>
            <BusinessCard
              photo={guide?.avatar || ''}
              names={guide?.firstName || ''}
              jobTitle="Гид"
              phone={guide?.phone || ''}
            />
            <GuideHeaderContainer>
              <InformationBlockContainer>
                <InformationBlock>
                  <GuideTitle>Время и дата</GuideTitle>
                  <GuideValue>
                    {dayjs(guideDate).format('DD MMMM YYYY')}, {guideTime}
                  </GuideValue>
                </InformationBlock>
                <InformationBlock>
                  <GuideTitle>Длительность</GuideTitle>
                  <GuideValue>
                    {duration &&
                      `${duration} ${pluralizationFn(duration, [
                        'час',
                        'часа',
                        'часов',
                      ])}`}
                  </GuideValue>
                </InformationBlock>
                <InformationBlock>
                  <GuideTitle>Ваши места</GuideTitle>
                  <GuideValue>
                    {peopleCounter(numberOfParticipants, numberOfChildren)}
                  </GuideValue>
                </InformationBlock>
              </InformationBlockContainer>
              <ButtonAndStatusBlock>
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
                  <ButtonBasic
                    style={{width: 'auto'}}
                    onClick={() => payHandler(Number(id))}>
                    Оплатить
                  </ButtonBasic>
                )}
                {data?.data.status && (
                  <Status status={data?.data.status} bordered />
                )}
              </ButtonAndStatusBlock>
            </GuideHeaderContainer>
          </DetailHeaderBlock>

          <InformationBlock>
            <GuideTitle>Описание</GuideTitle>
            <GuideValue style={{whiteSpace: 'pre-wrap'}}>
              {description}
            </GuideValue>
          </InformationBlock>
          {images && images.length > 0 && (
            <BookingImageMap location={Location.GUIDE} images={images} />
          )}
        </DetailGuideWrapper>
      )}
    </>
  );
};
