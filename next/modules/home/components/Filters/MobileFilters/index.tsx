import React, {FC, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {
  FilterDateInput,
  FilterSelect,
  FilterWrapper,
  FilterForm,
  FilterCheckbox,
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
import {
  setFilterValue,
  useGetCitiesQuery,
} from '@/modules/core/api/filterSlice';
import {useFilterDataFromQuery} from '@/modules/core/hooks/useFilterDataFromParams';
import PeopleSelector from '@/modules/core/components/PeopleDropdown';
import {PlacementType} from '@/modules/core/api/model/placement/placementType';
import {PlacementFilterValuesForm} from '@/modules/home/components/Filters';

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
};

const MobileFilters: FC<Props> = ({
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
}) => {
  const dispatch = useDispatch();
  const {data} = useGetCitiesQuery();
  const cities: {title: string; value: string}[] | [] = useMemo(
    () =>
      data?.data.cityList.map(city => {
        return {
          title: city.name,
          value: String(city.id),
        };
      }) || [],
    [data],
  );

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
                label="Место / название объекта"
                options={cities}
                {...field}
                value={field.value}
                onChange={value => {
                  dispatch(setFilterValue({cityId: value}));
                  field.onChange(value);
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
                setValue={value => {
                  field.onChange(value);
                }}
                placeholder="Выберите дату заезда"
                maxDate={watch('departureDate')}
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
                setValue={value => {
                  field.onChange(value);
                }}
                placeholder="Выберите дату отъезда"
                minDate={watch('arrivalDate')}
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

        <Controller
          control={control}
          name="placementType"
          render={({field}) => (
            <FilterCheckbox
              label="Отели"
              value={field.value === PlacementType.HOTEL}
              setValue={value => {
                const placementType = value ? PlacementType.HOTEL : null;
                dispatch(
                  setFilterValue({
                    placementType,
                  }),
                );
                field.onChange(placementType);
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="breakfast"
          render={({field}) => (
            <FilterCheckbox
              label="Завтрак включён"
              value={field.value}
              setValue={value => {
                dispatch(setFilterValue({breakfast: value}));
                field.onChange(value);
              }}
            />
          )}
        />

        <FilterBTn type="submit" dark disabled={!isValid}>
          Посмотреть
        </FilterBTn>
      </FilterForm>
    </FilterWrapper>
  );
};

export default MobileFilters;
