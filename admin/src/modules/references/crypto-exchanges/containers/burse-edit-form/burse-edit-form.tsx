import { FC } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';

import { BurseEditProps } from './burse-edit-form-interface';

const BurseEditForm: FC<BurseEditProps> = () => {
  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Input value={'Fiat Burse # 1'} label={'Burse Name'} />
      <Select
        value='...'
        onChange={() => {}}
        label={'Is active ?'}
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

export default BurseEditForm;
