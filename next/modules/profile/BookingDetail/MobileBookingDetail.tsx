import React, {FC} from 'react';
import {
  BreadcrumbsBlock,
  Field,
  FieldValue,
  FieldHeader,
  Divider,
  RoomImage,
  DetailBookingButtonsWrapper,
  CancelButton,
  DetailPageMobileWrapper,
  FieldSectionMobile,
  Title,
  BookingNumber,
  FieldMobileRow,
  FieldService,
  CopyToCBIcon,
  FieldTitle,
} from './styles';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import Status from '@/modules/core/components/Status';
import {useCopyToClipboard} from '@/modules/core/hooks/useCopyToClipboard';
import dayjs from 'dayjs';
import {BookingStatus} from '@/modules/core/api/types';
import {DetailedBookingData} from '@/modules/core/api/model/booking/detailedBookingData';
import {BookingRoomStaysData} from '@/modules/core/api/model/booking/bookingRoomStaysData';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

type Props = {
  data: DetailedBookingData;
  cancel: (id: number) => void;
  id: string;
  breadcrumbsItems: {url?: string; label: string}[];
  payHandler: (id: number) => Promise<void>;
};

const MobileBookingDetail: FC<Props> = ({
  data,
  cancel,
  id,
  breadcrumbsItems,
  payHandler,
}) => {
  const [copyAddressToClipboard] = useCopyToClipboard();
  const {bookingNumber, touristData, placementData, status, isCanBeCancelled} =
    data;
  const {name, images, partnerData, roomStays} = placementData || {};

  const roomStay: BookingRoomStaysData | undefined = roomStays?.[0];
  const mainImage: string | undefined = images?.[0];

  return (
    <DetailPageMobileWrapper>
      <BreadcrumbsBlock>
        <Breadcrumbs paths={breadcrumbsItems} />
      </BreadcrumbsBlock>
      <FieldSectionMobile>
        <Title>{name}</Title>
        <Status status={status as BookingStatus} />
        {bookingNumber && (
          <BookingNumber>№ брони {bookingNumber}</BookingNumber>
        )}
      </FieldSectionMobile>
      <FieldSectionMobile>
        <RoomImage src={mainImage} />
      </FieldSectionMobile>
      {roomStay && (
        <>
          <FieldSectionMobile>
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
          </FieldSectionMobile>
          <Divider />
          <FieldTitle style={{margin: 0}}>Данные места проживания</FieldTitle>
          <FieldSectionMobile style={{paddingBottom: 0}}>
            <Field>
              <FieldHeader>Адрес</FieldHeader>
              <FieldValue $blue>{placementData?.address}</FieldValue>
            </Field>
          </FieldSectionMobile>
          <FieldSectionMobile>
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
            <Field>
              <FieldHeader>Контактный телефон</FieldHeader>
              <FieldValue>+{partnerData?.phone}</FieldValue>
            </Field>
          </FieldSectionMobile>
        </>
      )}
      {roomStay?.services && roomStay.services.length > 0 && (
        <FieldSectionMobile>
          <Divider />
          {roomStay.services.map(el => (
            <FieldService key={el.id}>{el.name}</FieldService>
          ))}
        </FieldSectionMobile>
      )}
      {touristData.comments && (
        <FieldSectionMobile>
          <Divider />
          <FieldHeader>Комментарий</FieldHeader>
          <FieldValue style={{whiteSpace: 'pre-wrap'}}>
            {touristData.comments}
          </FieldValue>
        </FieldSectionMobile>
      )}
      <DetailBookingButtonsWrapper>
        {isCanBeCancelled && bookingNumber && (
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
    </DetailPageMobileWrapper>
  );
};

export default MobileBookingDetail;
