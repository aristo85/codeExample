import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {
  FormSelector,
  FormInput,
  Step2InfoLabel,
  Step2Row,
  StepWrapper,
  WitchChildrenCheckbox,
  MultiplyWrapper,
  ExcursionTypesSection,
} from '../styles';
import BoxSingleSelection from '@/modules/core/components/BoxSingleSelection';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {
  ExcursionType,
  TourFormData,
  excursionTypes,
  timeOptionsArray,
} from '../../types';
import ExcursionTypesFields from './ExcursionTypesFields';
import {travelModeSelectorValues} from '@/modules/core/constants';

const FormStepTwo = () => {
  const {
    register,
    control,
    formState: {errors},
    trigger,
  } = useFormContext<TourFormData>();
  const [cities] = useCitySelectorOptions();

  return (
    <StepWrapper>
      <Step2Row>
        <Controller
          name="cityId"
          control={control}
          render={({field}) => {
            return (
              <FormSelector
                label="Населенный пункт"
                options={cities}
                {...field}
                value={field.value?.toString()}
                error={errors.cityId?.message}
                onChange={value => {
                  field.onChange(value);
                }}
                placeholder="Выберите населенный пункт, к которому привязана экскурсия"
                mobileh={68}
              />
            );
          }}
        />
        <MultiplyWrapper>
          <FormInput
            label="Максимальное количество участников"
            {...register('maxNumberOfParticipants')}
            placeholder="Выберите количество участников, на которое рассчитана экскурсия"
            mobileh={68}
            error={errors.maxNumberOfParticipants?.message}
          />
          <Controller
            control={control}
            name="withChildren"
            render={({field}) => (
              <WitchChildrenCheckbox
                label="Можно с детьми"
                value={!!field.value}
                setValue={field.onChange}
              />
            )}
          />
        </MultiplyWrapper>
      </Step2Row>
      <Step2Row>
        <Controller
          name="travelMode"
          control={control}
          render={({field}) => {
            return (
              <FormSelector
                label="Способ передвижения"
                options={travelModeSelectorValues}
                {...field}
                value={field.value}
                error={errors.travelMode?.message}
                onChange={value => {
                  field.onChange(value);
                }}
                placeholder="Выберите способ передвижения на экскурсии"
                mobileh={68}
              />
            );
          }}
        />
        <Controller
          name="duration"
          control={control}
          render={({field}) => {
            return (
              <FormSelector
                label="Продолжительность экскурсии"
                options={timeOptionsArray}
                {...field}
                value={field.value?.toString()}
                error={errors.duration?.message}
                onChange={value => {
                  field.onChange(value);
                }}
                placeholder="Выберите продолжительность экскурсии"
                mobileh={68}
              />
            );
          }}
        />
      </Step2Row>

      <Controller
        name="type"
        control={control}
        render={({field}) => {
          const selectedValue = field.value || ExcursionType.INDIVIDUAL;
          return (
            <BoxSingleSelection
              options={excursionTypes}
              label="Тип экскурсии"
              selected={selectedValue}
              onChange={value => {
                field.onChange(value);
                trigger('adultPrice');
              }}
            />
          );
        }}
      />
      <ExcursionTypesSection>
        <ExcursionTypesFields />
      </ExcursionTypesSection>

      <Step2InfoLabel>
        Вы ничего не платите за размещение экскурсии. Вместо этого мы берем
        процент от стоимости каждого заказа.
      </Step2InfoLabel>
    </StepWrapper>
  );
};

export default FormStepTwo;
