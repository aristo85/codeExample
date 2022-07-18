import { FC } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';

import { StatusEditProps } from './status-edit-form-interface';

const StatusEditForm: FC<StatusEditProps> = () => {
  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Input placeholder={'VIP'} disabled label={'Status type'} />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Active'}
        options={[
          {
            value: 'Active',
            text: 'Active',
          },
          {
            value: 'Not active',
            text: 'Not active',
          },
        ]}
      />
      <ActionsWrapper className='absolute left-0 -bottom-6'>
        <Button variant='primary'>Save</Button>
        <Button variant='default'>Discard changes</Button>
      </ActionsWrapper>
    </div>
  );
};

export default StatusEditForm;
