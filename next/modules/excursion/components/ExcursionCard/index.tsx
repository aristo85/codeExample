import React, {FC} from 'react';
import {
  ArrowLeft,
  DividingLine,
  ExcursionAdditionalData,
  ExcursionAddress,
  ExcursionButtonLink,
  ExcursionCardImage,
  ExcursionCardImageBlock,
  ExcursionCardInformationBlock,
  ExcursionCardWrapper,
  ExcursionDescription,
  ExcursionName,
  ExcursionPrice,
  ExcursionPriceBlock,
  HighlightedPrice,
} from './styles';
import Link from 'next/link';
import {
  CurrencyEnum,
  currencyNameFormatter,
} from '@/modules/placement/constants';
import {ExcursionListData} from '@/modules/core/api/model/excursion/excursionListData';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {ExcursionType} from '../../types';

type SelectedProps = Pick<
  ExcursionListData,
  | 'name'
  | 'description'
  | 'mainPhotoUrl'
  | 'cityName'
  | 'adultPrice'
  | 'childrenPrice'
  | 'duration'
  | 'withChildren'
  | 'type'
>;
export interface ExcursionCardProps extends SelectedProps {
  link: string;
}

const ExcursionCard: FC<ExcursionCardProps> = ({
  name,
  description,
  link,
  mainPhotoUrl,
  cityName,
  adultPrice,
  childrenPrice,
  duration,
  withChildren,
  type,
}) => {
  return (
    <ExcursionCardWrapper href={link} passHref>
      <ExcursionCardImageBlock>
        <ExcursionCardImage src={mainPhotoUrl} layout={'fill'} alt={'image'} />
      </ExcursionCardImageBlock>
      <ExcursionCardInformationBlock>
        <ExcursionName>{name}</ExcursionName>
        <ExcursionAddress>{cityName}</ExcursionAddress>
        <DividingLine />
        <ExcursionPriceBlock>
          <ExcursionPrice>
            Стоимость
            <HighlightedPrice>{adultPrice}</HighlightedPrice>
            {`${currencyNameFormatter(adultPrice, CurrencyEnum.rubles)}.`}
            {type &&
              type === ExcursionType.GROUP &&
              withChildren &&
              childrenPrice && (
                <>
                  {` Детский`}
                  <HighlightedPrice>{childrenPrice}</HighlightedPrice>
                  {`${currencyNameFormatter(
                    childrenPrice,
                    CurrencyEnum.rubles,
                  )}.`}
                </>
              )}
          </ExcursionPrice>
          <ExcursionAdditionalData>{`Продолжительность - ${duration} ${pluralizationFn(
            duration,
            ['час', 'часа', 'часов'],
          )}`}</ExcursionAdditionalData>
        </ExcursionPriceBlock>
        <ExcursionDescription>{description}</ExcursionDescription>
        <Link href={link} passHref>
          <ExcursionButtonLink>
            Подробнее
            <ArrowLeft stroke={'white'} />
          </ExcursionButtonLink>
        </Link>
      </ExcursionCardInformationBlock>
    </ExcursionCardWrapper>
  );
};

export default ExcursionCard;
