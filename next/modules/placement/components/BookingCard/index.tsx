import React, {FC, useEffect, useRef, useState} from 'react';
import {
  BookingAdditionalData,
  BookingButtonLink,
  BookingCardImage,
  BookingCardImageBlock,
  BookingCardInformationBlock,
  BookingCardWrapper,
  BookingDescription,
  BookingHighlightedPrice,
  BookingPrice,
  BookingPriceBlock,
  CardArrowRight,
  ContentWrapper,
  DividingLine,
} from '@/modules/placement/components/BookingCard/styles';
import NameRatingTitle from '@/modules/placement/components/NameRatingTitle';
import {BookingAddress} from '@/modules/placement/styles';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {
  CurrencyEnum,
  currencyNameFormatter,
} from '@/modules/placement/constants';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';

export type BookingRatePlans = {
  name: string;
  description?: string;
  currency: string;
};

export type PlacementType = 'HOTEL' | 'APARTMENTS' | 'GUEST_HOUSE' | 'OTHER';

export type CoordinateType = {
  lat: number;
  lng: number;
};

export type PlacementExtraData = {
  prices: {
    minPrice: number;
    maxPrice: number;
    currencyCode: CurrencyEnum;
  };
  numOfDay: number;
  numOfAdult: number;
  numOfChildren: number;
};

export type RoomExtraDataList = {
  roomId: number;
  price: {
    price: number;
    taxAmount: number;
    daysCount: number;
    pricePerDay: number;
    totalPrice: number;
  };
  currencyCode: string;
  stayDates: {
    arrivalDateTime: string;
    departureDateTime: string;
  };
  fullPlacementsName: string;
};

export interface BookingCardProps {
  avatar: string;
  name: string;
  rating: number | null;
  address: string;
  description?: string;
  placesToStay?: number;
  city: string;
  cityId: number;
  specialOffer: boolean;
  id: number;
  ratePlans: BookingRatePlans;
  placementType: PlacementType;
  coordinate: CoordinateType;
  isHide: boolean;
  extraData: {
    placementExtraData: PlacementExtraData;
    roomExtraDataList: RoomExtraDataList[];
  };
  link: string;
  onButtonClick: () => void;
}

const BookingCard: FC<BookingCardProps> = ({
  avatar,
  name,
  rating,
  address,
  description,
  extraData,
  link,
  onButtonClick,
}) => {
  const isScreen400 = useMatchMedia(`(max-width: 400px)`);
  const [descriptionLines, setDescriptionLines] = useState(3);
  const divRef = useRef<HTMLDivElement>(null);
  const {numOfAdult, numOfChildren, numOfDay, prices} =
    extraData?.placementExtraData ?? {};

  const numOfDayLabel = pluralizationFn(numOfDay, ['ночь', 'ночи', 'ночей']);

  const numOfAdultLabel = pluralizationFn(numOfAdult, [
    'взрослый',
    'взрослых',
    'взрослых',
  ]);

  const numOfChildrenLabel =
    numOfChildren > 0
      ? `, ${numOfChildren} ${pluralizationFn(numOfChildren, [
          'ребенок',
          'ребенка',
          'детей',
        ])}`
      : '';

  const informationString = `${numOfDay} ${numOfDayLabel}, ${numOfAdult} ${numOfAdultLabel}${numOfChildrenLabel}`;

  const isOnlyMinPrice =
    !prices.maxPrice || prices.minPrice === prices.maxPrice;

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.getBoundingClientRect().height;
      const linesHeight = 250 - height;
      const lines = Math.floor(linesHeight / 20);
      lines > 3 && setDescriptionLines(lines);
    }
  }, []);

  return (
    <BookingCardWrapper href={link} passHref onClick={onButtonClick}>
      <BookingCardImageBlock>
        <BookingCardImage src={avatar} layout={'fill'} alt={'image'} />
      </BookingCardImageBlock>
      <BookingCardInformationBlock>
        <ContentWrapper ref={divRef}>
          <NameRatingTitle name={name} rating={rating} />
          <BookingAddress>{address}</BookingAddress>
          <DividingLine />
          <BookingPriceBlock>
            <BookingPrice>
              Стоимость номера от
              <BookingHighlightedPrice>
                {prices?.minPrice}
              </BookingHighlightedPrice>
              {currencyNameFormatter(
                prices?.minPrice,
                isOnlyMinPrice ? prices?.currencyCode : undefined,
              )}
              {!isOnlyMinPrice ? (
                <>
                  &nbsp;до
                  <BookingHighlightedPrice>
                    {prices?.maxPrice}
                  </BookingHighlightedPrice>
                  {currencyNameFormatter(
                    prices?.maxPrice,
                    prices?.currencyCode,
                  )}
                </>
              ) : null}
            </BookingPrice>
            <BookingAdditionalData>
              {numOfDay && numOfAdult ? informationString : ''}
            </BookingAdditionalData>
          </BookingPriceBlock>
        </ContentWrapper>
        <BookingDescription lines={descriptionLines}>
          {description}
        </BookingDescription>
      </BookingCardInformationBlock>
      <BookingButtonLink href={link} onClick={onButtonClick}>
        Посмотреть варианты {!isScreen400 && 'размещения'}
        <CardArrowRight stroke={'white'} />
      </BookingButtonLink>
    </BookingCardWrapper>
  );
};

export default BookingCard;
