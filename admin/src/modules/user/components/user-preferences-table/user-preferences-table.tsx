import { FC } from 'react';
// components
import Table from 'modules/core/components/table';

import type { ClientDetailsProps } from './user-preferences-table.interface';

const UserPreferencesTable: FC<ClientDetailsProps> = ({ isLoading }) => {
  return (
    <Table
      columns={['Preference title', 'Value']}
      dataKeys={['title', 'value1']}
      data={[
        { title: 'Client ID', value1: '666999' },
        { title: 'Nickname', value1: 'JCoop' },
        { title: 'Account type', value1: 'Personal' },
        { title: 'Created date', value1: '31 Jun 2021' },
        { title: 'Verification status', value1: 'Verified' },
        { title: 'Handling', value1: 'Enabled' },
        { title: 'Authentication', value1: 'On' },
        { title: 'Telegram', value1: '@jcoop' },
        { title: 'Skype', value1: '@jcoopskype' },
      ]}
      isLoading={isLoading}
    />
  );
};

export default UserPreferencesTable;
