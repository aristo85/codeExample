import React, {FC} from 'react';
import {
  BookingHeaderBlock,
  BookingTitle,
} from '@/modules/placement/components/BookingHeader/styles';
import BookingMapButton from '@/modules/placement/components/BookingMapButton';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';

type BookingHeaderProps = {
  city: string;
  count: string;
  mapOpenFn: () => void;
  isMapOpened: boolean;
};

const BookingHeader: FC<BookingHeaderProps> = ({
  city,
  count,
  mapOpenFn,
  isMapOpened,
}) => {
  const isScreenMd = useMatchMedia(`(max-width: ${breakpoints.md}px)`);
  return (
    <BookingHeaderBlock>
      <BookingTitle>
        {`${city}: ${pluralizationFn(Number(count), [
          'найден',
          'найдено',
          'найдено',
        ])} ${count} ${pluralizationFn(Number(count), [
          'вариант',
          'варианта',
          'вариантов',
        ])}`}
      </BookingTitle>
      {isScreenMd && (
        <BookingMapButton
          isMapOpened={isMapOpened}
          mapOpenFn={mapOpenFn}
          isLink={false}
        />
      )}
    </BookingHeaderBlock>
  );
};

export default BookingHeader;
