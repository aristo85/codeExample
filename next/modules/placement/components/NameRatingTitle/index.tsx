import React, {FC} from 'react';
import {
  BookingName,
  BookingTitleBlock,
  ItemRating,
} from '@/modules/placement/components/NameRatingTitle/styles';

export interface NameRatingTitleProps {
  name: string;
  rating: number | null;
}

const NameRatingTitle: FC<NameRatingTitleProps> = ({name, rating}) => {
  return (
    <BookingTitleBlock>
      <BookingName>{name}</BookingName>
      <ItemRating
        name="read-only"
        value={rating}
        readOnly
        sx={{
          fontSize: '34px',
          color: '#F0CA2C',
        }}
        emptyIcon={<></>}
      />
    </BookingTitleBlock>
  );
};

export default NameRatingTitle;
