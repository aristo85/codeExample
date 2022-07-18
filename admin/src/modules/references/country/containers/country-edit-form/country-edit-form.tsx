import { FC, useState } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';
// containers
// import UserBlockField from 'modules/user/containers/user-block-field';
import Spinner from 'modules/core/components/spinner';

import { CountryProps } from './country-edit-form-interface';
import { useCountryUpdateMutation } from '../../hooks/use-country-update-mutation';
// import classNames from 'classnames';

const CountryEditForm: FC<CountryProps> = ({
  country,
  onClose,
  forceRerender,
}) => {
  const [isBlocked, setisBlocked] = useState(country.is_blocked);
  // queries
  const countryUpdateMutation = useCountryUpdateMutation(country.code);

  const onUpdate = () => {
    if (country) {
      countryUpdateMutation
        .mutateAsync({ is_blocked: isBlocked })
        .then((res) => {
          forceRerender && forceRerender();
          res && onClose();
        });
    }
  };

  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Spinner isLoading={countryUpdateMutation.isLoading} size='8'>
        <Input placeholder={country.name} disabled label={'Country Name'} />
        <Input placeholder={country.code} disabled label={'Country Code'} />
        <Select
          value={isBlocked ? 'Blocked' : 'Active'}
          onChange={(data) => setisBlocked(data === 'Blocked')}
          label={'Is active'}
          options={[
            {
              value: 'Active',
              text: 'Active',
            },
            {
              value: 'Blocked',
              text: 'Blocked',
            },
          ]}
        />
        <Input placeholder={'31 Jun 2021'} disabled label={'Crated date'} />

        <ActionsWrapper className='absolute left-0 -bottom-6'>
          <Button
            // variant='primary'
            onClick={() => onUpdate()}
            variant={country.is_blocked === isBlocked ? 'disabled' : 'primary'}
            disabled={country.is_blocked === isBlocked}
          >
            Save
          </Button>
          {/* <Button variant='default'>Discard changes</Button> */}
        </ActionsWrapper>
      </Spinner>
    </div>
  );
};

export default CountryEditForm;
