import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import UsersBoard from 'modules/user/containers/users-board/users-board';

const Users: FC = () => {
  return (
    <PageLayout title='Client Profiles & Account Preferences'>
      <UsersBoard />
    </PageLayout>
  );
};

export default Users;
