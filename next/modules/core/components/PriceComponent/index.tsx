import React, {FC} from 'react';
import {
  PriceBlock,
  PriceDataBlock,
  PriceDataTitle,
  PriceDataValue,
  PriceLine,
  PriceMainTitle,
} from './styles';

type ListItem = {
  listTitle: string;
  price: number;
};

export type SectionType = {
  title: string;
  list: ListItem[];
};

export type PriceComponentProps = {
  upSection: SectionType;
  downSection?: SectionType;
};

const PriceComponent: FC<PriceComponentProps> = ({upSection, downSection}) => {
  const total = downSection?.list.reduce((acc, curr) => acc + curr?.price, 0);

  return (
    <PriceBlock>
      <>
        <PriceMainTitle>Стоимость</PriceMainTitle>
        {upSection.list.map(el => (
          <PriceDataBlock key={el.listTitle}>
            <PriceDataTitle>{el.listTitle}:</PriceDataTitle>
            <PriceDataValue>{el.price} ₽</PriceDataValue>
          </PriceDataBlock>
        ))}
      </>
      <PriceLine />
      {downSection && (
        <>
          <PriceDataBlock>
            <PriceMainTitle>Итого</PriceMainTitle>
            <PriceMainTitle>{total} ₽</PriceMainTitle>
          </PriceDataBlock>
          {downSection?.list.map(el => (
            <PriceDataBlock key={el.listTitle}>
              <PriceDataTitle>{el.listTitle}:</PriceDataTitle>
              <PriceDataValue>{el.price} ₽</PriceDataValue>
            </PriceDataBlock>
          ))}
        </>
      )}
    </PriceBlock>
  );
};

export default PriceComponent;
