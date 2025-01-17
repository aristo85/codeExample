import React from 'react';
import {
  FormInput,
  FormSelector,
  Step2InfoLbel,
  Step2Row,
  StepWrapper,
  WitchChildrenCheckbox,
} from '../styles';
import {Controller, useFormContext} from 'react-hook-form';
import {GuideFormData} from '../../types';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {timeOptionsArray} from '@/modules/excursion/types';
import {travelModeSelectorValues} from '@/modules/core/constants';

const FormStepTwo = () => {
  const {
    register,
    control,
    formState: {errors},
  } = useFormContext<GuideFormData>();
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
                placeholder="Выберите населенный пункт гида"
                mobileh={68}
              />
            );
          }}
        />
        <FormInput
          label="Максимальное количество участников"
          {...register('maxNumberOfParticipants')}
          placeholder="Укажите количество участников, с которым может работать гид"
          mobileh={68}
          error={errors.maxNumberOfParticipants?.message}
          style={{marginTop: '8px'}}
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
                placeholder="Выберите способ передвижения гида"
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
                label="Максимальная продолжительность работы"
                options={timeOptionsArray}
                {...field}
                value={field.value?.toString()}
                error={errors.duration?.message}
                onChange={value => {
                  field.onChange(value);
                }}
                placeholder="Выберите продолжительность работы гида"
                mobileh={68}
              />
            );
          }}
        />
      </Step2Row>
      <FormInput
        label="Cтоимость за 1 час, ₽"
        {...register('costPerHour')}
        placeholder="Укажите стоимость часа работы гида"
        mobileh={68}
        error={errors.costPerHour?.message}
      />
      <Step2InfoLbel>
        Вы ничего не платите за размещение гида. Вместо этого мы берем процент
        от стоимости каждого заказа.
      </Step2InfoLbel>
    </StepWrapper>
  );
};

export default FormStepTwo;
