import styled from 'styled-components';
import ArrowRightIcon from '@/modules/core/components/icons/ArrowRightIcon';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 16px;
`;

export const ArrowLeftIcon = styled(ArrowRightIcon)`
  transform: rotate(180deg);
`;

export const CalendarButton = styled.button<{$left?: boolean}>`
  width: 48px;
  height: 48px;
  background: #8daec1;
  border-radius: 32px;
  border: none;
  padding: ${props =>
    props.$left ? '12px 14px 12px 10px' : '12px 10px 12px 14px'};
  cursor: pointer;
  align-self: center;
`;

export const CalendarButtonPlaceholder = styled.div`
  width: 48px;
  height: 48px;
  background: transparent;
  align-self: center;
`;
