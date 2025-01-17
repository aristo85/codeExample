import React, {FC} from 'react';
import {FooterBtn, FormFooter} from './styles';
import {StylizationProps} from '../../types';

type Props = {
  totalSteps: number;
  currentStep: number;
  handleNextStep: () => void;
  handleBackStep: () => void;
  sticky?: boolean;
  booking?: boolean;
} & StylizationProps;
const StickyFormFooter: FC<Props> = ({
  totalSteps,
  currentStep,
  handleNextStep,
  handleBackStep,
  sticky,
  booking,
  className,
}) => {
  const isLastStep = currentStep === totalSteps;
  return (
    <FormFooter sticky={sticky} className={className}>
      <FooterBtn hidden={!isLastStep} dark type={'submit'}>
        {booking ? 'Подтвердить бронирование' : 'Далее'}
      </FooterBtn>
      <FooterBtn
        hidden={isLastStep}
        dark
        type="button"
        onClick={handleNextStep}>
        Далее
      </FooterBtn>
      {currentStep > 1 && (
        <FooterBtn type="button" onClick={handleBackStep}>
          Назад
        </FooterBtn>
      )}
    </FormFooter>
  );
};
export default StickyFormFooter;
