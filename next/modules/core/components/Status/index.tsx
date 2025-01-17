import React, {FC} from 'react';
import {
  StatusContainer,
  StatusIndicator,
  StatusMobileContainer,
  StatusMobileText,
  StatusText,
} from '@/modules/core/components/Status/styles';
import useMatchMedia from '../../hooks/useMatchMedia';
import {breakpoints} from '../../styles/mediaQueries';
import {BookingStatus} from '@/modules/core/api/model/booking/bookingStatus';

interface StatusProps {
  status: BookingStatus;
  bordered?: boolean;
  isTable?: boolean;
}

const Status: FC<StatusProps> = ({status, bordered, isTable}) => {
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const bookingStatusNames = new Map<BookingStatus, string>([
    [BookingStatus.WAITING_PARTNER, 'Ожидание подтверждения'],
    [BookingStatus.WAITING_PAYMENT, 'Ожидание оплаты'],
    [BookingStatus.PAID, 'Оплачено'],
    [BookingStatus.CANCELLED, 'Отменено'],
    [BookingStatus.PARTNER_ACCEPTED, 'Подтверждено партнером'],
  ]);

  return isScreenXs ? (
    <StatusMobileContainer $status={status}>
      <StatusMobileText $status={status} isTable={isTable}>
        {bookingStatusNames.get(status) ?? '-'}
      </StatusMobileText>
    </StatusMobileContainer>
  ) : (
    <StatusContainer $bordered={bordered}>
      <StatusIndicator $status={status} />
      <StatusText isTable={isTable}>
        {bookingStatusNames.get(status) ?? '-'}
      </StatusText>
    </StatusContainer>
  );
};

export default Status;
