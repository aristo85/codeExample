import { FC, useCallback, useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select/select';
import Button from 'modules/core/components/button';
import AsyncAutocomplete from 'modules/core/components/input-autocomplete/AsyncAutocomplete';
import {
  CoountryFilterProps,
  CoountryFilterValues,
} from './country-filter.interface';
import { useDispatch } from 'react-redux';
import { setCountryFilters } from '../../country.action';
import { SelectOption } from 'modules/core/components/input-autocomplete/async.interface';
import { getAllCountries } from '../../hooks/use-country-list-query';

export const CountriesFilterInitialValues: CoountryFilterValues = {
  // country_id: '',
  name: '',
  code: '',
  // created_from: '',
  is_blocked: 'all',
  // created_to: '',
  updated_from: '',
  updated_to: '',
};

const CountryFilter: FC<CoountryFilterProps> = ({
  isOpen,
  onClose,
  countryFilters,
  // onApply,
  // onReset,
}) => {
  const dispatch = useDispatch();

  // form
  const {
    register,
    handleSubmit,
    reset,
    control,
    // watch,
  } = useForm<CoountryFilterValues>({
    defaultValues: countryFilters ?? CountriesFilterInitialValues,
  });
  // const formValues = watch();

  // refs
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = useCallback(
    (data: CoountryFilterValues) => {
      // onApply && onApply(data);
      dispatch(setCountryFilters(data));
    },
    [dispatch]
  );

  const handleFormReset = useCallback(() => {
    reset(CountriesFilterInitialValues);
    dispatch(setCountryFilters(CountriesFilterInitialValues));
    // onReset && onReset();
  }, [reset, dispatch]);

  const loadOptions = async (inputValue: string) => {
    // let timer;
    // let data;

    // clearTimeout(timer);

    // timer = setTimeout(() => {
    //   console.log('timer')
    //   getData();
    // }, +'500');

    // const getData = async () => {
    // timer = undefined;

    return (
      await getAllCountries({
        page: 1,
        per_page: 300,
        q: {
          name_cont: inputValue,
        },
      })
    ).list.map((el) => ({ value: el.name, label: el.name }));
    // };

    // return data
  };

  useEffect(() => {
    countryFilters && reset(countryFilters);
  }, [countryFilters]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      {isOpen && (
        <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
          <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
            <Controller
              render={({ field }) => (
                <AsyncAutocomplete
                  placeholder='...'
                  label='Country name'
                  value={field.value}
                  onChange={(selected: SelectOption) =>
                    field.onChange(selected.value)
                  }
                  loadOptions={loadOptions}
                />
              )}
              name='name'
              control={control}
            />
            <Input
              placeholder='...'
              label='Country code'
              {...register('code')}
            />
            <Controller
              render={({ field }) => (
                <Select
                  value={field.value}
                  onChange={field.onChange}
                  label='Is blocked'
                  options={[
                    {
                      value: 'all',
                      text: 'All',
                    },
                    {
                      value: 'true',
                      text: 'Blocked',
                    },
                    {
                      value: 'false',
                      text: 'Active',
                    },
                  ]}
                />
              )}
              name='is_blocked'
              control={control}
            />
            <Input
              label='Updated from'
              type='date'
              {...register('updated_from')}
            />
            <Input label='Updated to' type='date' {...register('updated_to')} />
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
            <Button variant='primary' type='submit'>
              Apply
            </Button>
            <Button
              variant='default'
              className='mr-3'
              onClick={handleFormReset}
            >
              Reset
            </Button>
          </div>
        </form>
      )}
    </FilterBox>
  );
};

export default CountryFilter;
