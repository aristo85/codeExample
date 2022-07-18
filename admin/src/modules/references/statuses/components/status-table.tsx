import { FC, useState } from 'react';
import classNames from 'classnames';
// components
import Table from 'modules/core/components/table';
import SideBar from 'modules/core/components/side-bar/side-bar';
import StatusEditForm from '../containers/status-edit-form/status-edit-form';

import { StatusesProps } from './statuses-table.interface';

type Setting = {
  id: string;
  type: string;
  active: boolean;
  created: string;
  updated: string;
};

const settings: Setting[] = [
  {
    id: '1',
    type: 'Regular',
    active: true,
    created: '2020-05-01 21:12:56',
    updated: '2020-05-01 21:12:56',
  },
  {
    id: '2',
    type: 'Regular 1',
    active: false,
    created: '2020-05-01 21:12:56',
    updated: '2020-05-01 21:12:56',
  },
  {
    id: '3',
    type: 'VIP',
    active: false,
    created: '2020-05-01 21:12:56',
    updated: '2020-05-01 21:12:56',
  },
  {
    id: '4',
    type: 'VIP 1',
    active: true,
    created: '2020-05-01 21:12:56',
    updated: '2020-05-01 21:12:56',
  },
  {
    id: '5',
    type: 'VIP 2',
    active: false,
    created: '2020-05-01 21:12:56',
    updated: '2020-05-01 21:12:56',
  },
  {
    id: '6',
    type: 'VIP 3',
    active: true,
    created: '2020-05-01 21:12:56',
    updated: '2020-05-01 21:12:56',
  },
];

const StatusesTable: FC<StatusesProps> = () => {
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
          columns={['id', 'type', 'active', 'created', 'updated', '']}
          dataKeys={['id', 'type', 'active', 'created', 'updated', 'edit']}
          data={settings}
          cellRenderer={cellRenderer}
        />
      </div>

      <SideBar
        isOpen={isSidebarOpen}
        title='Edit Status Form'
        onClose={() => setIsSidebarOpen(false)}
      >
        <StatusEditForm statusId={'1'} />
      </SideBar>
    </>
  );
};

export default StatusesTable;
