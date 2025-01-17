import styled, {css} from 'styled-components';
import {BookingStatus} from '@/modules/core/api/model/booking/bookingStatus';

const statusColor = (status: BookingStatus, dark: boolean) =>
  status === BookingStatus.PAID
    ? dark
      ? '#6fcf97'
      : 'rgb(111, 207, 151, 0.3)'
    : status === BookingStatus.CANCELLED
    ? dark
      ? '#de3730'
      : 'rgb(222, 55, 48, 0.3)'
    : status === BookingStatus.WAITING_PAYMENT
    ? dark
      ? '#f29200'
      : 'rgb(242, 146, 0, 0.3)'
    : status === BookingStatus.WAITING_PARTNER ||
      status === BookingStatus.PARTNER_ACCEPTED
    ? dark
      ? '#f29200'
      : 'rgb(5, 49, 118, 0.3)'
    : 'inherit';

export const StatusContainer = styled.div<{$bordered?: boolean}>`
  min-width: 120px;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 8px;
  ${({$bordered}) =>
    $bordered &&
    css`
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #1d7abd;
    `};
`;

export const StatusIndicator = styled.div<{$status: BookingStatus}>`
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background-color: ${({$status}) => statusColor($status, true)};
`;

export const StatusText = styled.span<{isTable?: boolean}>`
  ${({theme, isTable}) => css`
    font-family: ${isTable
      ? theme.font.family.gothicBook
      : theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
  `};
  line-height: normal;
  vertical-align: middle;
`;

export const StatusMobileContainer = styled.div<{$status: BookingStatus}>`
  width: 100px;
  height: 34px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({$status}) => statusColor($status, false)};
`;

export const StatusMobileText = styled.p<{
  $status: BookingStatus;
  isTable?: boolean;
}>`
  font-size: 11px;
  text-align: center;
  ${({theme, $status, isTable}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-weight: ${isTable ? 400 : 700};
    color: ${statusColor($status, true)};
  `};
`;
