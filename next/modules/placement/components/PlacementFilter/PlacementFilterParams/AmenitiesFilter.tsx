import React from 'react';
import {
  FilterParamsCheckbox,
  FilterParamsCheckboxContainer,
  FilterParamsCount,
  FilterParamsItem,
} from './styles';
import {AmenityFilterItem} from '@/pages/placement';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {
  selectFilterValues,
  setFilterValue,
} from '@/modules/core/api/filterSlice';

type Props = {
  isCollapsed?: boolean;
  amenitiesData: AmenityFilterItem[];
  handleAmenitiesFilter?: (data: string[]) => void;
};

const AmenitiesFilter: React.FC<Props> = ({
  isCollapsed,
  amenitiesData,
  handleAmenitiesFilter,
}) => {
  const dispatch = useAppDispatch();
  const amenitiesState = useAppSelector(selectFilterValues).amenityCodes;

  const setAmenitiesFilter = (data: {filterName: string; add: boolean}) => {
    const updatedAmenities = data.add
      ? [...amenitiesState, data.filterName]
      : amenitiesState.filter(el => el !== data.filterName);
    dispatch(setFilterValue({amenityCodes: updatedAmenities}));
    handleAmenitiesFilter && handleAmenitiesFilter(updatedAmenities);
  };

  return (
    <>
      {amenitiesData?.map(item => (
        <FilterParamsItem key={item.code}>
          <FilterParamsCheckboxContainer>
            <FilterParamsCheckbox
              isCollapsed={isCollapsed}
              label={item.name}
              value={!!amenitiesState.find(el => el === item.code)}
              setValue={value => {
                setAmenitiesFilter({filterName: item.code, add: value});
              }}
            />
          </FilterParamsCheckboxContainer>
          <FilterParamsCount>{item.count}</FilterParamsCount>
        </FilterParamsItem>
      ))}
    </>
  );
};

export default AmenitiesFilter;
