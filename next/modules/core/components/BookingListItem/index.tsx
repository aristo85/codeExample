import React, {FC} from 'react';
import {
  BookedItemContainer,
  BookedItemFieldData,
  BookedItemImage,
  BookedItemImageContainer,
  BookedItemInformation,
  BookedItemName,
  BookedItemValue,
  BookedMainBlock,
  BookedMainBlockWrap,
  FullNameString,
  ItemPartnerStatus,
  ItemStatus,
} from './styles';
import useMatchMedia from '../../hooks/useMatchMedia';
import {breakpoints} from '../../styles/mediaQueries';
import HotelIcon from '@/modules/core/components/icons/HotelIcon';
import Link from 'next/link';
import CalendarIcon from '@/modules/core/components/icons/CalendarIcon';
import ClockIcon from '@/modules/core/components/icons/ClockIcon';
import useGetDaysAndNights from '../../hooks/useGetDaysAndNights';
import {BookingStatus} from '../../api/types';
import PersonIcon from '../icons/PersonIcon';
import CardActions from './CardActions';
import {BookingListData} from '@/modules/core/api/model/booking/bookingListData';
import PeopleIcon from '@/modules/core/components/icons/PeopleIcon';
import dayjs from 'dayjs';
import {peopleCounter} from '@/modules/core/helpers/peopleCounter';
import {BookedCategories} from '@/modules/core/components/BookedTabHeader/bookedTab.types';
import {useRouter} from 'next/router';
import usePayment from '@/modules/core/hooks/usePayment';

export const bookingStatusNames = new Map<BookingStatus, string>([
  [BookingStatus.WAITING_PARTNER, 'Ожидание подтверждения'],
  [BookingStatus.WAITING_PAYMENT, 'Ожидание оплаты'],
  [BookingStatus.PARTNER_ACCEPTED, 'Подтверждено партнером'],
  [BookingStatus.PAID, 'Оплачено'],
  [BookingStatus.CANCELLED, 'Отменено'],
]);

export enum ServiceType {
  PLACEMENT = 'PLACEMENT',
  EXCURSION = 'EXCURSION',
  GUIDE = 'GUIDE',
}

export interface BookedItemProps extends BookingListData {
  title: string;
  names: string;
  bookingNumber?: string;
  linkToDetailPage: string;
  isTourist: boolean;
  onCancelClick?: (id: number) => void;
  currentActiveCategory: BookedCategories;
}

