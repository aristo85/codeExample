import React, {FC, useState} from 'react';
import {
  ArrowWrapper,
  FilterParamsCheckbox,
  FilterParamsCheckboxContainer,
  FilterParamsItem,
  FilterParamsItemsContainer,
  FilterParamsTitle,
  FilterParamsTitleButton,
  FilterParamsWrapper,
} from './styles';
import {Controller, Control} from 'react-hook-form';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {useAppDispatch} from '@/modules/core/hooks';
import {setFilterValue} from '@/modules/core/api/filterSlice';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';
import {PlacementFilterValuesForm} from '@/modules/home/components/Filters';
import AmenitiesFilter from './AmenitiesFilter';
import {AmenityFilterItem} from '@/pages/placement';

export interface FilterProps {
  control: Control<PlacementFilterValuesForm>;
  filterData?: FilterValues<string>;
  handleFormSubmit?: () => void;
  amenitiesData: AmenityFilterItem[];
  isCollapsed?: boolean;
  isTablet?: boolean;
}

const PlacementFilterParams: FC<FilterProps> = ({
  control,
  filterData,
  handleFormSubmit,
  isCollapsed,
  amenitiesData,
  isTablet,
}) => {
  const dispatch = useAppDispatch();

  const [isParamsOpen, setIsParamsOpen] = useState<boolean>(false);

  const handlerOpenParams = () => {
    setIsParamsOpen(prev => !prev);
  };

  const FilterParams = (
    <>
      <Controller
        control={control}
        name="specialOffer"
        render={({field}) => (
          <FilterParamsItem>
            <FilterParamsCheckboxContainer>
              <FilterParamsCheckbox
                isCollapsed={isCollapsed}
                label="спецпредложения"
                value={filterData?.specialOffer || !!field.value}
                setValue={value => {
                  dispatch(
                    setFilterValue({
                      popular: value,
                    }),
                  );
                  field.onChange(value);
                  handleFormSubmit && handleFormSubmit();
                }}
              />
            </FilterParamsCheckboxContainer>
          </FilterParamsItem>
        )}
      />

      <Controller
        control={control}
        name="breakfast"
        render={({field}) => (
          <FilterParamsItem>
            <FilterParamsCheckboxContainer>
              <FilterParamsCheckbox
                isCollapsed={isCollapsed}
                label="Завтрак включён"
                value={filterData?.breakfast || field.value}
                setValue={value => {
                  dispatch(setFilterValue({breakfast: value}));
                  field.onChange(value);
                  handleFormSubmit && handleFormSubmit();
                }}
              />
            </FilterParamsCheckboxContainer>
          </FilterParamsItem>
        )}
      />
    </>
  );

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

      {(!isCollapsed || isParamsOpen) && (
        <FilterParamsItemsContainer isCollapsed={isCollapsed}>
          {FilterParams}
          <Controller
            control={control}
            name="amenityCodes"
            render={({field}) => (
              <AmenitiesFilter
                amenitiesData={amenitiesData}
                isCollapsed={isCollapsed}
                handleAmenitiesFilter={value => {
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

export default PlacementFilterParams;
