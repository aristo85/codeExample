import React, {FC, useEffect} from 'react';
import {
  FilterDateInput,
  FilterSelect,
  FilterWrapper,
  FilterForm,
  FilterBTn,
  DaysLabel,
  FilterTitle,
  FiltersNavbar,
  FilterFieldContainer,
  FilterDateContainer,
  FilterDateWrapper,
} from './styles';
import {useForm, Controller, useFieldArray} from 'react-hook-form';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {useMediaQuery} from '@mui/material';
import dayjs from 'dayjs';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {
  selectFilterValues,
  setFilterValue,
} from '@/modules/core/api/filterSlice';
import {placementFormValidationSchema} from '@/modules/placement/constants';
import {useFilterDataFromQuery} from '@/modules/core/hooks/useFilterDataFromParams';
import {yupResolver} from '@hookform/resolvers/yup';
import PeopleSelector from '@/modules/core/components/PeopleDropdown';
import {v4 as uuidV4} from 'uuid';
import PlacementMobileFilter from './PlacementMobileFilter';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import useGetDaysAndNights from '@/modules/core/hooks/useGetDaysAndNights';
import PlacementFilterParams from './PlacementFilterParams';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {SelectCustomOption} from '@/modules/home/components/Filters/HomeSelect';
import {PlacementFilterValuesForm} from '@/modules/home/components/Filters';
import {AmenityFilterItem} from '@/pages/placement';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';
import BookingMapButton from '../BookingMapButton';

export interface FilterProps {
  handler: (value: string) => void;
  locationForParamsString: QueryLocation;
  amenitiesData: AmenityFilterItem[];
  isWithoutFilterParams?: boolean;
  isBookingDetail?: boolean;
  isPlacement?: boolean;
  isLink?: boolean;
  mapLink?: string;
  isMapOpened?: boolean;
  handleMap?: () => void;
}

