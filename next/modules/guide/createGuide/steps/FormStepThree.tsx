import React from 'react';
import {StepWrapper} from '../styles';
import TimeTableController, {
  ScheduleFormValues,
} from '@/modules/core/components/TimeTableController';
import {useFormContext} from 'react-hook-form';
import {GuideFormData} from '../../types';

const FormStepThree = () => {
  const {register, control} = useFormContext<
    ScheduleFormValues | GuideFormData
  >();

  return (
    <StepWrapper>
      <TimeTableController {...{control, register}} />
    </StepWrapper>
  );
};

export default FormStepThree;
