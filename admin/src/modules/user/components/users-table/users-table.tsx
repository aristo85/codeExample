import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { format, fromUnixTime } from 'date-fns';
// components
import Table from 'modules/core/components/table';
// types
import type { User } from 'modules/user/types/user.types';
import type { UsersListProps } from './users-table.interface';
import userProfileService from 'modules/user/services/user-profile.service';

const cellRenderer = (data: User, key: string) => {
  if (key === 'verified') {
    const status = userProfileService.getKycStatus(
      data.kyc.review_status,
      data.kyc.verified
    );

    return (
      <span
        className={classNames(
          { 'bg-green-100 text-green-800': status === 'Verified' },
          { 'bg-yellow-100 text-yellow-800': status === 'In progress' },
          {
            'bg-red-100 text-red-800':
              status === 'Blocked' || status === 'Unverified',
          },
          'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
        )}
      >
        {status}
      </span>
    );
  }

  if (key === 'status') {
    return (
      <span
        className={classNames(
          { 'bg-green-100 text-green-800': data.user.status === 'active' },
          { 'bg-red-100 text-red-800': data.user.status === 'blocked' },
          'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
        )}
      >
        {data.user?.status === 'active' ? 'Active' : 'Blocked'}
      </span>
    );
  }

  if (key === 'is_company') {
    return (
      <span
        className={classNames(
          {
            'bg-yellow-500 text-yellow-800': data.user.is_company,
          },
          {
            'bg-blue-100 text-blue-800': !data.user.is_company,
          },
          'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
        )}
      >
        {data.user?.is_company ? 'Business' : 'Individual'}
      </span>
    );
  }

  if (key === 'group') {
    return `${data.group.name}`;
  }

  if (key === 'created_at') {
    return format(fromUnixTime(data.user.created_at), 'dd.MM.yyyy HH:mm:ss');
  }

  if (key === 'updated_at') {
    return format(fromUnixTime(data.user.updated_at), 'dd.MM.yyyy HH:mm:ss');
  }

  if (key === 'view_profile') {
    return (
      <Link
        to={`/users/${data.user.id}`}
        className='text-indigo-600 hover:text-indigo-900'
      >
        View profile
      </Link>
    );
  }

  if (key === 'email') {
    return (
      <div className='flex items-center'>
        <div className='text-sm text-gray-500'>{data.user.email}</div>
        {/* <div>
          <div className='flex'>
            <div className='mr-1 text-sm font-medium text-gray-900 capitalize'>
              {data.fields.map((field) =>
                field.code === 'first_name' ? field.value : ''
              )}
            </div>
            <div className='text-sm font-medium text-gray-900 capitalize'>
              {data.fields.map((field) =>
                field.code === 'last_name' ? field.value : ''
              )}
            </div>
          </div>
          <div className='text-sm text-gray-500'>{data.user.email}</div>
        </div> */}
      </div>
    );
  }

  if (key === 'first_name') {
    return (
      <div className='flex items-center'>
        <div className='text-sm text-gray-500'>
          {data.fields.map((field) =>
            field.code === 'first_name' ? field.value : ''
          )}
        </div>
      </div>
    );
  }

  if (key === 'last_name') {
    return (
      <div className='flex items-center'>
        <div className='text-sm text-gray-500'>
          {data.fields.map((field) =>
            field.code === 'last_name' ? field.value : ''
          )}
        </div>
      </div>
    );
  }
};

const UsersTable: FC<UsersListProps> = ({
  users,
  paginationProps,
  isLoading,
}) => {
  return (
    <>
      <Table
        columns={[
          'id',
          'email',
          'first name',
          'last name',
          'account type',
          'group',
          'verification',
          'account blocked',
          'created at',
          'updated at',
          '',
        ]}
        dataKeys={[
          'user.id',
          'email',
          'first_name',
          'last_name',
          'is_company',
          'group',
          'verified',
          'status',
          'created_at',
          'updated_at',
          'view_profile',
        ]}
        data={users}
        cellRenderer={cellRenderer}
        paginationProps={paginationProps}
        isLoading={isLoading}
      />
    </>
  );
};

export default UsersTable;
