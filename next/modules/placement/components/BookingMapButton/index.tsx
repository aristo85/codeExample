import React, {FC} from 'react';
import {
  BookingButtonWrapper,
  BookingMapImage,
  BookingMapLinkButton,
} from '@/modules/placement/components/BookingMapButton/styles';
import Link from 'next/link';

export interface BookingMapButtonProps {
  isMapOpened: boolean;
  mapOpenFn: () => void;
  isLink: boolean;
  link?: string;
  isPlacement?: boolean;
  isBookingDetail?: boolean;
}

const BookingMapButton: FC<BookingMapButtonProps> = ({
  mapOpenFn,
  isMapOpened,
  isLink,
  link,
  isPlacement,
  isBookingDetail,
}) => {
  if (isLink) {
    return (
      <BookingButtonWrapper isBookingDetail={!!isBookingDetail}>
        <BookingMapImage
          src={'/images/map-background2.png'}
          layout="fill"
          alt={'map-image'}
        />
        {link && (
          <Link href={link}>
            <BookingMapLinkButton isBookingDetail={!!isBookingDetail}>
              Показать на карте
            </BookingMapLinkButton>
          </Link>
        )}
        {!link && (
          <BookingMapLinkButton>Показать на карте</BookingMapLinkButton>
        )}
      </BookingButtonWrapper>
    );
  }

  return (
    <BookingButtonWrapper
      onClick={() => mapOpenFn()}
      isPlacement={!!isPlacement}>
      {!isMapOpened && (
        <BookingMapImage
          src={'/images/map-background2.png'}
          layout="fill"
          alt={'map-image'}
        />
      )}
      <BookingMapLinkButton
        isMapOpened={isMapOpened}
        isPlacement={!!isPlacement}>
        {isMapOpened ? 'Списком' : 'Показать на карте'}
      </BookingMapLinkButton>
    </BookingButtonWrapper>
  );
};

export default BookingMapButton;
