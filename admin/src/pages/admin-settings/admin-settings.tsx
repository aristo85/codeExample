import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import AdminSettingsTable from 'modules/admin-settings/components/admin-settings-table';

const AdminSettings: FC = () => (
  <PageLayout title='Admin Settings'>
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <AdminSettingsTable />
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default AdminSettings;
