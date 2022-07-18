import { FC, useState } from 'react';
// components
import Table from 'modules/core/components/table';

import type { CommissionSettingsListProps } from './commission-settings-table.interface';
import SideBar from '../../../core/components/side-bar';
import { Commission } from 'modules/commission-settings/types/commissions.types';
import { ResourceObject } from 'modules/core/types/resource.types';
import { format, fromUnixTime } from 'date-fns';
import CommissionEditForm from 'modules/commission-settings/containers/commission-edit-form/commission-edit-form';
import { convertENumberToPlainString } from 'utils/number.utils';

const CommissionSettingsTable: FC<CommissionSettingsListProps> = ({
  commissions,
  paginationProps,
  isLoading,
  operationOptions,
  currencyOptions,
  groupOptions,
  forceRerender,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<
    undefined | ResourceObject<Commission>
  >();

  const cellRenderer = (data: ResourceObject<Commission>, key: string) => {
    if (key === 'name') {
      return `${data.name}`;
    }

    if (key === 'currency') {
      return `${data.currency}`;
    }

    if (key === 'transaction_type') {
      return `${data.transaction_type}`;
    }

    if (key === 'min_amount') {
      return `${convertENumberToPlainString(data.min_amount)}`;
    }

    if (key === 'fix_amount') {
      return `${convertENumberToPlainString(data.fix_amount)}`;
    }

    if (key === 'percent') {
      return `${data.percent}`;
    }

    if (key === 'group') {
      return `${data.group.name ?? 'Regular'}`;
    }

    if (key === 'description') {
      return `${data.description}`;
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
      <Table
        columns={[
          'id',
          'name',
          'currency',
          'transaction_type',
          'direction',
          'min_amount',
          'fix_amount',
          'percent',
          'group',
          'description',
          'created',
          'updated',
          '',
        ]}
        dataKeys={[
          'id',
          'name',
          'currency',
          'transaction_type',
          'direction',
          'min_amount',
          'fix_amount',
          'percent',
          'group',
          'description',
          'created_at',
          'updated_at',
          'edit',
        ]}
        data={commissions}
        cellRenderer={cellRenderer}
        paginationProps={paginationProps}
        isLoading={isLoading}
      />

      <SideBar
        isOpen={!!isSidebarOpen}
        title='New Commission Rule Creation Form'
        onClose={() => setIsSidebarOpen(undefined)}
      >
        {isSidebarOpen && (
          <CommissionEditForm
            commission={isSidebarOpen}
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

export default CommissionSettingsTable;
