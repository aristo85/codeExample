import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
// components
import ActionsWrapper from 'modules/core/components/actions-wrapper/actions-wrapper';
import Input from 'modules/core/components/input/input';
import Button from 'modules/core/components/button/button';
import Toggle from 'modules/core/components/toggle/toggle';

import { NewCountryProps } from './reference-new-country.interface';

const NewCountry: FC<NewCountryProps> = () => {
  const [enabled, setEnabled] = useState(false);

  const history = useHistory();

  const handleCancel = () => {
    history.push('/reference-countries');
  };

  return (
    <ActionsWrapper>
      <form className='w-full grid gap-y-4'>
        <div>
          <Input placeholder={'...'} label={'Country Name'} />
        </div>
        <div>
          <Input placeholder={'...'} label={'Country Code'} />
        </div>

        <div>
          <Toggle
            label='Country blocked'
            enabled={enabled}
            // @ts-ignore
            onChange={setEnabled}
          />
        </div>
        <div className='mt-4'>
          <Button variant='primary'>Create</Button>
          <Button onClick={handleCancel} className='ml-4'>
            Cancel
          </Button>
        </div>
      </form>
    </ActionsWrapper>
  );
};

export default NewCountry;
