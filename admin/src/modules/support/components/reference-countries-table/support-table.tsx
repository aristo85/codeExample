import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
// components
import Table from 'modules/core/components/table';
import type { SupportListProps } from './supports-table.interface';
import SideBar from '../../../core/components/side-bar';
import SupportEditForm from '../../containers/support-edit-form';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Support } from '../../types/support.types';
import { format, fromUnixTime } from 'date-fns';

const SupportsTable: FC<SupportListProps> = ({
  supports,
  paginationProps,
  isLoading,
  forceRerender,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<undefined | Support>();

  const cellRenderer = (data: ResourceObject<Support>, key: string) => {
    // if (key === 'active') {
    //   return (
    //     <span
    //       className={classNames(
    //         { 'bg-green-100 text-green-800': !data.is_blocked },
    //         { 'bg-red-100 text-red-800': data.is_blocked },
    //         'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
    //       )}
    //     >
    //       {data.is_blocked ? 'blocked' : 'active'}
    //     </span>
    //   );
    // }

    if (key === 'name') {
      return `${data.name}`;
    }

    // if (key === 'country_code') {
    //   return `${data.code}`;
    // }

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

    if (key === 'view_support') {
      return (
        <Link
          to={`/supports/${data.id}/${data.user_uid}`}
          className='text-indigo-600 hover:text-indigo-900'
        >
          View support
        </Link>
      );
    }
  };

  return (
    <>
      <div className='px-4 py-6 sm:px-0'>
        <Table
          columns={[
            'id',
            'name',
            'description',
            'status',
            'user_uid',
            'created',
            'updated',
            '',
          ]}
          dataKeys={[
            'id',
            'name',
            'description',
            'status',
            'user_uid',
            'created_at',
            'updated_at',
            'view_support',
          ]}
          data={supports}
          cellRenderer={cellRenderer}
          paginationProps={paginationProps}
          isLoading={isLoading}
        />
      </div>

      <SideBar
        isOpen={!!isSidebarOpen}
        title='Edit Country Form'
        onClose={() => setIsSidebarOpen(undefined)}
      >
        {isSidebarOpen && (
          <SupportEditForm
            support={isSidebarOpen}
            onClose={() => setIsSidebarOpen(undefined)}
            forceRerender={forceRerender}
          />
        )}
      </SideBar>
    </>
  );
};

export default SupportsTable;
