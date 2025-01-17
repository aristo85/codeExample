import React, {FC} from 'react';
import {
  BookedItemFieldData,
  BookedItemName,
  BookedItemValue,
  GuideCard,
  GuideImage,
  GuideMainInfo,
  GuideMainSection,
  ItemPartnerStatus,
  ItemStatus,
} from './styles';
import PersonIcon from '../icons/PersonIcon';
import Link from 'next/link';
import CalendarIcon from '../icons/CalendarIcon';
import PeopleIcon from '../icons/PeopleIcon';
import CardActions from './CardActions';
import {BookingListData} from '@/modules/core/api/model/booking/bookingListData';
import dayjs from 'dayjs';
import {peopleCounter} from '@/modules/core/helpers/peopleCounter';
import {BookedCategories} from '@/modules/core/components/BookedTabHeader/bookedTab.types';
import {bookingStatusNames} from '@/modules/core/components/BookingListItem/index';

interface BookedGuideCardProps extends BookingListData {
  startDateTime?: string;
  endDateTime: string;
  bookingNumber?: string;
  linkToDetailPage: string;
  isTourist: boolean;
  clients?: string;
  onCancelClick?: (id: number) => void;
  currentActiveCategory: BookedCategories;
  isScreenSmTab: boolean;
  paymentResponseHandler: (id: number) => void;
}

const BookedGuideCard: FC<BookedGuideCardProps> = ({
  id,
  name,
  image,
  status,
  bookingNumber,
  linkToDetailPage,
  isTourist,
  onCancelClick,
  price,
  numberOfParticipants,
  numberOfChildren,
  eventStartDateTime,
  currentActiveCategory,
  isScreenSmTab,
  paymentResponseHandler,
}) => {
  const dateString = `${dayjs(eventStartDateTime)
    .utc(false)
    .format('DD MMMM YYYY, HH:mm')}`;

  return (
    <GuideCard>
      <GuideMainSection>
        <GuideImage src={image} height={88} width={88} alt={'image'} />
      </GuideMainSection>
      <GuideMainInfo>
        <BookedItemFieldData>
          <PersonIcon />

          <Link href={linkToDetailPage}>
            <BookedItemName isPartner={!isTourist}>{name}</BookedItemName>
          </Link>
        </BookedItemFieldData>
        <BookedItemFieldData>
          <CalendarIcon />
          <BookedItemValue>{dateString}</BookedItemValue>
        </BookedItemFieldData>
        <BookedItemFieldData>
          <PeopleIcon />
          <BookedItemValue>
            {peopleCounter(numberOfParticipants, numberOfChildren)}
          </BookedItemValue>
        </BookedItemFieldData>
        {isTourist ? (
          <ItemStatus type={status} showBackground={false}>
            {bookingStatusNames.get(status)}
          </ItemStatus>
        ) : (
          <ItemPartnerStatus type={status}>
            {bookingStatusNames.get(status)}
          </ItemPartnerStatus>
        )}
      </GuideMainInfo>
      <CardActions
        paymentResponseHandler={paymentResponseHandler}
        isScreenSmTab={isScreenSmTab}
        bookingNumber={bookingNumber}
        currentActiveCategory={currentActiveCategory}
        id={id}
        linkToDetailPage={linkToDetailPage}
        status={status}
        onCancelClick={onCancelClick}
        isTourist={isTourist}
        price={price}
      />
    </GuideCard>
  );
};

export default BookedGuideCard;
