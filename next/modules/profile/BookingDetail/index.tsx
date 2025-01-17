import React, {FC} from 'react';
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
  FieldService,
  FieldMobileRow,
  CopyToCBIcon,
  FieldTitle,
} from './styles';
import dayjs from 'dayjs';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import Status from '@/modules/core/components/Status';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {useCopyToClipboard} from '@/modules/core/hooks/useCopyToClipboard';
import MobileBookingDetail from './MobileBookingDetail';
import {DetailedBookingData} from '@/modules/core/api/model/booking/detailedBookingData';
import {BookingRoomStaysData} from '@/modules/core/api/model/booking/bookingRoomStaysData';
import {BookingStatus} from '@/modules/core/api/types';
import usePayment from '@/modules/core/hooks/usePayment';
import {BookingType} from '@/modules/core/api/model/booking/bookingType';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

type Props = {
  data: DetailedBookingData;
  cancel: (id: number) => void;
  approve: ({id}: {id: number}) => void;
  id: string;
};

const BookingDetailComp: FC<Props> = ({data, cancel, approve, id}) => {
  const isScreenMd = useMatchMedia(`(max-width: ${breakpoints.md}px)`);
  const {bookingNumber, touristData, placementData, status, isCanBeCancelled} =
    data;
  const [copyAddressToClipboard] = useCopyToClipboard();
  const {name, images, partnerData, roomStays} = placementData || {};
  const breadcrumbsItems = [
    {url: '/profile', label: 'Профиль'},
    {url: '/profile/booking', label: 'Бронирование'},
    {
      url: `profile/booking/${id}`,
      label: name || '',
    },
  ];

  const [paymentResponseHandler] = usePayment();
  const payHandler = async (id: number) => {
    if (!id || !data.placementData?.id) return;

    void paymentResponseHandler({
      bookingId: id,
      type: BookingType.PLACEMENT,
      itemId: data.placementData?.id as number,
    });
  };

  const roomStay: BookingRoomStaysData | undefined = roomStays?.[0];
  const mainImage: string | undefined = images?.[0];

  return isScreenMd ? (
    <MobileBookingDetail
      data={data}
      cancel={cancel}
      id={id}
      breadcrumbsItems={breadcrumbsItems}
      payHandler={payHandler}
    />
  ) : (
    <DetailBookingPageWrapper>
      <DetailBookingContentWrapper>
        <DetailBookingContentItem $fullWidth>
          <BreadcrumbsBlock>
            <Breadcrumbs paths={breadcrumbsItems} />
          </BreadcrumbsBlock>
          <DetailBookingPageHeader>
            <span>
              <h2>{name}</h2>
              <span>№ брони {bookingNumber}</span>
            </span>
            <Status status={status as BookingStatus} />
          </DetailBookingPageHeader>

          {roomStay && (
            <>
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
                    {roomStay?.guestCount?.childAges &&
                    roomStay?.guestCount?.childAges?.length > 0
                      ? `, Детей: ${roomStay?.guestCount?.childAges.length}`
                      : ''}
                  </FieldValue>
                </Field>
              </FieldRow>
              <Divider />
              <FieldTitle>Данные места проживания</FieldTitle>
              <FieldRow style={{paddingBottom: 0}}>
                <Field>
                  <FieldHeader>Адрес</FieldHeader>
                  <FieldValue $blue>{placementData?.address}</FieldValue>
                </Field>
              </FieldRow>
              <FieldRow>
                <Field>
                  <FieldHeader>Контактный телефон</FieldHeader>
                  <FieldValue>+{partnerData?.phone}</FieldValue>
                </Field>
                <Field>
                  <FieldHeader>Электронная почта</FieldHeader>
                  <FieldMobileRow>
                    <FieldValue>{partnerData?.email}</FieldValue>
                    <CopyToCBIcon
                      onClick={() =>
                        copyAddressToClipboard(partnerData?.email || '')
                      }
                    />
                  </FieldMobileRow>
                </Field>
              </FieldRow>
            </>
          )}
          {roomStay?.services && roomStay?.services?.length > 0 && (
            <Field>
              <Divider />
              {roomStay.services.map(el => (
                <FieldService key={el.id}>{el.name}</FieldService>
              ))}
            </Field>
          )}
          {touristData.comments && (
            <Field>
              <Divider />
              <FieldHeader>Комментарий</FieldHeader>
              <FieldValue style={{whiteSpace: 'pre-wrap'}}>
                {touristData.comments}
              </FieldValue>
            </Field>
          )}
        </DetailBookingContentItem>

        <DetailBookingContentItem>
          <RoomImage src={mainImage} />
        </DetailBookingContentItem>
      </DetailBookingContentWrapper>
      <DetailBookingButtonsWrapper>
        {isCanBeCancelled && (
          <>
            <CancelButton onClick={() => cancel(+id)}>
              Отменить бронирование
            </CancelButton>
          </>
        )}
        {status === BookingStatus.WAITING_PAYMENT && (
          <ButtonBasic
            style={{width: 'auto'}}
            onClick={() => payHandler(Number(id))}>
            Оплатить
          </ButtonBasic>
        )}
      </DetailBookingButtonsWrapper>
    </DetailBookingPageWrapper>
  );
};

export default BookingDetailComp;
