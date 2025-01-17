import React, {FC} from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form';
import dayjs from 'dayjs';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {LeisureFilterValuesForm} from '@/modules/leisure/types';
import {
  MobileFilterButton,
  MobileFilterForm,
  MobileFilterWrapper,
} from './styles';
import {LeisureFilterDateInput, LeisureFilterSelect} from '../styles';
import {SelectCustomOption} from '@/modules/home/components/Filters/HomeSelect';

type Props = {
  handleSubmit: UseFormHandleSubmit<LeisureFilterValuesForm>;
  handleFormSubmit: (data: LeisureFilterValuesForm) => void;
  isValid: boolean;
  getValues: UseFormGetValues<LeisureFilterValuesForm>;
  errors: FieldErrors<LeisureFilterValuesForm>;
  control: Control<LeisureFilterValuesForm, any>;
  setValue: UseFormSetValue<LeisureFilterValuesForm>;
  trigger: UseFormTrigger<LeisureFilterValuesForm>;
};

const LeisureMobileFilters: FC<Props> = ({
  handleSubmit,
  handleFormSubmit,
  isValid,
  errors,
  control,
  setValue,
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
              <LeisureFilterSelect
                label="Населенный пункт"
                options={cities}
                {...field}
                value={field.value}
                emptyOption={{
                  value: SelectCustomOption.POPULAR,
                  title: 'Популярное',
                }}
                error={errors.cityId?.message}
                onChange={value => {
                  if (value === SelectCustomOption.POPULAR) {
                    field.onChange(null);
                    setValue('popular', true);
                  } else {
                    setValue('popular', false);
                    field.onChange(value);
                  }
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
            <LeisureFilterDateInput
              label="Дата с"
              value={dayjs(field.value)}
              setValue={value => {
                field.onChange(value);
              }}
              placeholder="Выберите дату"
            />
          )}
        />
        <Controller
          control={control}
          name="dateTo"
          render={({field}) => (
            <LeisureFilterDateInput
              label="Дата до"
              value={dayjs(field.value)}
              setValue={value => {
                field.onChange(value);
              }}
              placeholder="Выберите дату"
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

export default LeisureMobileFilters;
