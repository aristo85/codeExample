import { FC, useState } from 'react';
// components
import Table from 'modules/core/components/table';
import Tabs from 'modules/core/components/tabs';
import SideBar from 'modules/core/components/side-bar/side-bar';
import AdminSettingRuleForm from '../admin-settings-rule-form/admin-settings-rule-form';

import { Tab } from 'modules/core/components/tabs/tabs.interface';
import type { AdminSettingsListProps } from './admin-settings-table.interface';

type Setting = {
  id: string;
  section: string;
  view: string;
  read_write: string;
  download: string;
  deletions: string;
  detail_reports: string;
  role: string;
  classes: string;
};

const settings: Setting[] = [
  {
    id: '1',
    section: 'Balance Section',
    view: 'false',
    read_write: 'false',
    download: 'false',
    deletions: 'true',
    detail_reports: 'true',
    role: 'admin',
    classes: 'SuperPuperMegaAdmin',
  },
];

const roleTypeTabs: Tab[] = [
  {
    value: 'senior',
    name: 'senior admin',
  },
  {
    value: 'regular',
    name: 'regular admin',
  },
  {
    value: 'cfo',
    name: 'cfo admin',
  },
  {
    value: 'manager',
    name: 'account manager',
  },
  {
    value: 'manager admin table',
    name: 'manager admin',
  },
  {
    value: 'support admin table',
    name: 'support admin',
  },
  {
    value: 'client',
    name: 'client',
  },
];

const AdminSettingsTable: FC<AdminSettingsListProps> = () => {
  const [activeViewTab, setActiveViewTab] = useState('senior');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cellRenderer = (data: Setting, key: string) => {
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
      <Tabs
        activeTab={activeViewTab}
        tabs={roleTypeTabs}
        onChange={setActiveViewTab}
      />

      <Table
        columns={[
          'id',
          'section',
          'view',
          'read/write',
          'download',
          'deletions',
          'detail reports',
          'role',
          'classes',
          '',
        ]}
        dataKeys={[
          'id',
          'section',
          'view',
          'read_write',
          'download',
          'deletions',
          'detail_reports',
          'role',
          'classes',
          'edit',
        ]}
        data={settings}
        cellRenderer={cellRenderer}
      />

      <SideBar
        isOpen={isSidebarOpen}
        title='Edit admin rule'
        onClose={() => setIsSidebarOpen(false)}
      >
        <AdminSettingRuleForm />
      </SideBar>
    </>
  );
};

export default AdminSettingsTable;
