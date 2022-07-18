import { FC, useMemo } from 'react';
// components
import AutocompleteInput from 'modules/core/components/autocomplete-input';
import Spinner from 'modules/core/components/spinner';
// hooks
import { useCityListByCountryNameQuery } from 'modules/country/hooks/use-city-list-by-country-name-query';
// types
import type { AutocompleteOption } from 'modules/core/components/autocomplete-input/autocomplete-input.interface';

import type { CitiesInputProps } from './cities-input.interface';

const CityInput: FC<CitiesInputProps> = ({ country, ...props }) => {
  // queries
  const cityList = useCityListByCountryNameQuery(country);
  // memo
  const cityOptions = useMemo<AutocompleteOption[]>(() => {
    if (!cityList.data) {
      return [];
    }

    return cityList.data.map((city) => ({
      key: city,
      name: city,
    }));
  }, [cityList.data]);

  return (
    <AutocompleteInput
      label='City'
      options={cityOptions}
      endAdornment={<Spinner isLoading={cityList.isLoading} size='small' />}
      {...props}
    />
  );
};

export default CityInput;
