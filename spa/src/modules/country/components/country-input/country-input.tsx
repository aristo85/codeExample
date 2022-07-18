import { FC, useMemo } from 'react';
// components
import AutocompleteInput from 'modules/core/components/autocomplete-input';
import Spinner from 'modules/core/components/spinner';
// hooks
import { useCountryListQuery } from 'modules/country/hooks/use-country-list-query';
// types
import type { AutocompleteOption } from 'modules/core/components/autocomplete-input/autocomplete-input.interface';

import type { CountryInputProps } from './country-input.interface';

const CountryInput: FC<CountryInputProps> = ({ ...props }) => {
  // queries
  const countryList = useCountryListQuery();
  // memo
  const countryOptions = useMemo<AutocompleteOption[]>(() => {
    if (!countryList.data) {
      return [];
    }

    return countryList.data.map((country) => ({
      key: country.name,
      name: country.name,
    }));
  }, [countryList.data]);

  return (
    <AutocompleteInput
      label='Country'
      options={countryOptions}
      endAdornment={<Spinner isLoading={countryList.isLoading} size='small' />}
      {...props}
    />
  );
};

export default CountryInput;
