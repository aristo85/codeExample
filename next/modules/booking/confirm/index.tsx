import React, {FC, useState} from 'react';

import {useRouter} from 'next/router';
import {
  useApproveBookingWithTokenMutation,
  useCancelBookingWithTokenMutation,
  useGetBookingInfoByIdQuery,
} from '@/modules/booking/apiBookingSlice';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import {
  ButtonsConfirmContainer,
  ConfirmHeaderTitle,
  ConfirmInfoContainer,
  ConfirmWrapper,
  FieldHeader,
  FieldValue,
  InformationBlock,
} from '@/modules/booking/confirm/styles';
import Spinner from '@/modules/core/components/Spinner';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {BookingCancellationModal} from '@/modules/profile/components/BookedListWithCategories/BookingCancellationModal';
import {useNotification} from '@/modules/core/hooks/useNotification';
import {BookingStatus} from '@/modules/core/api/types';
import {ItemStatus} from '@/modules/core/components/BookingListItem/styles';
import {bookingStatusNames} from '@/modules/core/components/BookingListItem';

export const BookingConfirm: FC = () => {
  const [isCancellationModalOpen, setIsCancellationModalOpen] =
    useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const toast = useNotification();

  const router = useRouter();
  const {id, token} = router.query;

  const {data, isLoading, isError, refetch} = useGetBookingInfoByIdQuery(
    {
      bookingId: Number(id),
      token: token as string,
    },
    {
      skip: !id || !token,
    },
  );

  const [cancel, {isLoading: isCancellationLoading}] =
    useCancelBookingWithTokenMutation();

  const [approve, {isLoading: isApprovalLoading}] =
    useApproveBookingWithTokenMutation();

  const {
    name,
    date,
    time,
    numberOfParticipants,
    numberOfChildren,
    bookingNumber,
    duration,
    status,
  } = data?.data || {};

  const modalAcceptButtonClickFunction = async () => {
    if (!id) return;
    try {
      const response = await cancel({
        bookingId: Number(id),
        token: token as string,
      }).unwrap();
      if (response.success) {
        setSuccessMessage('Бронирование отменено');
        toast('Вы успешно отменили бронирование', 'success');
      }
    } catch (error: any) {
      setSuccessMessage('');
      console.error(error);
    } finally {
      refetch();
      setIsCancellationModalOpen(false);
    }
  };
  const modalCancelButtonClickFunction = () => {
    setIsCancellationModalOpen(false);
  };

  const approveButtonClickHandler = async () => {
    if (!id) return;
    try {
      const response = await approve({
        bookingId: Number(id),
        token: token as string,
      }).unwrap();
      if (response.success) {
        setSuccessMessage('Бронирование подтверждено');
        toast('Вы успешно подтвердили бронирование', 'success');
      }
    } catch (error: any) {
      setSuccessMessage('');
      console.error(error);
    } finally {
      refetch();
      setIsCancellationModalOpen(false);
    }
  };

  if (isError) {
    return (
      <ConfirmWrapper>
        <ConfirmHeaderTitle>Бронирование не найдено</ConfirmHeaderTitle>
      </ConfirmWrapper>
    );
  }

  let showingMessageTitle;
  switch (status) {
    case BookingStatus.WAITING_PARTNER:
      showingMessageTitle = 'Подтвердите бронирование';
      break;
    case BookingStatus.CANCELLED:
      showingMessageTitle = 'Бронирование отменено';
      break;
    case BookingStatus.PAID:
    case BookingStatus.PARTNER_ACCEPTED:
      showingMessageTitle = 'Бронирование подтверждено';
      break;
    case BookingStatus.WAITING_PAYMENT:
      showingMessageTitle = 'Ожидается оплата бронирования';
      break;
    default:
      showingMessageTitle = '';
  }

  return (
    <ConfirmWrapper>
      <Spinner
        showSpinner={isLoading || isCancellationLoading || isApprovalLoading}
      />
      <BookingCancellationModal
        isOpen={isCancellationModalOpen}
        closeButton={modalCancelButtonClickFunction}
        cancelBooking={modalAcceptButtonClickFunction}
        penaltyAmount={null}
      />
      <ConfirmHeaderTitle>
        {successMessage ? successMessage : showingMessageTitle}
      </ConfirmHeaderTitle>
      <ConfirmInfoContainer>
        {bookingNumber && (
          <InformationBlock>
            <FieldHeader>Номер брони:</FieldHeader>
            <FieldValue>{bookingNumber}</FieldValue>
          </InformationBlock>
        )}
        {name && (
          <InformationBlock>
            <FieldHeader>Название:</FieldHeader>
            <FieldValue>{name}</FieldValue>
          </InformationBlock>
        )}
        {date && (
          <InformationBlock>
            <FieldHeader>Дата:</FieldHeader>
            <FieldValue>{date}</FieldValue>
          </InformationBlock>
        )}
        {time && (
          <InformationBlock>
            <FieldHeader>Время:</FieldHeader>
            <FieldValue>{time}</FieldValue>
          </InformationBlock>
        )}
        {numberOfParticipants && (
          <InformationBlock>
            <FieldHeader>Количество участников:</FieldHeader>
            <FieldValue>{numberOfParticipants}</FieldValue>
          </InformationBlock>
        )}
        {numberOfChildren !== undefined && (
          <InformationBlock>
            <FieldHeader>Количество детей младше 7 лет:</FieldHeader>
            <FieldValue>{numberOfChildren}</FieldValue>
          </InformationBlock>
        )}
        {duration && (
          <InformationBlock>
            <FieldHeader>Продолжительность:</FieldHeader>
            <FieldValue>{`${duration} ${pluralizationFn(duration, [
              'час',
              'часа',
              'часов',
            ])}`}</FieldValue>
          </InformationBlock>
        )}
      </ConfirmInfoContainer>
      <ButtonsConfirmContainer>
        {data?.data && status !== BookingStatus.CANCELLED ? (
          <>
            {status !== BookingStatus.PARTNER_ACCEPTED &&
              status !== BookingStatus.PAID && (
                <ButtonBasic onClick={() => approveButtonClickHandler()}>
                  Подтвердить
                </ButtonBasic>
              )}
            <ButtonBasic dark onClick={() => setIsCancellationModalOpen(true)}>
              Отклонить
            </ButtonBasic>
          </>
        ) : (
          <>
            {status && (
              <ItemStatus
                style={{fontSize: '22px'}}
                type={status}
                showBackground={false}>
                {bookingStatusNames.get(status)}
              </ItemStatus>
            )}
          </>
        )}
      </ButtonsConfirmContainer>
    </ConfirmWrapper>
  );
};
