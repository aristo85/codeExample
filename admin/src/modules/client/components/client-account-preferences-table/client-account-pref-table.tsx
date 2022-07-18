import { FC, useState } from 'react';
import classNames from 'classnames';
// components
import Table from 'modules/core/components/table';
import ClientAccountRuleForm from '../client-account-rule-form';
import SideBar from 'modules/core/components/side-bar/side-bar';

import type { ClientAccPrefListProps } from './client-account-pref-table.interface';

type Setting = {
  id: string;
  client_id: string;
  title: string;
  type: string;
  auth: string;
  logout: string;
  handling: string;
};

const settings: Setting[] = [
  {
    id: '1',
    client_id: '222333',
    title: 'Client title',
    type: 'Personal',
    auth: 'on',
    logout: '15 min',
    handling: 'enabled',
  },
  {
    id: '2',
    client_id: '222333',
    title: 'Client title',
    type: 'Business',
    auth: 'off',
    logout: '2 min',
    handling: 'enabled',
  },
  {
    id: '3',
    client_id: '222333',
    title: 'Client title',
    type: 'Personal',
    auth: 'on',
    logout: '15 min',
    handling: 'enabled',
  },
];

const ClientAccPrefTable: FC<ClientAccPrefListProps> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cellRenderer = (data: Setting, key: string) => {
    if (key === 'type') {
      return (
        <div
          className={classNames(
            { 'bg-gray-100 text-gray-800': data.type },
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
          )}
        >
          {data.type}
        </div>
      );
    }

    if (key === 'auth') {
      return (
        <div
          className={classNames(
            { 'bg-red-100 text-red-800': data.auth === 'off' },
            { 'bg-green-100 text-green-800': data.auth === 'on' },
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
          )}
        >
          {data.auth}
        </div>
      );
    }

    if (key === 'edit') {
      return (
        <button
          className='text-indigo-600 hover:text-indigo-900'
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          Edit
        </button>
      );
    }
  };

  return (
    <>
      <Table
        columns={[
          'id',
          'client id',
          'title',
          'type',
          'auth',
          'logout',
          'handling',
          '',
        ]}
        dataKeys={[
          'id',
          'client_id',
          'title',
          'type',
          'auth',
          'logout',
          'handling',
          'edit',
        ]}
        data={settings}
        cellRenderer={cellRenderer}
      />
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <ClientAccountRuleForm />
      </SideBar>
    </>
  );
};

export default ClientAccPrefTable;
