import {FC, ReactNode} from 'react';
import {
  MobileButtonCounter,
  MobileButtonCounterLabel,
  MobileFilterButtonsContainer,
  MobileFilterCounterWrapper,
  ValueTitle,
} from '@/modules/core/components/MobileFilterCounter/style';
import MinusIcon from '@/modules/core/components/icons/MinusIcon';
import PlusIcon from '@/modules/core/components/icons/PlusIcon';

interface MobileFilterCounterProps {
  onAddButtonClick: () => void;
  onDecreaseButtonClick: () => void;
  counter: number | string | ReactNode;
  label?: string | ReactNode;
  minValue?: number;
  longCounter?: boolean;
  maxValue?: number;
}
const MobileFilterCounter: FC<MobileFilterCounterProps> = ({
  onAddButtonClick,
  onDecreaseButtonClick,
  counter,
  label,
  minValue,
  longCounter,
  maxValue,
}) => {
  return (
    <MobileFilterCounterWrapper>
      {label && <MobileButtonCounterLabel>{label}</MobileButtonCounterLabel>}
      <MobileFilterButtonsContainer>
        <MobileButtonCounter
          type={'button'}
          side={'left'}
          onClick={onDecreaseButtonClick}
          disabled={
            !!minValue?.toString() ? Number(counter) <= minValue : false
          }>
          <MinusIcon stroke={'#222121'} />
        </MobileButtonCounter>
        <ValueTitle longCounter={longCounter}>{counter}</ValueTitle>
        <MobileButtonCounter
          side={'right'}
          onClick={onAddButtonClick}
          type={'button'}
          disabled={
            !!maxValue?.toString() ? Number(counter) >= maxValue : false
          }>
          <PlusIcon stroke={'#222121'} />
        </MobileButtonCounter>
      </MobileFilterButtonsContainer>
    </MobileFilterCounterWrapper>
  );
};

export default MobileFilterCounter;
