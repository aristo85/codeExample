import { FC } from 'react';
import { format } from 'date-fns';
// components
import Table from 'modules/core/components/table';
// types
import type { UserFieldsTableProps } from './user-fields-table.interface';

const cellRenderer = (data: any, key: string) => {
  if (key === 'name') {
    return <span className='capitalize'>{data[key]}</span>;
  }

  if (data.code === 'birth_at') {
    if (data.value !== null) {
      return format(new Date(data[key]), 'yyyy.dd.MM');
    }

    return '';
  }
};

const UserFieldsTable: FC<UserFieldsTableProps> = ({ profile, isLoading }) => (
  <Table
    columns={['Field name', 'Value']}
    dataKeys={['name', 'value']}
    data={profile.fields}
    cellRenderer={cellRenderer}
    isLoading={isLoading}
  />
);

export default UserFieldsTable;
