import { FC, useState } from 'react';
import classNames from 'classnames';
// components
import Table from 'modules/core/components/table';
// import ReferenceCountriesRuleForm from 'modules/references/components/reference-countries-rule-form';

import type { ReferenceCountriesListProps } from './reference-countries-table.interface';
import SideBar from '../../../../core/components/side-bar';
import CountryEditForm from '../../containers/country-edit-form';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Country } from '../../types/countries.types';
import { format, fromUnixTime } from 'date-fns';

const ReferenceCountriesTable: FC<ReferenceCountriesListProps> = ({
  countries,
  paginationProps,
  isLoading,
  forceRerender,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<undefined | Country>();

  const cellRenderer = (data: ResourceObject<Country>, key: string) => {
    if (key === 'active') {
      return (
        <span
          className={classNames(
            { 'bg-green-100 text-green-800': !data.is_blocked },
            { 'bg-red-100 text-red-800': data.is_blocked },
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
          )}
        >
          {data.is_blocked ? 'blocked' : 'active'}
        </span>
      );
    }

    if (key === 'name') {
      return `${data.name}`;
    }

    if (key === 'country_code') {
      return `${data.code}`;
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
            // 'id',
            'name',
            'country_code',
            'active',
            'created',
            'updated',
            '',
          ]}
          dataKeys={[
            // 'id',
            'name',
            'country_code',
            'active',
            'created_at',
            'updated_at',
            'edit',
          ]}
          data={countries}
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
          <CountryEditForm
            country={isSidebarOpen}
            onClose={() => setIsSidebarOpen(undefined)}
            forceRerender={forceRerender}
          />
        )}
      </SideBar>
    </>
  );
};

export default ReferenceCountriesTable;
