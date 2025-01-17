import React, {FC, ReactNode} from 'react';
import {
  HeaderStep,
  HeaderStepsContainer,
  HeaderSubTitle,
  HeaderTitle,
  HeaderWithStepsContainer,
} from '@/modules/core/components/HeaderWithSteps/styles';

interface HeaderWithStepsProps {
  currentStep?: number;
  stepsAmount?: number;
  title?: string | ReactNode;
  subTitle?: string;
}

export const HeaderWithSteps: FC<HeaderWithStepsProps> = ({
  currentStep,
  stepsAmount,
  subTitle,
  title,
}) => {
  return (
    <HeaderWithStepsContainer>
      {title && typeof title === 'string' ? (
        <HeaderTitle>{title}</HeaderTitle>
      ) : (
        title
      )}
      {currentStep && stepsAmount && (
        <HeaderStepsContainer>
          <HeaderStep currentStep={true}>Шаг {currentStep}</HeaderStep>
          <HeaderStep>/{stepsAmount}</HeaderStep>
        </HeaderStepsContainer>
      )}
      {subTitle && <HeaderSubTitle>{subTitle}</HeaderSubTitle>}
    </HeaderWithStepsContainer>
  );
};
