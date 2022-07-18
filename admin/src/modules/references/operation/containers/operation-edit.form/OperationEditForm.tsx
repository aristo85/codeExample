import { FC } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';
import { OperationEditProps } from './operation-edit-form-interface';
// containers
// import UserBlockField from 'modules/user/containers/user-block-field';

const OperationEditForm: FC<OperationEditProps> = () => {
  // queries

  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Input placeholder={'type'} disabled label={'type'} />
      {/* <Input placeholder={'666999'} label={'Country Code'} /> */}
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
      {/* <Input placeholder={'31 Jun 2021'} disabled label={'Crated date'} /> */}

      <ActionsWrapper className='absolute left-0 -bottom-6'>
        <Button variant='primary'>Save</Button>
        <Button variant='default'>Discard changes</Button>
      </ActionsWrapper>
    </div>
  );
};

export default OperationEditForm;
