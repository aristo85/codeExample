import React, {FC, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useMediaQuery} from '@mui/material';
import dayjs from 'dayjs';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {
  LeisureQueryLocation,
  leisureQueryHandler,
} from '@/modules/core/helpers/leisureQueryHandler';
import {useLeisureFilterDataFromQuery} from '@/modules/core/hooks/useLeisureFilteFromQuery';
import {LeisureFilterParamsData, LeisureFilterValuesForm} from '../../types';
import {
  selectLeisureFilterValues,
  setLeisureFilterValue,
} from '../../leisureSlice';
import LeisureMobileFilters from './Mobile';
import {
  FilterWrapper,
  LeisureFilterButton,
  LeisureFilterDateInput,
  LeisureFilterForm,
  LeisureFilterSelect,
  LeisureFilterWrapper,
} from './styles';
import {FilterTitle} from '@/modules/placement/components/PlacementFilter/styles';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import FilterParams from './FilterParmas';
import {SelectCustomOption} from '@/modules/home/components/Filters/HomeSelect';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export interface FilterProps {
  handler: (value: string) => void;
  locationForParamsString: LeisureQueryLocation;
  filtersData: LeisureFilterParamsData;
}

const LeisureFilter: FC<FilterProps> = ({
  handler,
  locationForParamsString,
  filtersData,
}) => {
  // on new link render
  useLeisureFilterDataFromQuery();
  const dispatch = useAppDispatch();
  const [cities] = useCitySelectorOptions();
  const leisureFilterData: LeisureFilterValuesForm = useAppSelector(
    selectLeisureFilterValues,
  );

  const smallScreen = useMediaQuery(`(max-width: ${breakpoints.xs}px)`);
  const largeScreen = useMediaQuery(`(min-width: ${breakpoints.md + 1}px)`);
  const tabletScreen = !smallScreen && !largeScreen;

  const bookingFormValidationSchema = yup.object().shape({
    cityId: yup
      .string()
      .nullable()
      .when(['popular'], {
        is: true,
        then: schema => schema,
        otherwise: schema => schema.required('Выберите город'),
      }),
  });

  const {
    formState: {errors, isValid},
    handleSubmit,
    control,
    reset,
    getValues,
    setValue,
    trigger,
  } = useForm<LeisureFilterValuesForm>({
    resolver: yupResolver(bookingFormValidationSchema),
    mode: 'onChange',
  });

  const handleFormSubmit = (data: LeisureFilterValuesForm) => {
    const preparedData = {
      ...data,
      date: dayjs(data.date).format(DEFAULT_DATE_FORMAT),
      dateTo: dayjs(data.dateTo).format(DEFAULT_DATE_FORMAT),
    };
    dispatch(setLeisureFilterValue(preparedData));
    const {queriesString} = leisureQueryHandler(
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
      ...leisureFilterData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leisureFilterData]);

  return smallScreen ? (
    <FilterWrapper>
      <LeisureMobileFilters
        handleSubmit={handleSubmit}
        handleFormSubmit={handleFormSubmit}
        isValid={isValid}
        trigger={trigger}
        setValue={setValue}
        control={control}
        errors={errors}
        getValues={getValues}
      />
      <FilterParams
        filtersData={filtersData}
        control={control}
        handleFormSubmit={handleFieldChange}
        isCollapsed
        setValue={setValue}
      />
    </FilterWrapper>
  ) : (
    <FilterWrapper>
      <LeisureFilterWrapper>
        <FilterTitle>Найти</FilterTitle>
        <br />
        <LeisureFilterForm>
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
              <LeisureFilterDateInput
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
              <LeisureFilterDateInput
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
          <LeisureFilterButton
            onClick={handleSubmit(handleFormSubmit)}
            dark
            disabled={!isValid}>
            Посмотреть
          </LeisureFilterButton>
        </LeisureFilterForm>
      </LeisureFilterWrapper>
      {!smallScreen && (
        <FilterParams
          filtersData={filtersData}
          control={control}
          handleFormSubmit={handleFieldChange}
          isCollapsed={tabletScreen}
          isTablet={tabletScreen}
          setValue={setValue}
        />
      )}
    </FilterWrapper>
  );
};

export default LeisureFilter;
