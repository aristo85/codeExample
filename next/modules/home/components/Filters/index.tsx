import React, {FC, useEffect, useRef, useState} from 'react';
import {
  FilterWrapper,
  FilterForm,
  FilterBTn,
  FilterSelectorContainer,
  HomeCitySelect,
  HomeAdultsNumberInput,
} from './styles';
import {useForm, Controller, useFieldArray} from 'react-hook-form';
import {FilterValues} from './types';
import dayjs, {Dayjs} from 'dayjs';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {
  selectFilterValues,
  setFilterValue,
} from '@/modules/core/api/filterSlice';
import {placementFormValidationSchema} from '@/modules/placement/constants';
import {useFilterDataFromQuery} from '@/modules/core/hooks/useFilterDataFromParams';
import {yupResolver} from '@hookform/resolvers/yup';
import {v4 as uuidV4} from 'uuid';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {PlacementType} from '@/modules/core/api/model/placement/placementType';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import HomeChildrenSelector from './HomeChildrenSelector';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {useOutsideClick} from '@/modules/core/hooks/useOutsideClick';
import FilterCalendar from '@/modules/core/components/FilterCalendar';
import {SelectCustomOption} from '@/modules/home/components/Filters/HomeSelect';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export interface FilterProps {
  handler: (value: string) => void;
  locationForParamsString: QueryLocation;
}

export type PlacementFilterValuesForm = {
  arrivalDate: Dayjs | null;
  departureDate: Dayjs | null;
  cityId: string | null;
  rating: boolean;
  numOfAdult: number;
  childAges: {value: string | null}[];
  sort?: string[];
  offset?: string | number;
  limit?: string | number;
  roomId?: null | number | string;
  placementType: PlacementType | null;
  breakfast: boolean;
  specialOffer: boolean;
  popular?: boolean;
  amenityCodes?: string[];
};

const FiltersHome: FC<FilterProps> = ({handler, locationForParamsString}) => {
  useFilterDataFromQuery();
  const dispatch = useAppDispatch();
  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);
  const [isDateBlockOpened, setIsDateBlockOpened] = useState<boolean>(false);
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);
  const [cities] = useCitySelectorOptions();

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

  const filterContainerRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: filterContainerRef,
    handler: () => setIsDateBlockOpened(false),
  });

  return (
    <FilterWrapper>
      <FilterForm
        onSubmit={handleSubmit(handleFormSubmit)}
        isDesktop={!isScreenSm}>
        <Controller
          name="cityId"
          control={control}
          render={({field}) => {
            return (
              <HomeCitySelect
                options={cities}
                value={field.value}
                onChange={value => {
                  if (value === SelectCustomOption.POPULAR) {
                    field.onChange(null);
                    setValue('popular', true);
                  } else {
                    setValue('popular', false);
                    field.onChange(value);
                  }
                  void trigger();
                }}
                placeholder="Популярные направления"
              />
            );
          }}
        />

        <FilterCalendar
          ref={filterContainerRef}
          isMobile={isScreenXs}
          isOpen={isDateBlockOpened}
          isOpenToggleHandler={setIsDateBlockOpened}
          numOfMonths={2}
          arrivalDateValue={watch('arrivalDate')}
          departureDateValue={watch('departureDate')}
          onChangeArrivalDateValue={date => {
            setValue('arrivalDate', date);
            void trigger();
          }}
          onChangeDepartureDateValue={date => {
            setValue('departureDate', date);
            void trigger();
          }}
        />

        <FilterSelectorContainer>
          <Controller
            control={control}
            name="numOfAdult"
            defaultValue={filterData.numOfAdult}
            render={({field}) => (
              <HomeAdultsNumberInput
                isMobile={isScreenXs}
                value={field.value}
                minValue={1}
                setValue={value => {
                  field.onChange(value);
                }}
                label={
                  isScreenXs
                    ? 'Кол-во взрослых'
                    : pluralizationFn(field.value, [
                        'взрослый',
                        'взрослых',
                        'взрослых',
                      ])
                }
              />
            )}
          />

          <HomeChildrenSelector
            trigger={trigger}
            watch={watch}
            control={control}
            errors={errors}
            value={childAges}
            appendChild={appendChild}
            removeChild={removeChild}
            setValue={setValue}
            isMobile={isScreenXs}
          />
        </FilterSelectorContainer>
        <FilterBTn type="submit" dark disabled={!isValid}>
          Найти
        </FilterBTn>
      </FilterForm>
    </FilterWrapper>
  );
};

export default FiltersHome;
