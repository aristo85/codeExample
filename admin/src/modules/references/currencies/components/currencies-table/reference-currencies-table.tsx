import { FC, useState } from 'react';
import classNames from 'classnames';
// components
import Table from 'modules/core/components/table';
import type { ReferenceCurrenciesListProps } from './reference-currencies-table.interface';
import CurrencyEditForm from 'modules/references/currencies/containers/currency-edit-form';
import SideBar from 'modules/core/components/side-bar';
import { Currency } from '../../types/currencies.types';
import { ResourceObject } from 'modules/core/types/resource.types';
import { format, fromUnixTime } from 'date-fns';

const ReferenceCurrenciesTable: FC<ReferenceCurrenciesListProps> = ({
  currencies,
  paginationProps,
  isLoading,
  forceRerender,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<
    undefined | ResourceObject<Currency>
  >();

  const cellRenderer = (data: ResourceObject<Currency>, key: string) => {
    if (key === 'active') {
      return (
        <span
          className={classNames(
            { 'bg-green-100 text-green-800': data.active },
            { 'bg-red-100 text-red-800': !data.active },
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
          )}
        >
          {data.active ? 'active' : 'blocked'}
        </span>
      );
    }

    // if (key === 'code') {
    //   return `${data.code}`;
    // }

    // if (key === 'currency_type') {
    //   return `${data.currency_type}`;
    // }

    if (key === 'default') {
      return data.default ? 'Default' : 'Not Default';
    }

    if (key === 'popular') {
      return data.popular ? 'Popular' : 'Not Popular';
    }

    if (key === 'token') {
      return data.is_token ? 'Token' : 'Not token';
    }

    // if (key === 'name') {
    //   return data.name;
    // }

    // if (key === 'scale') {
    //   return data.scale;
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
  };

  return (
    <>
      <div className='px-4 py-6 sm:px-0'>
        <Table
          columns={[
            'currency id',
            'currency code',
            'name',
            'currency type',
            'active',
            'default',
            'popular',
            'scale',
            'is token',
            'created',
            'updated',
            '',
          ]}
          dataKeys={[
            'id',
            'code',
            'name',
            'currency_type',
            'active',
            'default',
            'popular',
            'scale',
            'token',
            'created_at',
            'updated_at',
            'edit',
          ]}
          data={currencies}
          cellRenderer={cellRenderer}
          paginationProps={paginationProps}
          isLoading={isLoading}
        />
      </div>

      <SideBar
        isOpen={!!isSidebarOpen}
        title='Edit Currency Form'
        onClose={() => setIsSidebarOpen(undefined)}
      >
        {isSidebarOpen && (
          <CurrencyEditForm
            currency={isSidebarOpen}
            onClose={() => setIsSidebarOpen(undefined)}
            forceRerender={forceRerender}
          />
        )}
      </SideBar>
    </>
  );
};

export default ReferenceCurrenciesTable;
