import React, {FC} from 'react';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';

import {
  DetailGuideWrapper,
  DetailHeaderBlock,
  GuideBookingButton,
  GuideHeaderContainer,
  GuideTitle,
  GuideValue,
  InformationBlock,
  InformationBlockContainer,
} from './styles';

import {useAppSelector} from '@/modules/core/containers/StoreProvider';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';
import {selectGuideFilterValues} from '@/modules/guide/components/GuideFilter/guideFilterSlice';
import BookingImageMap, {
  Location,
} from '@/modules/placement/components/BookingImagesMap';
import {
  CurrencyEnum,
  currencyNameFormatter,
} from '@/modules/placement/constants';
import BusinessCard from '@/modules/core/components/BusinessCard';
import Link from 'next/link';
import {
  guideQueryHandler,
  GuideQueryLocation,
} from '@/modules/core/helpers/guideQueryHandler';
import {GuideData} from '@/modules/core/api/model/guide/guideData';
import {travelModeSelectorValues} from '@/modules/core/constants';

interface DetailGuide {
  data: GuideData;
}

export const DetailGuideComponent: FC<DetailGuide> = ({data}) => {
  const {
    id,
    photos,
    name,
    costPerHour,
    travelMode,
    maxNumberOfParticipants,
    description,
    avatar,
    age,
  } = data;
  const guideFilterData: GuideFilterValuesForm = useAppSelector(
    selectGuideFilterValues,
  );
  const {queriesString} = guideQueryHandler(
    guideFilterData,
    GuideQueryLocation.list,
  );

  const {queriesString: guideFormParams} = guideQueryHandler(
    guideFilterData,
    GuideQueryLocation.form,
  );

  const breadcrumbsItems = [
    {url: '/', label: 'Главная'},
    {url: `/guide?${queriesString}`, label: 'Результат поиска'},
    {label: `${name}`},
  ];

  return (
    <DetailGuideWrapper>
      <Breadcrumbs paths={breadcrumbsItems} />
      <DetailHeaderBlock>
        <BusinessCard photo={avatar} names={name} age={age} jobTitle="Гид" />
        <GuideHeaderContainer>
          <InformationBlockContainer>
            <InformationBlock>
              <GuideTitle>Стоимость</GuideTitle>
              <GuideValue>
                {`${costPerHour} ${currencyNameFormatter(
                  costPerHour,
                  CurrencyEnum.rubles,
                )}/час`}
              </GuideValue>
            </InformationBlock>
            <InformationBlock>
              <GuideTitle>Способ передвижения</GuideTitle>
              {travelModeSelectorValues.find(mode => mode.value === travelMode)
                ?.title || 'Любой'}
            </InformationBlock>
            <InformationBlock>
              <GuideTitle>Максимальное количество участников</GuideTitle>
              <GuideValue>{maxNumberOfParticipants}</GuideValue>
            </InformationBlock>
          </InformationBlockContainer>
          <Link href={`/booking/guide/${id}?step=1`}>
            <GuideBookingButton dark>Бронировать</GuideBookingButton>
          </Link>
        </GuideHeaderContainer>
      </DetailHeaderBlock>

      <InformationBlock>
        <GuideTitle>Описание</GuideTitle>
        <GuideValue style={{whiteSpace: 'pre-wrap'}}>{description}</GuideValue>
      </InformationBlock>
      <BookingImageMap location={Location.GUIDE} images={photos} />
    </DetailGuideWrapper>
  );
};
