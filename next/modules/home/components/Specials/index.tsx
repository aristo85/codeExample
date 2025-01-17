import React from 'react';
import {
  SpecialBtn,
  SpecialTitle,
  SpecialsContainer,
  SpecialImage,
  SpecialCard,
  SpecialCardWrapper,
} from './styles';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {useRouter} from 'next/router';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {useAppSelector} from '@/modules/core/hooks';
import {selectFilterValues} from '@/modules/core/api/filterSlice';
import {
  LeisureQueryLocation,
  leisureQueryHandler,
} from '@/modules/core/helpers/leisureQueryHandler';
import {LeisureFilterValuesForm} from '@/modules/leisure/types';
import {selectLeisureFilterValues} from '@/modules/leisure/leisureSlice';

interface SpecialOffer {
  title: string;
  imageUrl: string;
  leisure: boolean;
}

const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    title: 'Спецпредложения по размещению',
    imageUrl: '/images/special-offers/place.webp',
    leisure: false,
  },
  {
    title: 'Спецпредложения по досугу',
    imageUrl: '/images/special-offers/leisure.jpg',
    leisure: true,
  },
];

const MainSpecials = () => {
  const router = useRouter();
  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);
  const leisureFilterData: LeisureFilterValuesForm = useAppSelector(
    selectLeisureFilterValues,
  );

  const specialOfferClickHandler = (leisure: boolean) => {
    const {queriesString} = leisure
      ? leisureQueryHandler(
          {...leisureFilterData, specialOffer: true},
          LeisureQueryLocation.list,
        )
      : queryHandler({...filterData, specialOffer: true}, QueryLocation.home);

    void router.push(
      leisure ? `/leisure/?${queriesString}` : `/placement/?${queriesString}`,
    );
  };

  return (
    <SpecialsContainer>
      {SPECIAL_OFFERS.map(offer => (
        <SpecialCardWrapper key={offer.title}>
          <SpecialTitle>{offer.title}</SpecialTitle>
          <SpecialCard onClick={() => specialOfferClickHandler(offer.leisure)}>
            <SpecialImage fill src={offer.imageUrl} alt={offer.title} />
            <SpecialBtn
              dark
              onClick={e => {
                e.stopPropagation();
                specialOfferClickHandler(offer.leisure);
              }}>
              Посмотреть
            </SpecialBtn>
          </SpecialCard>
        </SpecialCardWrapper>
      ))}
    </SpecialsContainer>
  );
};

export default MainSpecials;
