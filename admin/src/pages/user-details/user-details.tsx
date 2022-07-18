import { FC, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { format, fromUnixTime } from 'date-fns';
import classNames from 'classnames';
import {
  CalendarIcon,
  MailIcon,
  PencilIcon,
  IdentificationIcon,
  UserCircleIcon,
  UserGroupIcon,
  BadgeCheckIcon,
} from '@heroicons/react/solid';
// components
import PageLayout from 'modules/core/components/page-layout';
// import UserPreferencesTable from 'modules/user/components/user-preferences-table';
import Button from 'modules/core/components/button';
import SideBar from 'modules/core/components/side-bar';
import UserProfileEditForm from 'modules/user/containers/user-profile-edit-form';
import UserFieldsTable from 'modules/user/components/user-fields-table';
// hooks
import { useBoolean } from 'modules/core/hooks/use-boolean';
import { useUserProfile } from 'modules/user/hooks/use-user-profile';

const UserDetails: FC = () => {
  // hooks
  const { id } = useParams<{ id: string }>();
  // state
  const [isSidebarOpen, setIsSidebarOpen] = useBoolean();
  // queries
  const profile = useUserProfile(id);
  const fullName = useMemo(() => {
    if (profile.data) {
      const firstName =
        profile.data.fields.find((field) => field.code === 'first_name')
          ?.value ?? '';
      const lastName =
        profile.data.fields.find((field) => field.code === 'last_name')
          ?.value ?? '';

      return `${firstName} ${lastName} `;
    }
  }, [profile.data]);

  const history = useHistory();

  const handleCancel = () => {
    history.push('/users');
  };

  const profileGroup = profile.data?.group?.name;
  const profileVerificationStatus = profile.data?.kyc?.verified;

  return (
    <>
      <PageLayout
        title={
          <>
            {profile.data && (
              <div className='lg:flex lg:items-center lg:justify-between'>
                <div className='w-full grid grid-flow-row auto-rows-max md:auto-rows-min min-w-0 overflow-auto'>
                  <div className='flex flex-wrap items-center gap-x-3 gap-y-3'>
                    <div className='flex-shrink-0 h-12 w-12'>
                      <img
                        className='h-12 w-12 rounded-full'
                        src={
                          profile?.data?.avatar?.url ??
                          'https://html5css.ru/howto/img_avatar.png'
                        }
                        alt={`${fullName}`}
                      />
                    </div>
                    <h1 className='text-2xl font-medium leading-7 text-gray-900 sm:text-2xl sm:truncate'>
                      {fullName}
                    </h1>
                    <div className='ml-2 flex items-center'>
                      <BadgeCheckIcon
                        className={classNames(
                          {
                            'text-green-500': profileVerificationStatus,
                          },
                          {
                            'text-red-500': !profileVerificationStatus,
                          },
                          'flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500'
                        )}
                        aria-hidden='true'
                      />

                      <div
                        className={classNames(
                          {
                            'text-xl text-green-500': profileVerificationStatus,
                          },
                          {
                            'text-xl text-red-500': !profileVerificationStatus,
                          },
                          'inline-flex text-xs leading-5 font-semibold rounded-full'
                        )}
                      >
                        {profileVerificationStatus ? 'Verified' : 'Unverified'}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center gap-x-3 mt-2 '>
                    <div className='mt-2 flex-column flex-auto items-center text-md text-gray-500'>
                      <IdentificationIcon
                        className='flex-shrink-0 mr-1.5 h-7 w-7 text-gray-400'
                        aria-hidden='true'
                      />
                      <p className='font-medium'> User ID</p>
                      {profile.data.user.id}
                    </div>
                    <div className='mt-2 flex-column flex-auto items-center text-md text-gray-500'>
                      <MailIcon
                        className='flex-shrink-0 mr-1.5 h-7 w-7 text-gray-400'
                        aria-hidden='true'
                      />
                      <p className='font-medium'>User E-mail</p>
                      {profile.data.user.email}
                    </div>
                    <div className='mt-2 flex-column flex-auto items-center text-md text-gray-500'>
                      <UserCircleIcon
                        className='flex-shrink-0 mr-1.5 h-7 w-7 text-gray-400'
                        aria-hidden='true'
                      />
                      <p className='font-medium'>Account Type</p>
                      {profile.data.user.is_company ? 'Busines' : 'Personal'}
                    </div>
                    <div className='mt-2 flex-column flex-auto items-center text-md text-gray-500'>
                      <UserGroupIcon
                        className='flex-shrink-0 mr-1.5 h-7 w-7 text-gray-400'
                        aria-hidden='true'
                      />
                      <p className='font-medium'>User Group</p>
                      {profileGroup}
                    </div>
                    <div className='mt-2 flex-column flex-auto items-center text-md text-gray-500'>
                      <CalendarIcon
                        className='flex-shrink-0 mr-1.5 h-7 w-7 text-gray-400'
                        aria-hidden='true'
                      />
                      <p className='font-medium'>Registered {''}</p>
                      {format(
                        fromUnixTime(profile.data.user.created_at),
                        'dd MMM yyyy HH:mm'
                      )}
                    </div>
                  </div>
                </div>
                <div className='mt-5 flex items-center sm:flex lg:mt-0 lg:ml-4'>
                  <Button
                    type='button'
                    variant='primary'
                    onClick={setIsSidebarOpen.on}
                  >
                    <PencilIcon
                      className='-ml-1 mr-2 h-5 w-5 text-white-500'
                      aria-hidden='true'
                    />
                    Edit
                  </Button>
                  <Button
                    type='button'
                    variant='default'
                    onClick={handleCancel}
                    className='ml-4'
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </>
        }
      >
        <div>
          {profile.data && (
            <div>
              <h2 className='text-lg leading-6 font-medium text-gray-600 mb-4'>
                Personal fields
              </h2>
              <UserFieldsTable
                profile={profile.data}
                isLoading={profile.isLoading}
              />
            </div>
          )}
        </div>
        {/* <div className='mt-6'>
          <h2 className='text-lg leading-6 font-medium text-gray-600 mb-4'>
            Preferences
          </h2>
          {profile.data && (
            <UserPreferencesTable
              profile={profile.data}
              isLoading={profile.isLoading}
            />
          )}
        </div> */}
      </PageLayout>
      <SideBar
        isOpen={isSidebarOpen}
        title='Edit Profile'
        onClose={setIsSidebarOpen.off}
      >
        <UserProfileEditForm idUser={id} onClose={setIsSidebarOpen.off} />
      </SideBar>
    </>
  );
};

export default UserDetails;
