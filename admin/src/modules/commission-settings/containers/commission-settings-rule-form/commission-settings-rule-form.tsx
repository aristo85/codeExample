import { FC } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';

import type { CommissionSettingsRuleFormProps } from './commission-settings-rule-form.interface';
import ActionsWrapper from '../../../core/components/actions-wrapper';
import Button from '../../../core/components/button';

const CommissionSettingsRuleForm: FC<CommissionSettingsRuleFormProps> = () => {
  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Input placeholder={'unique rule number'} disabled label={'Rule ID'} />
      <Input placeholder={'enter a rule name'} label={'Rule name'} />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Transaction type'}
        options={[
          {
            value: 'Deposit',
            text: 'Balance',
          },
          {
            value: 'Withdrawal',
            text: 'Balance',
          },
          {
            value: 'Transfer',
            text: 'Balance',
          },
          {
            value: 'Exchange',
            text: 'Balance',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Client type'}
        options={[
          {
            value: 'Busines',
            text: 'Balance',
          },
          {
            value: 'Personal',
            text: 'Balance',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Customer type'}
        options={[
          {
            value: 'VIP',
            text: 'Balance',
          },
          {
            value: 'Regular',
            text: 'Balance',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Customer type'}
        options={[
          {
            value: 'USD',
            text: 'Balance',
          },
          {
            value: 'EUR',
            text: 'Balance',
          },
          {
            value: 'BTC',
            text: 'Balance',
          },
          {
            value: 'ETH',
            text: 'Balance',
          },
        ]}
      />
      <Input
        placeholder={'from 0 to 10'}
        label={'Minimal kwallet commission'}
      />
      <Input placeholder={'from 0 to 10'} label={'Kwallet commission %'} />
      <Input placeholder={'from 0 to 10'} label={' Fixed kwallet commission'} />
      <Input
        placeholder={'from 0 to 10'}
        label={'Minimal Partner commission'}
      />
      <Input placeholder={'from 0 to 10'} label={'Partner commission %'} />
      <Input
        placeholder={'from 0 to 10'}
        label={' Fixed Partner commission'}
        className='mb-16'
      />
      <ActionsWrapper className='absolute left-0 -bottom-6'>
        <Button variant='primary'>Save</Button>
        <Button variant='default'>Discard changes</Button>
      </ActionsWrapper>
    </div>
  );
};

export default CommissionSettingsRuleForm;
