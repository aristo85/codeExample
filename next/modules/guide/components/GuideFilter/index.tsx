import React, {FC, useEffect} from 'react';
import {
  FilterCheckbox,
  GuideFilterWrapper,
  GuideFilterForm,
  GuideFilterSelect,
  GuideFilterDateInput,
  GuideFilterButton,
} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {useMediaQuery} from '@mui/material';
import dayjs from 'dayjs';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useGuideFilterDataFromQuery} from '@/modules/core/hooks/useGuideFilterDataFromQuery';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {
  selectGuideFilterValues,
  setGuideFilterValue,
} from '@/modules/guide/components/GuideFilter/guideFilterSlice';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';
import GuideMobileFilters from '@/modules/guide/components/GuideFilter/Mobile';
import {
  guideQueryHandler,
  GuideQueryLocation,
} from '@/modules/core/helpers/guideQueryHandler';
import {
  DEFAULT_DATE_FORMAT,
  travelModeSelectorValues,
} from '@/modules/core/constants';

export interface FilterProps {
  handler: (value: string) => void;
  locationForParamsString: GuideQueryLocation;
}

const GuideFilter: FC<FilterProps> = ({handler, locationForParamsString}) => {
  useGuideFilterDataFromQuery();
  const dispatch = useAppDispatch();
  const [cities] = useCitySelectorOptions();
  const guideFilterData: GuideFilterValuesForm = useAppSelector(
    selectGuideFilterValues,
  );

  const smallScreen = useMediaQuery('(max-width:480px)');

  const bookingFormValidationSchema = yup.object().shape({
    cityId: yup.string().required('Выберите город'),
  });

  const {
    formState: {errors, isValid},
    handleSubmit,
    control,
    reset,
    getValues,
    setValue,
    trigger,
  } = useForm<GuideFilterValuesForm>({
    resolver: yupResolver(bookingFormValidationSchema),
    mode: 'onChange',
  });

  const handleFormSubmit = (data: GuideFilterValuesForm) => {
    const preparedData = {
      ...data,
      date: dayjs(data.date).format(DEFAULT_DATE_FORMAT),
      dateTo: dayjs(data.dateTo).format(DEFAULT_DATE_FORMAT),
    };
    dispatch(setGuideFilterValue(preparedData));
    const {queriesString} = guideQueryHandler(
      preparedData,
      locationForParamsString,
    );
    handler(queriesString);
  };

  const handleFieldChange = () => {
    handleSubmit(handleFormSubmit)();
  };

  useEffect(() => {
    reset({
      ...guideFilterData,
    });
  }, [guideFilterData]);

  return smallScreen ? (
    <GuideMobileFilters
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
    <GuideFilterWrapper>
      <GuideFilterForm>
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
                  handleFieldChange();
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
                  handleFieldChange();
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
                handleFieldChange();
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
                handleFieldChange();
              }}
              placeholder="Выберите дату"
            />
          )}
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
        <GuideFilterButton
          onClick={handleSubmit(handleFormSubmit)}
          dark
          disabled={!isValid}>
          Посмотреть
        </GuideFilterButton>
      </GuideFilterForm>
    </GuideFilterWrapper>
  );
};

export default GuideFilter;
