import React, {FC, useState} from 'react';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';
import {
  ArrowWrapper,
  FilterParamsCheckbox,
  FilterParamsCheckboxContainer,
  FilterParamsCount,
  FilterParamsItem,
  FilterParamsItemsContainer,
  FilterParamsTitle,
  FilterParamsTitleButton,
  FilterParamsWrapper,
  Divider,
} from '@/modules/placement/components/PlacementFilter/PlacementFilterParams/styles';
import {Control, Controller, UseFormSetValue} from 'react-hook-form';
import {
  LeisureFilterParamsData,
  LeisureFilterValuesForm,
  LeisureType,
} from '@/modules/leisure/types';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {
  selectLeisureFilterValues,
  setLeisureFilterValue,
} from '@/modules/leisure/leisureSlice';
import {getListOfFilters} from '@/modules/leisure/helpers';
import FilterItem from './FilterItem';

type FilterParamsProps = {
  control: Control<LeisureFilterValuesForm>;
  handleFormSubmit?: () => void;
  filtersData: LeisureFilterParamsData;
  setValue: UseFormSetValue<LeisureFilterValuesForm>;
  isCollapsed?: boolean;
  isTablet?: boolean;
};

const FilterParams: FC<FilterParamsProps> = ({
  control,
  handleFormSubmit,
  isCollapsed,
  filtersData,
  isTablet,
  setValue,
}) => {
  const dispatch = useAppDispatch();
  const leisureFilterState = useAppSelector(selectLeisureFilterValues);

  const [isParamsOpen, setIsParamsOpen] = useState<boolean>(false);

  const {travelModeParams, excursionTypeParams, leisureTypeParams} =
    getListOfFilters(filtersData);

  const handlerOpenParams = () => {
    setIsParamsOpen(prev => !prev);
  };

  const isOnlyGuide = leisureFilterState.type === LeisureType.GUIDE;
  const isOnlyExcursion =
    leisureFilterState.type === LeisureType.EXCURSION ||
    leisureFilterState.excursionType.length > 0;

  return (
    <FilterParamsWrapper isCollapsed={isCollapsed} $isTablet={isTablet}>
      {!isCollapsed ? (
        <FilterParamsTitle>Фильтры</FilterParamsTitle>
      ) : (
        <FilterParamsTitleButton onClick={handlerOpenParams}>
          Фильтры
          <ArrowWrapper isOpen={isParamsOpen}>
            <ArrowSelectUp />
          </ArrowWrapper>
        </FilterParamsTitleButton>
      )}
      {isTablet && isParamsOpen && <Divider />}
      {(!isCollapsed || isParamsOpen) && (
        <FilterParamsItemsContainer isCollapsed={isCollapsed}>
          <Controller
            control={control}
            name="specialOffer"
            render={({field}) => (
              <FilterParamsItem>
                <FilterParamsCheckboxContainer>
                  <FilterParamsCheckbox
                    isCollapsed={isCollapsed}
                    label="спецпредложения"
                    value={leisureFilterState?.specialOffer || !!field.value}
                    setValue={value => {
                      dispatch(
                        setLeisureFilterValue({
                          specialOffer: value,
                        }),
                      );
                      field.onChange(value);
                      handleFormSubmit && handleFormSubmit();
                    }}
                  />
                </FilterParamsCheckboxContainer>
                <FilterParamsCount>
                  {filtersData.specialOfferCount}
                </FilterParamsCount>
              </FilterParamsItem>
            )}
          />
          <Controller
            control={control}
            name="withChildren"
            render={({field}) => (
              <FilterParamsItem>
                <FilterParamsCheckboxContainer>
                  <FilterParamsCheckbox
                    isCollapsed={isCollapsed}
                    label="Можно с детьми"
                    value={leisureFilterState?.withChildren || !!field.value}
                    setValue={value => {
                      dispatch(
                        setLeisureFilterValue({
                          withChildren: value,
                        }),
                      );
                      field.onChange(value);
                      handleFormSubmit && handleFormSubmit();
                    }}
                  />
                </FilterParamsCheckboxContainer>
                <FilterParamsCount>
                  {filtersData.withChildrenCount}
                </FilterParamsCount>
              </FilterParamsItem>
            )}
          />

          {!isOnlyGuide && (
            <Controller
              control={control}
              name="type"
              render={({field}) => {
                const fieldValue =
                  field?.value === LeisureType.EXCURSION ||
                  leisureFilterState.type === LeisureType.EXCURSION;
                return (
                  <FilterParamsItem>
                    <FilterParamsCheckboxContainer>
                      <FilterParamsCheckbox
                        isCollapsed={isCollapsed}
                        label="Экскурсия"
                        value={fieldValue}
                        setValue={value => {
                          const newValue = value ? LeisureType.EXCURSION : null;
                          dispatch(
                            setLeisureFilterValue({
                              type: newValue,
                            }),
                          );
                          field.onChange(newValue);
                          handleFormSubmit && handleFormSubmit();
                        }}
                      />
                    </FilterParamsCheckboxContainer>
                    <FilterParamsCount>
                      {filtersData.typeExcursionCount}
                    </FilterParamsCount>
                  </FilterParamsItem>
                );
              }}
            />
          )}
          {!isOnlyExcursion && (
            <Controller
              control={control}
              name="type"
              render={({field}) => {
                const fieldValue =
                  field?.value === LeisureType.GUIDE ||
                  leisureFilterState.type === LeisureType.GUIDE;
                return (
                  <FilterParamsItem>
                    <FilterParamsCheckboxContainer>
                      <FilterParamsCheckbox
                        isCollapsed={isCollapsed}
                        label="Гид"
                        value={fieldValue}
                        setValue={value => {
                          const newValue = value ? LeisureType.GUIDE : null;
                          dispatch(
                            setLeisureFilterValue({
                              type: newValue,
                              excursionType: [],
                            }),
                          );
                          field.onChange(newValue);
                          setValue('excursionType', []);
                          handleFormSubmit && handleFormSubmit();
                        }}
                      />
                    </FilterParamsCheckboxContainer>
                    <FilterParamsCount>
                      {filtersData.typeGuideCount}
                    </FilterParamsCount>
                  </FilterParamsItem>
                );
              }}
            />
          )}

          {!isOnlyGuide && (
            <Controller
              control={control}
              name="excursionType"
              render={({field}) => (
                <FilterItem
                  name="excursionType"
                  values={leisureFilterState.excursionType}
                  filters={excursionTypeParams}
                  isCollapsed={isCollapsed}
                  handleFilterParams={value => {
                    field.onChange(value);
                    handleFormSubmit && handleFormSubmit();
                  }}
                />
              )}
            />
          )}

          <Controller
            control={control}
            name="travelMode"
            render={({field}) => (
              <FilterItem
                name="travelMode"
                values={leisureFilterState.travelMode}
                filters={travelModeParams}
                isCollapsed={isCollapsed}
                handleFilterParams={value => {
                  field.onChange(value);
                  handleFormSubmit && handleFormSubmit();
                }}
              />
            )}
          />
        </FilterParamsItemsContainer>
      )}
    </FilterParamsWrapper>
  );
};

export default FilterParams;
