import React, {FC} from 'react';
import {
  ArrowWrapper,
  PeopleHeaderContent,
  PeopleHeaderSelectorContainer,
  PeopleHeaderTitle,
} from '@/modules/core/components/PeopleDropdown/components/Header/styles';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {UseFormWatch} from 'react-hook-form';
import {PlacementFilterValuesForm} from '@/modules/home/components/Filters';

interface PeopleHeaderSelectorProps {
  isOpenSelector: boolean;
  onClickHandler: () => void;
  watch: UseFormWatch<PlacementFilterValuesForm>;
}
export const PeopleHeaderSelector: FC<PeopleHeaderSelectorProps> = ({
  isOpenSelector,
  onClickHandler,
  watch,
}) => {
  const numOfAdult = watch('numOfAdult');
  const childAges = watch('childAges')?.length;

  const counterTitle = `
  ${numOfAdult} ${pluralizationFn(numOfAdult, [
    'взрослый',
    'взрослых',
    'взрослых',
  ])}${childAges > 0 ? `, ${childAges}` : ''} ${
    childAges > 0
      ? `${pluralizationFn(childAges, ['ребенок', 'ребенка', 'детей'])}`
      : ''
  }`;

  return (
    <PeopleHeaderSelectorContainer onClick={onClickHandler}>
      <PeopleHeaderContent>
        <PeopleHeaderTitle>{counterTitle}</PeopleHeaderTitle>
        <ArrowWrapper isOpen={isOpenSelector}>
          <ArrowSelectUp />
        </ArrowWrapper>
      </PeopleHeaderContent>
    </PeopleHeaderSelectorContainer>
  );
};