const BookingListItem: FC<BookedItemProps> = props => {
  const {
    title,
    image,
    departureDateTime,
    arrivalDateTime,
    names,
    linkToDetailPage,
    isTourist,
    type,
    numberOfChildren,
    numberOfParticipants,
    eventStartDateTime,
    status,
    guideData,
    placementData,
    excursionData,
  } = props;
  const router = useRouter();
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const isScreenSmTab =
    useMatchMedia(`(max-width: ${breakpoints.smTab}px)`) ||
    router.pathname === '/profile' ||
    router.pathname === '/control-panel';
  const isPlacement = type === ServiceType.PLACEMENT;
  const isGuide = type === ServiceType.GUIDE;
  const isExcursion = type === ServiceType.EXCURSION;

  const {daysString, dateRangeString, datesWithTime} = useGetDaysAndNights({
    arrivalDate: arrivalDateTime || null,
    departureDate: departureDateTime || null,
  });

  const [paymentResponseHandler] = usePayment();

  const payHandler = async (id: number) => {
    let itemId: number | null = null;
    switch (type) {
      case 'EXCURSION':
        itemId = excursionData?.id || null;
        break;
      case 'PLACEMENT':
        itemId = placementData?.id || null;
        break;
      case 'GUIDE':
        itemId = guideData?.id || null;
        break;
    }
    if (itemId) {
      void paymentResponseHandler({bookingId: id, type, itemId});
    }
  };

  return (
    <BookedItemContainer>
      <BookedItemImageContainer>
        {!isScreenXs && (
          <BookedItemImage src={image} height={88} width={88} alt={'image'} />
        )}
        {isScreenXs && (
          <BookedItemImage
            src={image}
            layout="fill"
            objectFit="cover"
            alt={'image'}
          />
        )}
      </BookedItemImageContainer>
      <BookedMainBlockWrap>
        <BookedMainBlock>
          <BookedItemInformation>
            <BookedItemFieldData>
              {isGuide ? <PersonIcon /> : <HotelIcon />}
              {!isTourist && (
                <Link href={linkToDetailPage}>
                  <BookedItemName isPartner={!isTourist}>
                    {title}
                  </BookedItemName>
                </Link>
              )}
              {isTourist && (
                <Link href={linkToDetailPage}>
                  <BookedItemName isPartner={!isTourist}>
                    {title}
                  </BookedItemName>
                </Link>
              )}
            </BookedItemFieldData>
            {isTourist && (
              <>
                <BookedItemFieldData>
                  <CalendarIcon />
                  <BookedItemValue>
                    {isExcursion &&
                      eventStartDateTime &&
                      `${dayjs(eventStartDateTime)
                        .utc(false)
                        .format('DD MMMM YYYY')}${
                        ', ' +
                        dayjs(eventStartDateTime).utc(false).format('HH:mm')
                      }`}
                    {isPlacement &&
                      `${dateRangeString}${
                        isPlacement
                          ? ', ' + datesWithTime.arrivalDate?.format('HH:mm')
                          : ''
                      }`}
                    {isGuide &&
                      `${dayjs(eventStartDateTime)
                        .utc(false)
                        .format('DD MMMM YYYY, HH:mm')}`}
                  </BookedItemValue>
                </BookedItemFieldData>
                {isPlacement ? (
                  <BookedItemFieldData>
                    <ClockIcon />
                    <BookedItemValue>{daysString}</BookedItemValue>
                  </BookedItemFieldData>
                ) : (
                  <BookedItemFieldData>
                    <PeopleIcon />
                    <BookedItemValue>
                      {peopleCounter(numberOfParticipants, numberOfChildren)}
                    </BookedItemValue>
                  </BookedItemFieldData>
                )}
              </>
            )}
            {!isTourist && (
              <>
                {!isGuide && (
                  <BookedItemFieldData>
                    <PersonIcon />
                    <FullNameString>{names}</FullNameString>
                  </BookedItemFieldData>
                )}
                <BookedItemFieldData>
                  <CalendarIcon />
                  <BookedItemValue>
                    {isPlacement &&
                      `${dateRangeString}${
                        type !== ServiceType.PLACEMENT
                          ? ', ' + datesWithTime.arrivalDate?.format('HH:mm')
                          : ''
                      }`}
                    {isExcursion &&
                      eventStartDateTime &&
                      `${dayjs(eventStartDateTime)
                        .utc(false)
                        .format('DD MMMM YYYY')}${
                        ', ' +
                        dayjs(eventStartDateTime).utc(false).format('HH:mm')
                      }`}
                    {isGuide &&
                      `${dayjs(eventStartDateTime)
                        .utc(false)
                        .format('DD MMMM YYYY, HH:mm')}`}
                  </BookedItemValue>
                </BookedItemFieldData>
                {isGuide && (
                  <BookedItemFieldData>
                    <PeopleIcon />
                    <BookedItemValue>
                      {peopleCounter(numberOfParticipants, numberOfChildren)}
                    </BookedItemValue>
                  </BookedItemFieldData>
                )}
              </>
            )}
            {isTourist ? (
              <ItemStatus type={status} showBackground={false}>
                {bookingStatusNames.get(status)}
              </ItemStatus>
            ) : (
              <ItemPartnerStatus type={status}>
                {bookingStatusNames.get(status)}
              </ItemPartnerStatus>
            )}
          </BookedItemInformation>
        </BookedMainBlock>
        <CardActions
          {...props}
          paymentResponseHandler={payHandler}
          isScreenSmTab={isScreenSmTab}
        />
      </BookedMainBlockWrap>
    </BookedItemContainer>
  );
  // );
};

export default BookingListItem;
