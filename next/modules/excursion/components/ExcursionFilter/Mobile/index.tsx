import React, {FC} from 'react';
import {
  FilterCheckbox,
  MobileFilterButton,
  MobileFilterWrapper,
  MobileFilterForm,
} from './styles';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form';
import {
  ExcursionFilterDateInput,
  ExcursionFilterSelect,
} from '@/modules/excursion/components/ExcursionFilter/styles';
import dayjs from 'dayjs';
import {excursionType} from '@/modules/excursion/constants';
import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import {travelModeSelectorValues} from '@/modules/core/constants';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';

type Props = {
  handleSubmit: UseFormHandleSubmit<ExcursionFilterValuesForm>;
  handleFormSubmit: (data: ExcursionFilterValuesForm) => void;
  isValid: boolean;
  getValues: UseFormGetValues<ExcursionFilterValuesForm>;
  errors: FieldErrors<ExcursionFilterValuesForm>;
  control: Control<ExcursionFilterValuesForm, any>;
  setValue: UseFormSetValue<ExcursionFilterValuesForm>;
  trigger: UseFormTrigger<ExcursionFilterValuesForm>;
};

const ExcursionMobileFilters: FC<Props> = ({
  handleSubmit,
  handleFormSubmit,
  isValid,
  errors,
  control,
}) => {
  const [cities] = useCitySelectorOptions();
  return (
    <MobileFilterWrapper>
      <MobileFilterForm>
        <Controller
          name="cityId"
          control={control}
          render={({field}) => {
            return (
              <ExcursionFilterSelect
                label="Населенный пункт"
                options={cities}
                {...field}
                value={field.value}
                error={errors.cityId?.message}
                onChange={value => {
                  field.onChange(value);
                }}
                placeholder="Укажите населенный пункт"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="date"
          render={({field}) => (
            <ExcursionFilterDateInput
              label="Дата экскурсии с"
              value={dayjs(field.value)}
              setValue={value => {
                field.onChange(value);
              }}
              placeholder="Выберите дату экскурсии"
            />
          )}
        />
        <Controller
          control={control}
          name="dateTo"
          render={({field}) => (
            <ExcursionFilterDateInput
              label="Дата экскурсии до"
              value={dayjs(field.value)}
              setValue={value => {
                field.onChange(value);
              }}
              placeholder="Выберите дату экскурсии"
            />
          )}
        />
        <Controller
          name="type"
          control={control}
          render={({field}) => {
            return (
              <ExcursionFilterSelect
                label="Тип экскурсии"
                options={excursionType}
                {...field}
                value={field.value}
                error={errors.type?.message}
                onChange={value => {
                  field.onChange(value);
                }}
                placeholder="Укажите тип экскурсии"
              />
            );
          }}
        />
        <Controller
          name="travelMode"
          control={control}
          render={({field}) => {
            return (
              <ExcursionFilterSelect
                label="Способ передвижения"
                options={travelModeSelectorValues}
                {...field}
                value={field.value}
                error={errors.travelMode?.message}
                onChange={value => {
                  field.onChange(value);
                }}
                placeholder="Укажите способ передвижения"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="withChildren"
          render={({field}) => (
            <FilterCheckbox
              label="Можно с детьми"
              value={field.value}
              setValue={value => {
                field.onChange(value);
              }}
            />
          )}
        />
        <MobileFilterButton
          dark
          disabled={!isValid}
          onClick={handleSubmit(handleFormSubmit)}>
          Посмотреть
        </MobileFilterButton>
      </MobileFilterForm>
    </MobileFilterWrapper>
  );
};

export default ExcursionMobileFilters;
