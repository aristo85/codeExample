import React from 'react';
import {
  IconContainer,
  NotificationButton,
  NotificationButtonsBlock,
  NotificationItemContainer,
  NotificationLink,
  NotificationMainContent,
  NotificationMessage,
  NotificationMessageContainer,
  NotificationWrapper,
} from '@/modules/control-panel/components/Notifications/NotificationItem/styles';
import NotificationIcon from '@/modules/core/components/icons/NotificationIcon';
import {
  BookingMeta,
  ExcursionMeta,
  GuideMeta,
  Notification,
  NotificationType,
} from '@/modules/control-panel/components/Notifications/NotificationItem/types';
import {BookingStatus} from '@/modules/core/api/types';

const notificationIconMap = {
  [NotificationType.BOOKING]: <NotificationIcon />,
  [NotificationType.BOOKING_EXCURSION]: <NotificationIcon />,
  [NotificationType.BOOKING_GUIDE]: <NotificationIcon />,
};

interface NotificationItemProps<Meta> extends Notification<Meta> {
  onAcceptClickButtonFn: (id: number) => void;
  onDeclineClickButtonFn: (id: number) => void;
}
const NotificationItem = <Meta,>({
  type,
  message,
  meta,
  onAcceptClickButtonFn,
  onDeclineClickButtonFn,
}: NotificationItemProps<Meta>) => {
  const Icon = <IconContainer>{notificationIconMap[type]}</IconContainer>;

  const notificationBookingContent = (meta: BookingMeta) => {
    return (
      <NotificationWrapper>
        <NotificationMainContent>
          <NotificationMessageContainer>
            <NotificationMessage>
              {`${message} `}
              <NotificationLink
                href={`/control-panel/booking/placement/${meta.bookingId}`}>
                {meta.bookingId}
              </NotificationLink>
              {`. Объект размещения - ${meta.placementName}`}
            </NotificationMessage>
          </NotificationMessageContainer>
        </NotificationMainContent>
        {meta.status == BookingStatus.WAITING_PARTNER &&
          meta?.bookingNumber && (
            <NotificationButtonsBlock>
              <NotificationButton
                dark
                onClick={() => onAcceptClickButtonFn(meta.bookingId)}>
                Подтвердить
              </NotificationButton>
              <NotificationButton
                onClick={() => onDeclineClickButtonFn(meta.bookingId)}>
                Отменить
              </NotificationButton>
            </NotificationButtonsBlock>
          )}
      </NotificationWrapper>
    );
  };

  const notificationBookingGuideContent = (meta: GuideMeta) => {
    return (
      <NotificationWrapper>
        <NotificationMainContent>
          <NotificationMessageContainer>
            <NotificationMessage>
              {`${message} `}
              <NotificationLink
                href={`/control-panel/booking/guide/${meta.bookingId}`}>
                {meta.bookingId}
              </NotificationLink>
              {`. Гид - ${meta.guideName}`}
            </NotificationMessage>
          </NotificationMessageContainer>
        </NotificationMainContent>
        {meta.status === BookingStatus.WAITING_PARTNER && (
          <NotificationButtonsBlock>
            <NotificationButton
              dark
              onClick={() => onAcceptClickButtonFn(meta.bookingId)}>
              Подтвердить
            </NotificationButton>
            <NotificationButton
              onClick={() => onDeclineClickButtonFn(meta.bookingId)}>
              Отменить
            </NotificationButton>
          </NotificationButtonsBlock>
        )}
      </NotificationWrapper>
    );
  };
  const notificationBookingExcursionContent = (meta: ExcursionMeta) => {
    return (
      <NotificationWrapper>
        <NotificationMainContent>
          <NotificationMessageContainer>
            <NotificationMessage>
              {`${message} `}
              <NotificationLink
                href={`/control-panel/booking/excursion/${meta.bookingId}`}>
                {meta.bookingId}
              </NotificationLink>
              {`. Экскурсия - ${meta.excursionName}`}
            </NotificationMessage>
          </NotificationMessageContainer>
        </NotificationMainContent>
        {meta.status === BookingStatus.WAITING_PARTNER && (
          <NotificationButtonsBlock>
            <NotificationButton
              dark
              onClick={() => onAcceptClickButtonFn(meta.bookingId)}>
              Подтвердить
            </NotificationButton>
            <NotificationButton
              onClick={() => onDeclineClickButtonFn(meta.bookingId)}>
              Отменить
            </NotificationButton>
          </NotificationButtonsBlock>
        )}
      </NotificationWrapper>
    );
  };

  const notificationContent =
    type === NotificationType.BOOKING
      ? notificationBookingContent(meta as BookingMeta)
      : type === NotificationType.BOOKING_GUIDE
      ? notificationBookingGuideContent(meta as GuideMeta)
      : type === NotificationType.BOOKING_EXCURSION
      ? notificationBookingExcursionContent(meta as ExcursionMeta)
      : null;

  return (
    <NotificationItemContainer>
      {Icon}
      {notificationContent}
    </NotificationItemContainer>
  );
};

export default NotificationItem;
