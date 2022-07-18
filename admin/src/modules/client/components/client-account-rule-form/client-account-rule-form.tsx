import { FC } from 'react';

// components
import Icon from 'modules/core/components/icon';
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';

import type { ClientAccountRuleProps } from './client-account-rule-form.interface';

const ClientProfileRuleForm: FC<ClientAccountRuleProps> = () => {
  return (
    <div className='grid grid-cols-1 m-auto xs:mx-2 sm:px-5 bg-white rounded-lg md:w-full lg:9/12'>
      <div className='flex justify-center py-4'>
        <div className='flex bg-gray-200 rounded-full md:p-4 p-2 border-2 border-gray-300'>
          <Icon className='h-8 w-8' name='kwalletLogo' />
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex'>
          <h1 className='text-gray-600 font-bold md:text-2xl text-xl'>
            New Rule Creation Form
          </h1>
        </div>
      </div>

      <div className='grid grid-cols-1 mt-5 '>
        <Input placeholder={'666999'} disabled label={'Client ID'} />
      </div>

      <div className='grid grid-cols-1 mt-5 '>
        <Input placeholder={'Client title'} label={'TITLE'} />
      </div>

      <div className='grid grid-rows-2 grid-flow-col items-center'>
        <Select
          value='Balance'
          onChange={() => {}}
          label={'TYPE'}
          options={[
            {
              value: 'Personal',
              text: 'Balance',
            },
            {
              value: 'Business',
              text: 'Balance',
            },
          ]}
        />
      </div>

      <div className='grid grid-rows-2 grid-flow-col items-center'>
        <Select
          value='Balance'
          onChange={() => {}}
          label={'AUTH'}
          options={[
            {
              value: 'on',
              text: 'Balance',
            },
            {
              value: 'off',
              text: 'Balance',
            },
          ]}
        />
      </div>

      <div className='grid grid-rows-2 grid-flow-col items-center'>
        <Select
          value='Balance'
          onChange={() => {}}
          label={'LOGOUT'}
          options={[
            {
              value: '30min',
              text: 'Balance',
            },
            {
              value: '15min',
              text: 'Balance',
            },
            {
              value: '2min',
              text: 'Balance',
            },
          ]}
        />
      </div>

      <div className='grid grid-cols-1 mt-5 '>
        <Select
          value='Balance'
          onChange={() => {}}
          label={'HANDLING'}
          options={[
            {
              value: 'enabled',
              text: 'Balance',
            },
            {
              value: 'disabled',
              text: 'Balance',
            },
          ]}
        />
      </div>

      <div className='flex items-center justify-center gap-4 pt-5 pb-5'>
        <button className='w-auto bg-red-500 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
          Cancel
        </button>
        <button className='w-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
          Change
        </button>
      </div>
    </div>
  );
};

export default ClientProfileRuleForm;
