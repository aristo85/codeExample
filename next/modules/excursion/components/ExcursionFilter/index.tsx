import React, {FC, useEffect} from 'react';
import {
  FilterCheckbox,
  ExcursionFilterWrapper,
  ExcursionFilterForm,
  ExcursionFilterSelect,
  ExcursionFilterDateInput,
  ExcursionFilterButton,
} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {useMediaQuery} from '@mui/material';
import dayjs from 'dayjs';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import {excursionType} from '@/modules/excursion/constants';
import {useExcursionFilterDataFromQuery} from '@/modules/core/hooks/useExcursionDataFromParams';
import {
  selectExcursionFilterValues,
  setExcursionFilterValue,
} from '@/modules/excursion/components/ExcursionFilter/ExcursionFilterSlice';
import {
  excursionQueryHandler,
  ExcursionQueryLocation,
} from '@/modules/core/helpers/excursionQueryHandler';
import ExcursionMobileFilters from '@/modules/excursion/components/ExcursionFilter/Mobile';
import {
  DEFAULT_DATE_FORMAT,
  travelModeSelectorValues,
} from '@/modules/core/constants';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';

export interface FilterProps {
  handler: (value: string) => void;
  locationForParamsString: ExcursionQueryLocation;
}

const ExcursionFilter: FC<FilterProps> = ({
  handler,
  locationForParamsString,
}) => {
  useExcursionFilterDataFromQuery();
  const dispatch = useAppDispatch();
  const [cities] = useCitySelectorOptions();
  const excursionFilterData: ExcursionFilterValuesForm = useAppSelector(
    selectExcursionFilterValues,
  );
  const smallScreen = useMediaQuery('(max-width:480px)');

  const bookingFormValidationSchema = yup.object().shape({
    cityId: yup.string().required('Выберите город'),
    date: yup.date().required('Выберите дату экскурсии'),
  });

  const {
    formState: {errors, isValid},
    handleSubmit,
    control,
    reset,
    getValues,
    setValue,
    trigger,
  } = useForm<ExcursionFilterValuesForm>({
    resolver: yupResolver(bookingFormValidationSchema),
    mode: 'onChange',
  });

  const handleFormSubmit = (data: ExcursionFilterValuesForm) => {
    const preparedData = {
      ...data,
      date: dayjs(data.date).format(DEFAULT_DATE_FORMAT),
      dateTo: dayjs(data.dateTo).format(DEFAULT_DATE_FORMAT),
    };
    dispatch(setExcursionFilterValue(preparedData));
    const {queriesString} = excursionQueryHandler(
      preparedData,
      locationForParamsString,
    );
    handler(queriesString);
  };

  useEffect(() => {
    reset({
      ...excursionFilterData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [excursionFilterData]);

  const handleFieldChange = () => {
    handleSubmit(handleFormSubmit)();
  };

  return smallScreen ? (
    <ExcursionMobileFilters
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      isValid={isValid}
      trigger={trigger}
      setValue={setValue}
      control={control}
      errors={errors}
      getValues={getValues}
    />
  ) : (
    <ExcursionFilterWrapper>
      <ExcursionFilterForm>
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
                  handleFieldChange();
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
                handleFieldChange();
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
                handleFieldChange();
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
                  handleFieldChange();
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
                  handleFieldChange();
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
            <>
              <FilterCheckbox
                label="Можно с детьми"
                value={Boolean(field.value)}
                setValue={value => {
                  field.onChange(value);
                  handleFieldChange();
                }}
              />
            </>
          )}
        />
        <ExcursionFilterButton
          onClick={handleSubmit(handleFormSubmit)}
          dark
          disabled={!isValid}>
          Посмотреть
        </ExcursionFilterButton>
      </ExcursionFilterForm>
    </ExcursionFilterWrapper>
  );
};

export default ExcursionFilter;
