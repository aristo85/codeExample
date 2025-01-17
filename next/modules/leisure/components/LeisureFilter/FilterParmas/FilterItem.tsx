import {useAppDispatch} from '@/modules/core/hooks';
import {setLeisureFilterValue} from '@/modules/leisure/leisureSlice';
import {
  FilterParamsCheckbox,
  FilterParamsCheckboxContainer,
  FilterParamsCount,
  FilterParamsItem,
} from '@/modules/placement/components/PlacementFilter/PlacementFilterParams/styles';
import React, {FC} from 'react';

type FilterItemProps = {
  isCollapsed?: boolean;
  filters: {title: string; value: string; count: number}[];
  handleFilterParams?: (data: string[]) => void;
  values: string[];
  name: string;
};

const FilterItem: FC<FilterItemProps> = ({
  isCollapsed,
  filters,
  handleFilterParams,
  values,
  name,
}) => {
  const dispatch = useAppDispatch();

  const setFilterParams = (data: {filterName: string; add: boolean}) => {
    const updatedFilterParams = data.add
      ? [...values, data.filterName]
      : values.filter(el => el !== data.filterName);
    dispatch(
      setLeisureFilterValue(
        name === 'travelMode'
          ? {travelMode: updatedFilterParams}
          : {excursionType: updatedFilterParams},
      ),
    );
    handleFilterParams && handleFilterParams(updatedFilterParams);
  };

  return (
    <>
      {filters?.map(item => (
        <FilterParamsItem key={item.title}>
          <FilterParamsCheckboxContainer>
            <FilterParamsCheckbox
              isCollapsed={isCollapsed}
              label={item.title}
              value={!!values.find(el => el === item.value)}
              setValue={value => {
                setFilterParams({filterName: item.value, add: value});
              }}
            />
          </FilterParamsCheckboxContainer>
          <FilterParamsCount>{item.count}</FilterParamsCount>
        </FilterParamsItem>
      ))}
    </>
  );
};

export default FilterItem;
