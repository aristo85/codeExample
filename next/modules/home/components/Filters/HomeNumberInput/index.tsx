import React, {FC, ReactNode} from 'react';
import {StylizationProps} from '@/modules/core/types';
import {
  HomeNumberInputButton,
  HomeNumberInputButtonWrapper,
  HomeNumberInputContainer,
  HomeNumberInputValue,
  HomeNumberInputWrapper,
} from './styles';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';
import MobileFilterCounter from '@/modules/core/components/MobileFilterCounter';

type Props = {
  label?: string | ReactNode;
  value: number;
  minValue?: number;
  maxValue?: number;
  setValue: (value: number) => void;
  isMobile: boolean;
} & StylizationProps;

const HomeNumberInput: FC<Props> = ({
  label,
  value,
  minValue,
  setValue,
  className,
  isMobile,
  maxValue,
}) => {
  const onAddButtonClick = () => {
    setValue(value + 1);
  };

  const onDecreaseButtonClick = () => {
    setValue(value - 1);
  };

  if (isMobile) {
    return (
      <MobileFilterCounter
        counter={value}
        onAddButtonClick={onAddButtonClick}
        onDecreaseButtonClick={onDecreaseButtonClick}
        label={label}
        minValue={minValue}
        maxValue={maxValue}
      />
    );
  }

  return (
    <HomeNumberInputWrapper className={className}>
      <HomeNumberInputContainer>
        <HomeNumberInputButtonWrapper>
          <HomeNumberInputButton
            type="button"
            onClick={onAddButtonClick}
            disabled={!!maxValue?.toString() ? value >= maxValue : false}>
            <ArrowSelectUp style={{rotate: '180deg'}} />
          </HomeNumberInputButton>
          <HomeNumberInputButton
            type="button"
            onClick={onDecreaseButtonClick}
            disabled={!!minValue?.toString() ? value <= minValue : false}>
            <ArrowSelectUp />
          </HomeNumberInputButton>
        </HomeNumberInputButtonWrapper>

        <HomeNumberInputValue>{value}</HomeNumberInputValue>
      </HomeNumberInputContainer>

      <HomeNumberInputValue>{label}</HomeNumberInputValue>
    </HomeNumberInputWrapper>
  );
};

export default HomeNumberInput;
