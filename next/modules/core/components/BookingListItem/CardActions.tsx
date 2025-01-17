import React, {FC, useRef, useState} from 'react';
import {
  ActionSection,
  ActionWrapper,
  Block,
  ButtonContainer,
  ButtonItem,
  ItemButton,
  ItemLink,
  ItemPrice,
  StatusAndPrice,
} from './styles';
import {BookingStatus} from '../../api/types';
import {useOutsideClick} from '../../hooks/useOutsideClick';
import useMatchMedia from '../../hooks/useMatchMedia';
import {breakpoints} from '../../styles/mediaQueries';
import {BookedCategories} from '@/modules/core/components/BookedTabHeader/bookedTab.types';

type Props = {
  status: BookingStatus;
  bookingNumber?: string;
  linkToDetailPage: string;
  onCancelClick?: (id: number) => void;
  id: number;
  isTourist: boolean;
  price: number;
  currentActiveCategory: BookedCategories;
  eventStartDateTime?: string;
  isScreenSmTab?: boolean;
  paymentResponseHandler: (id: number) => void;
};

const CardActions: FC<Props> = ({
  status,
  linkToDetailPage,
  onCancelClick,
  id,
  isTourist,
  price,
  isScreenSmTab,
  paymentResponseHandler,
}) => {
  const buttonContainerRef = useRef(null);
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const [isMenuBlockOpened, setIsMenuBlockOpened] = useState(false);

  let isCanBeCancelled = false;
  if (status === BookingStatus.WAITING_PAYMENT) {
    isCanBeCancelled = true;
  } else if (status === BookingStatus.WAITING_PARTNER) {
    isCanBeCancelled = true;
  } else if (status === BookingStatus.CANCELLED) {
    isCanBeCancelled = false;
  } else if (status === BookingStatus.PAID) {
    isCanBeCancelled = true;
  } else if (status === BookingStatus.PARTNER_ACCEPTED) {
    isCanBeCancelled = true;
  }

  useOutsideClick({
    ref: buttonContainerRef,
    handler: () => setIsMenuBlockOpened(false),
  });

  const setMenuBlockToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuBlockOpened(prev => !prev);
  };

  return isTourist ? (
    <ActionSection>
      <ActionWrapper>
        <ButtonContainer ref={buttonContainerRef} isScreenSmTab={isScreenSmTab}>
          <ItemButton onClick={setMenuBlockToggle}>...</ItemButton>
          {isMenuBlockOpened && (
            <Block>
              <ItemLink href={linkToDetailPage}>Посмотреть детали</ItemLink>
              {isCanBeCancelled && (
                <ButtonItem
                  type="button"
                  onClick={() => onCancelClick && onCancelClick(id)}>
                  Отменить бронирование
                </ButtonItem>
              )}
              {status === BookingStatus.WAITING_PAYMENT && (
                <ButtonItem
                  type="button"
                  onClick={() => paymentResponseHandler(id)}>
                  Оплатить
                </ButtonItem>
              )}
            </Block>
          )}
        </ButtonContainer>
      </ActionWrapper>
    </ActionSection>
  ) : (
    <StatusAndPrice>
      {!isScreenXs && (
        <ItemPrice $isScreenSmTab={isScreenSmTab}>{price} рублей</ItemPrice>
      )}
    </StatusAndPrice>
  );
};

export default CardActions;
