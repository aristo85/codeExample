import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {
  FilterDateInput,
  FilterSelect,
  FilterWrapper,
  FilterForm,
  FilterBTn,
  FilterDateWrapper,
} from './styles';
import {
  Control,
  Controller,
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';

import {setFilterValue} from '@/modules/core/api/filterSlice';
import {useFilterDataFromQuery} from '@/modules/core/hooks/useFilterDataFromParams';
import PeopleSelector from '@/modules/core/components/PeopleDropdown';
import PlacementFilterParams from '../PlacementFilterParams';
import {useCitySelectorOptions} from '@/modules/core/hooks/useCitySelectorOptions';
import {SelectCustomOption} from '@/modules/home/components/Filters/HomeSelect';
import {PlacementFilterValuesForm} from '@/modules/home/components/Filters';
import {AmenityFilterItem} from '@/pages/placement';

type Props = {
  handleSubmit: UseFormHandleSubmit<PlacementFilterValuesForm>;
  handleFormSubmit: (data: PlacementFilterValuesForm) => void;
  isValid: boolean;
  childAges: FieldArrayWithId<PlacementFilterValuesForm, 'childAges', 'id'>[];
  getValues: UseFormGetValues<PlacementFilterValuesForm>;
  appendChild: UseFieldArrayAppend<PlacementFilterValuesForm, 'childAges'>;
  removeChild: UseFieldArrayRemove;
  errors: FieldErrors<PlacementFilterValuesForm>;
  control: Control<PlacementFilterValuesForm, any>;
  setValue: UseFormSetValue<PlacementFilterValuesForm>;
  watch: UseFormWatch<PlacementFilterValuesForm>;
  trigger: UseFormTrigger<PlacementFilterValuesForm>;
  amenitiesData: AmenityFilterItem[];
};

const PlacementMobileFilter: FC<Props> = ({
  handleSubmit,
  handleFormSubmit,
  isValid,
  childAges,
  getValues,
  appendChild,
  removeChild,
  errors,
  control,
  setValue,
  watch,
  trigger,
  amenitiesData,
}) => {
  const dispatch = useDispatch();

  const [cities] = useCitySelectorOptions();

  useFilterDataFromQuery();

  return (
    <FilterWrapper>
      <FilterForm onSubmit={handleSubmit(handleFormSubmit)}>
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
                    dispatch(setFilterValue({popular: true, cityId: null}));
                  } else {
                    setValue('popular', false);
                    field.onChange(value);
                    dispatch(setFilterValue({popular: false, cityId: value}));
                  }
                  void trigger();
                }}
                placeholder="Укажите населенный пункт"
              />
            );
          }}
        />

        <FilterDateWrapper>
          <Controller
            control={control}
            name="arrivalDate"
            render={({field}) => (
              <FilterDateInput
                label="Дата заезда"
                value={field.value}
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
                value={field.value}
                format="dddd DD.MM.YYYY"
                setValue={value => {
                  field.onChange(value);
                }}
                placeholder="Выберите дату отъезда"
                minDate={watch('arrivalDate')?.add(1, 'day') || undefined}
              />
            )}
          />
        </FilterDateWrapper>

        <PeopleSelector
          childAges={childAges}
          getValues={getValues}
          appendChild={appendChild}
          removeChild={removeChild}
          errors={errors}
          control={control}
          setValue={setValue}
          watch={watch}
          trigger={trigger}
        />

        <PlacementFilterParams
          isCollapsed
          control={control}
          amenitiesData={amenitiesData}
        />

        <FilterBTn type="submit" dark disabled={!isValid}>
          Посмотреть
        </FilterBTn>
      </FilterForm>
    </FilterWrapper>
  );
};

export default PlacementMobileFilter;
