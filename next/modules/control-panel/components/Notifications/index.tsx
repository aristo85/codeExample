import React, {FC, useState} from 'react';
import {useGetNotificationListQuery} from '@/modules/control-panel/controlPanelApi';
import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import {
  DefaultNotificationText,
  NotificationContainer,
  NotificationHeader,
  NotificationItemsContainer,
  NotificationPagination,
  NotificationTitle,
  StyledButton,
} from '@/modules/control-panel/components/Notifications/styles';
import PaginationArrowToLeft from '@/modules/core/components/icons/PaginationArrowToLeft';
import PaginationArrowToRight from '@/modules/core/components/icons/PaginationArrowToRight';
import NotificationItem from '@/modules/control-panel/components/Notifications/NotificationItem';
import {useApproveBookingMutation} from '@/modules/booking/apiBookingSlice';
import Spinner from '@/modules/core/components/Spinner';
import {BookingCancellationModal} from '@/modules/profile/components/BookedListWithCategories/BookingCancellationModal';
import {useCancelBooking} from '@/modules/core/hooks/useCancelBooking';
import {DEFAULT_LIMIT} from '@/modules/core/constants';
import {useNotification} from '@/modules/core/hooks/useNotification';

const Notifications: FC = () => {
  const [offset, setOffset] = useState(0);
  const {data, isLoading, refetch} = useGetNotificationListQuery(
    getUrlQueries({
      limit: DEFAULT_LIMIT,
      offset,
    }),
  );
  const toast = useNotification();

  const [approve, {isLoading: isLoadingApprove}] = useApproveBookingMutation();

  const {
    isCancellationModalOpen,
    modalCancelButtonClickFunction,
    modalAcceptButtonClickFunction,
    onCancelButtonWithoutCalculatePenaltyClick,
    isLoadingCancel,
  } = useCancelBooking();

  const {data: notificationList, totalItemsCount} = data || {};

  const onLeftPaginationArrowClick = () => {
    setOffset(prev => prev - DEFAULT_LIMIT);
  };

  const onRightPaginationArrowClick = () => {
    setOffset(prev => prev + DEFAULT_LIMIT);
  };

  const isLeftButtonDisabled = offset <= 0;
  const isRightButtonDisabled =
    offset >= parseInt(totalItemsCount || '0') - DEFAULT_LIMIT;

  const onAcceptClickButtonHandler = async (bookingId: number) => {
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
    <NotificationContainer>
      <BookingCancellationModal
        isOpen={isCancellationModalOpen}
        closeButton={modalCancelButtonClickFunction}
        cancelBooking={modalAcceptButtonClickFunction}
        penaltyAmount={null}
      />
      <Spinner showSpinner={isLoadingCancel || isLoadingApprove} />
      <NotificationHeader>
        <NotificationTitle>Уведомления</NotificationTitle>
        <NotificationPagination>
          <StyledButton
            onClick={onLeftPaginationArrowClick}
            disabled={isLeftButtonDisabled}>
            <PaginationArrowToLeft />
          </StyledButton>
          <StyledButton
            onClick={onRightPaginationArrowClick}
            disabled={isRightButtonDisabled}>
            <PaginationArrowToRight />
          </StyledButton>
        </NotificationPagination>
      </NotificationHeader>
      <NotificationItemsContainer>
        {notificationList?.map(notification => {
          return (
            <NotificationItem
              {...notification}
              key={notification.id}
              onAcceptClickButtonFn={onAcceptClickButtonHandler}
              onDeclineClickButtonFn={
                onCancelButtonWithoutCalculatePenaltyClick
              }
            />
          );
        })}
        {!notificationList?.length && (
          <DefaultNotificationText>
            Здесь будут уведомления
          </DefaultNotificationText>
        )}
      </NotificationItemsContainer>
    </NotificationContainer>
  );
};

export default Notifications;
