import React, {FC} from 'react';
import {
  ArrowLeft,
  DividingLine,
  GuideAddress,
  GuideButtonLink,
  GuideCardImage,
  GuideCardImageBlock,
  GuideCardInformationBlock,
  GuideCardWrapper,
  GuideDescription,
  GuideName,
  GuidePrice,
  GuidePriceBlock,
  HighlightedPrice,
} from './styles';
import Link from 'next/link';
import {
  CurrencyEnum,
  currencyNameFormatter,
} from '@/modules/placement/constants';
import {GuideListData} from '@/modules/core/api/model/guide/guideListData';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';

type SelectedProps = Pick<
  GuideListData,
  'name' | 'description' | 'avatar' | 'cityName' | 'age' | 'costPerHour'
>;
export interface GuideCardProps extends SelectedProps {
  link: string;
}

const GuideCard: FC<GuideCardProps> = ({
  name,
  description,
  link,
  avatar,
  cityName,
  costPerHour,
  age,
}) => {
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);
  return (
    <GuideCardWrapper href={link} passHref>
      <GuideCardImageBlock>
        <GuideCardImage src={avatar} layout={'fill'} alt={'image'} />
      </GuideCardImageBlock>
      <GuideCardInformationBlock>
        <GuideName>{name}</GuideName>
        <GuideAddress>{cityName}</GuideAddress>
        <DividingLine />
        <GuidePriceBlock>
          <GuidePrice>
            Стоимость
            <HighlightedPrice>{costPerHour}</HighlightedPrice>
            {`${currencyNameFormatter(costPerHour, CurrencyEnum.rubles)}/час`}
          </GuidePrice>
        </GuidePriceBlock>
        <GuideDescription>{description}</GuideDescription>
        <Link href={link} passHref>
          <GuideButtonLink>
            Подробнее
            <ArrowLeft stroke={'white'} />
          </GuideButtonLink>
        </Link>
      </GuideCardInformationBlock>
    </GuideCardWrapper>
  );
};

export default GuideCard;
