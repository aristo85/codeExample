import React from 'react';
import {FormInput, Step2Row} from '../styles';
import {useFormContext} from 'react-hook-form';
import {ExcursionType, TourFormData} from '../../types';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';

const ExcursionTypesFields = () => {
  const {
    register,
    watch,
    formState: {errors},
  } = useFormContext<TourFormData>();
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);

  const excursionType = watch('type');
  const withChildren = watch('withChildren');

  const isIndividual = excursionType === ExcursionType.INDIVIDUAL;

  return isIndividual ? (
    <>
      <Step2Row>
        <FormInput
          label="Индивидуальная экскурсия, ₽ "
          {...register('adultPrice')}
          placeholder="Укажите стоимость индивидуальной экскурсии"
          completeDisable={!isIndividual}
          mobileh={58}
          error={errors.adultPrice?.message}
        />
      </Step2Row>
      {!isScreenXs && (
        <Step2Row>
          <FormInput
            name="any1"
            value=""
            label="Групповая экскурсия за взрослого, ₽ "
            placeholder="Укажите стоимость групповой экскурсии для взрослого"
            completeDisable={isIndividual}
          />
          <FormInput
            name="any2"
            value=""
            label="Групповая экскурсия за ребенка младше 7 лет, ₽ "
            placeholder="Укажите стоимость групповой экскурсии для ребенка младше 7 лет"
            completeDisable={isIndividual}
          />
        </Step2Row>
      )}
    </>
  ) : (
    <>
      {!isScreenXs && (
        <Step2Row>
          <FormInput
            name="any3"
            value=""
            label="Индивидуальная экскурсия, ₽ "
            placeholder="Укажите стоимость индивидуальной экскурсии"
            completeDisable={!isIndividual}
          />
        </Step2Row>
      )}
      <Step2Row>
        <FormInput
          label="Групповая экскурсия за взрослого, ₽ "
          {...register('adultPrice')}
          placeholder="Укажите стоимость групповой экскурсии для взрослого"
          completeDisable={isIndividual}
          mobileh={58}
          error={errors.adultPrice?.message}
        />
        <FormInput
          label="Групповая экскурсия за ребенка младше 7 лет, ₽ "
          {...register('childrenPrice')}
          placeholder="Укажите стоимость групповой экскурсии для ребенка младше 7 лет"
          completeDisable={isIndividual || !withChildren}
          mobileh={58}
          error={errors.childrenPrice?.message}
        />
      </Step2Row>
    </>
  );
};

export default ExcursionTypesFields;
