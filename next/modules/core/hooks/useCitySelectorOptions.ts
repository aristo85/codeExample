import {useMemo} from 'react';
import {useGetCitiesQuery} from '../api/filterSlice';

export const useCitySelectorOptions = () => {
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

  return [cities];
};
