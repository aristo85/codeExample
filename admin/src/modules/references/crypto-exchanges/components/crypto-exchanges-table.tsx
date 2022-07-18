import { FC, useState } from 'react';
import classNames from 'classnames';
// components
import Table from 'modules/core/components/table';
import SideBar from 'modules/core/components/side-bar/side-bar';
import CryptoExchangesEditForm from '../containers/burse-edit-form/burse-edit-form';

import { CryptoExchangesProps } from './crypto-exchanges-table.interface';

type Setting = {
  id: string;
  name: string;
  active: boolean;
  created: string;
  updated: string;
};

const settings: Setting[] = [
  {
    id: '1',
    name: 'Broxus',
    active: true,
    created: '2020-05-01 21:12:56',
    updated: '2020-05-01 21:12:56',
  },
  {
    id: '2',
    name: 'Broxus',
    active: false,
    created: '2020-05-01 21:12:56',
    updated: '2020-05-01 21:12:56',
  },
];

const CryptoExchangesTable: FC<CryptoExchangesProps> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cellRenderer = (data: Setting, key: string) => {
    if (key === 'active') {
      return (
        <span
          className={classNames(
            { 'bg-green-100 text-green-800': data.active },
            { 'bg-red-100 text-red-800': !data.active },
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
          )}
        >
          {data.active ? 'active' : 'not active'}
        </span>
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
      <div className='px-4 py-6 sm:px-0'>
        <Table
          columns={['id', 'burse name', 'active', 'created', 'updated', '']}
          dataKeys={['id', 'name', 'active', 'created', 'updated', 'edit']}
          data={settings}
          cellRenderer={cellRenderer}
        />
      </div>

      <SideBar
        isOpen={isSidebarOpen}
        title='Edit Burse Form'
        onClose={() => setIsSidebarOpen(false)}
      >
        <CryptoExchangesEditForm burseId={'1'} />
      </SideBar>
    </>
  );
};

export default CryptoExchangesTable;
