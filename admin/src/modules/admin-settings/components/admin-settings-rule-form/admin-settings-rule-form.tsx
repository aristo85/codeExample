import { FC } from 'react';
// components
import Select from 'modules/core/components/select';
import Button from 'modules/core/components/button';
import ActionsWrapper from 'modules/core/components/actions-wrapper';

import type { AdminSettingRuleProps } from './admin-settings-rule-form.interface';

const ClientProfileRuleForm: FC<AdminSettingRuleProps> = () => {
  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Section'}
        options={[
          {
            value: 'Balance',
            text: 'Balance',
          },
          {
            value: 'Wallet',
            text: 'Wallet',
          },
          {
            value: 'Cards',
            text: 'Cards',
          },
          {
            value: 'Exchange',
            text: 'Exchange',
          },
          {
            value: 'Transfer',
            text: 'Transfer',
          },
          {
            value: 'Deposit',
            text: 'Deposit',
          },
          {
            value: 'Withdraw',
            text: 'Withdraw',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'View'}
        options={[
          {
            value: 'true',
            text: 'True',
          },
          {
            value: 'false',
            text: 'False',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Read/Write'}
        options={[
          {
            text: 'Balance',
            value: 'False',
          },
          {
            value: 'false',
            text: 'True',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Download'}
        options={[
          {
            value: 'true',
            text: 'True',
          },
          {
            value: 'false',
            text: 'False',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Deletion'}
        options={[
          {
            value: 'true',
            text: 'True',
          },
          {
            value: 'false',
            text: 'False',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Detail Reports'}
        options={[
          {
            value: 'true',
            text: 'True',
          },
          {
            value: 'false',
            text: 'False',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Role'}
        options={[
          {
            value: 'Administrator',
            text: 'Administrator',
          },
          {
            value: 'Moderator',
            text: 'Moderator',
          },
          {
            value: 'Support',
            text: 'Support',
          },
        ]}
      />
      <Select
        value='Balance'
        onChange={() => {}}
        label={'Classes'}
        options={[
          {
            value: 'SuperPuperMegaAdmin',
            text: 'SuperPuperMegaAdmin',
          },
          {
            value: 'SuperPuperMegaAdmin',
            text: 'SuperPuperMegaAdmin',
          },
          {
            value: 'SuperPuperMegaAdmin',
            text: 'SuperPuperMegaAdmin',
          },
        ]}
      />
      <ActionsWrapper className='absolute -bottom-6 left-0'>
        <Button variant='primary'>Save</Button>
        <Button variant='default'>Discard changes</Button>
      </ActionsWrapper>
    </div>
  );
};

export default ClientProfileRuleForm;