const PlacementFilter: FC<FilterProps> = ({
  handler,
  locationForParamsString,
  amenitiesData,
  isWithoutFilterParams,
  isBookingDetail,
  isPlacement,
  mapLink,
  isLink,
  isMapOpened,
  handleMap,
}) => {
  useFilterDataFromQuery();
  const dispatch = useAppDispatch();
  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);

  const [cities] = useCitySelectorOptions();

  const smallScreen = useMediaQuery(`(max-width: ${breakpoints.xs}px)`);
  const largeScreen = useMediaQuery(`(min-width: ${breakpoints.md + 1}px)`);
  const tabletScreen = !smallScreen && !largeScreen;

  const {
    formState: {errors, isValid},
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    setValue,
    trigger,
  } = useForm<PlacementFilterValuesForm>({
    resolver: yupResolver(placementFormValidationSchema),
    mode: 'onChange',
  });

  const {
    fields: childAges,
    append: appendChild,
    remove: removeChild,
  } = useFieldArray({
    control,
    name: 'childAges',
  });

  const handleFormSubmit = () => {
    const data = {
      ...getValues(),
      arrivalDate: getValues('arrivalDate')?.format(DEFAULT_DATE_FORMAT),
      departureDate: getValues('departureDate')?.format(DEFAULT_DATE_FORMAT),
      childAges: getValues('childAges')
        .map(value => value.value)
        .filter((value): value is string => value !== null),
    };

    dispatch(setFilterValue(data));
    const {queriesString} = queryHandler(data, locationForParamsString);
    handler(queriesString);
  };

  useEffect(() => {
    reset({
      ...filterData,
      departureDate: dayjs(filterData.departureDate),
      arrivalDate: dayjs(filterData.arrivalDate),
      childAges: filterData.childAges.map(value => ({
        value,
        id: uuidV4(),
      })),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);

  const arrivalDate = watch('arrivalDate')?.format(DEFAULT_DATE_FORMAT);
  const departureDate = watch('departureDate')?.format(DEFAULT_DATE_FORMAT);

  const {nights} = useGetDaysAndNights({
    arrivalDate: arrivalDate || null,
    departureDate: departureDate || null,
  });

  return smallScreen ? (
    <PlacementMobileFilter
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      isValid={isValid}
      trigger={trigger}
      watch={watch}
      setValue={setValue}
      control={control}
      errors={errors}
      childAges={childAges}
      getValues={getValues}
      appendChild={appendChild}
      removeChild={removeChild}
      amenitiesData={amenitiesData}
    />
  ) : (
    <FiltersNavbar isBookingDetail={!!isBookingDetail}>
      <FilterWrapper isBookingDetail={!!isBookingDetail}>
        <FilterForm
          onSubmit={handleSubmit(handleFormSubmit)}
          isBookingDetail={!!isBookingDetail}>
          <FilterTitle>Найти</FilterTitle>

          <FilterFieldContainer>
            <Controller
              name="cityId"
              control={control}
              render={({field}) => {
                return (
                  <FilterSelect
                    label="Место / объект размещения"
                    options={cities}
                    {...field}
                    value={field.value}
                    emptyOption={{
                      value: SelectCustomOption.POPULAR,
                      title: 'Популярное',
                    }}
                    onChange={value => {
                      if (value === SelectCustomOption.POPULAR) {
                        field.onChange(null);
                        setValue('popular', true);
                        dispatch(
                          setFilterValue({
                            popular: true,
                            cityId: null,
                            amenityCodes: [],
                          }),
                        );
                      } else {
                        setValue('popular', false);
                        field.onChange(value);
                        dispatch(
                          setFilterValue({
                            popular: false,
                            cityId: value,
                            amenityCodes: [],
                          }),
                        );
                      }
                      // clear amenityCodes, because the list of amenities may change when we change cities
                      setValue('amenityCodes', []);
                      !isBookingDetail && handleFormSubmit();
                      void trigger();
                    }}
                    error={errors.cityId?.message}
                    placeholder="Укажите населенный пункт"
                  />
                );
              }}
            />
            <FilterDateWrapper>
              <FilterDateContainer>
                <Controller
                  control={control}
                  name="arrivalDate"
                  defaultValue={dayjs(filterData.arrivalDate)}
                  render={({field}) => (
                    <FilterDateInput
                      label="Дата заезда"
                      value={dayjs(field.value)}
                      format="dddd DD.MM.YYYY"
                      setValue={value => {
                        const currentDepartureDate = getValues('departureDate');
                        if (
                          value &&
                          (value.isAfter(currentDepartureDate) ||
                            value.isSame(currentDepartureDate))
                        ) {
                          setValue('departureDate', value.add(1, 'day'));
                        }
                        field.onChange(value);
                        !isBookingDetail && handleFormSubmit();
                      }}
                      placeholder="Выберите дату заезда"
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="departureDate"
                  render={({field}) => (
                    <FilterDateInput
                      label="Дата отъезда"
                      value={dayjs(field.value)}
                      format="dddd DD.MM.YYYY"
                      setValue={value => {
                        field.onChange(value);
                        !isBookingDetail && handleFormSubmit();
                      }}
                      placeholder="Выберите дату отъезда"
                      minDate={watch('arrivalDate')?.add(1, 'day') || undefined}
                    />
                  )}
                />
              </FilterDateContainer>

              <DaysLabel>{`${nights || 1} ${pluralizationFn(nights || 1, [
                'ночь',
                'ночи',
                'ночей',
              ])}`}</DaysLabel>
            </FilterDateWrapper>

            <PeopleSelector
              trigger={trigger}
              watch={watch}
              setValue={setValue}
              control={control}
              errors={errors}
              childAges={childAges}
              getValues={getValues}
              appendChild={appendChild}
              removeChild={removeChild}
              handleFormSubmit={handleFormSubmit}
              isBookingDetail={!!isBookingDetail}
            />

            {smallScreen && !isWithoutFilterParams && (
              <PlacementFilterParams
                amenitiesData={amenitiesData}
                isCollapsed
                control={control}
                filterData={filterData}
                handleFormSubmit={handleFormSubmit}
              />
            )}
          </FilterFieldContainer>

          <FilterBTn
            type="submit"
            dark
            disabled={!isValid}
            isBookingDetail={!!isBookingDetail}>
            Посмотреть
          </FilterBTn>
        </FilterForm>
      </FilterWrapper>
      {handleMap && (
        <BookingMapButton
          link={mapLink}
          isLink={!!isLink}
          isMapOpened={!!isMapOpened}
          mapOpenFn={handleMap}
          isBookingDetail={!!isBookingDetail}
          isPlacement={!!isPlacement}
        />
      )}
      {!smallScreen && !isWithoutFilterParams && (
        <PlacementFilterParams
          amenitiesData={amenitiesData}
          control={control}
          filterData={filterData}
          handleFormSubmit={handleFormSubmit}
          isCollapsed={tabletScreen}
          isTablet={tabletScreen}
        />
      )}
    </FiltersNavbar>
  );
};

export default PlacementFilter;
