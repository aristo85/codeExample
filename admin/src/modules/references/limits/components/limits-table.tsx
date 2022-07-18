import { FC, useState } from 'react';
// import classNames from 'classnames';
// components
import Table from 'modules/core/components/table';
import SideBar from 'modules/core/components/side-bar/side-bar';
import LimitEditForm from '../containers/limit-edit-form/limit-edit-form';
import { LimitsProps } from './limits-table.interface';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Limit } from '../types/limits.types';
import { format, fromUnixTime } from 'date-fns';

const LimitsTable: FC<LimitsProps> = ({
  limits,
  paginationProps,
  isLoading,
  operationOptions,
  currencyOptions,
  groupOptions,
  forceRerender,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<
    undefined | ResourceObject<Limit>
  >();

  const cellRenderer = (data: ResourceObject<Limit>, key: string) => {
    if (key === 'group') {
      return `${data.group.name ?? 'Regular'}`;
    }

    if (key === 'created_at') {
      return format(fromUnixTime(data.created_at), 'dd.MM.yyyy HH:mm:ss');
    }

    if (key === 'updated_at') {
      return format(fromUnixTime(data.updated_at), 'dd.MM.yyyy HH:mm:ss');
    }

    if (key === 'edit') {
      return (
        <button
          className='text-indigo-600 hover:text-indigo-900'
          onClick={() => {
            setIsSidebarOpen(data);
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
          columns={[
            'id',
            'Name',
            'currency',
            'limit_type',
            'transaction_type',
            'period',
            'count',
            'min_amount',
            'max_amount',
            'group',
            'created',
            'updated',
            '',
          ]}
          dataKeys={[
            'id',
            'name',
            'currency',
            'limit_type',
            'transaction_type',
            'period',
            'count',
            'min_amount',
            'max_amount',
            'group',
            'created_at',
            'updated_at',
            'edit',
          ]}
          data={limits}
          cellRenderer={cellRenderer}
          paginationProps={paginationProps}
          isLoading={isLoading}
        />
      </div>

      <SideBar
        isOpen={!!isSidebarOpen}
        title='Edit Limit Form'
        onClose={() => setIsSidebarOpen(undefined)}
      >
        {isSidebarOpen && (
          <LimitEditForm
            limit={isSidebarOpen}
            onClose={() => setIsSidebarOpen(undefined)}
            operationOptions={operationOptions}
            currencyOptions={currencyOptions}
            groupOptions={groupOptions}
            forceRerender={forceRerender}
          />
        )}
      </SideBar>
    </>
  );
};

export default LimitsTable;
