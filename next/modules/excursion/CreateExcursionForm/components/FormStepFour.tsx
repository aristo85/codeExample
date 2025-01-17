import DynamicMapFormComponent from '@/modules/core/components/Map/MapUseForm';
import React from 'react';
import {useFormContext} from 'react-hook-form';
import {
  ExcursionTextBlock,
  FormInput,
  MapContainer,
  MapTipTitle,
  StepWrapper,
} from '../styles';
import {TourFormData} from '../../types';

const FormStepFour = () => {
  const {
    register,
    formState: {errors},
  } = useFormContext<TourFormData>();

  return (
    <StepWrapper style={{gap: 0}}>
      <MapContainer>
        <DynamicMapFormComponent
          isEditable
          name="meetingPlace"
          label=""
          txtInfo=""
        />
      </MapContainer>
      <ExcursionTextBlock>
        <MapTipTitle>
          Укажите на карте точку, где должны встретиться турист и экскурсовод. В
          поле ввода ориентиров укажите ориентиры на местности, как туристу
          найти экскурсовода. Например: &ldquo;У памятника Ленину&rdquo;
        </MapTipTitle>
        <FormInput
          label="Ориентиры места встречи"
          {...register('meetingPlaceDescription')}
          placeholder="Опишите место встречи так, чтобы любой участник мог без лишних вопросов найти его. Эта информация будет отображаться в билете на экскурсию"
          mobileh={125}
          error={errors.meetingPlaceDescription?.message}
        />
      </ExcursionTextBlock>
    </StepWrapper>
  );
};

export default FormStepFour;
