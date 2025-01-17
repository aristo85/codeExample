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
import dayjs from 'dayjs';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {
  GuideFilterDateInput,
  GuideFilterSelect,
} from '@/modules/guide/components/GuideFilter/styles';
import {travelModeSelectorValues} from '@/modules/core/constants';

type Props = {
  handleSubmit: UseFormHandleSubmit<GuideFilterValuesForm>;
  handleFormSubmit: (data: GuideFilterValuesForm) => void;
  isValid: boolean;
  getValues: UseFormGetValues<GuideFilterValuesForm>;
  errors: FieldErrors<GuideFilterValuesForm>;
  control: Control<GuideFilterValuesForm, any>;
  setValue: UseFormSetValue<GuideFilterValuesForm>;
  trigger: UseFormTrigger<GuideFilterValuesForm>;
};

const GuideMobileFilters: FC<Props> = ({
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
              <GuideFilterSelect
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
          name="travelMode"
          control={control}
          render={({field}) => {
            return (
              <GuideFilterSelect
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
          name="date"
          render={({field}) => (
            <GuideFilterDateInput
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
            <GuideFilterDateInput
              label="Дата до"
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

export default GuideMobileFilters;
