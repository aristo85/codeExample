import { FC, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
// import { format, fromUnixTime } from 'date-fns';
import { PencilIcon } from '@heroicons/react/solid';
// components
import PageLayout from 'modules/core/components/page-layout';
import Button from 'modules/core/components/button';
import SideBar from 'modules/core/components/side-bar';
import UserProfileEditForm from 'modules/user/containers/user-profile-edit-form';
// hooks
import { useBoolean } from 'modules/core/hooks/use-boolean';
import { useUserProfile } from 'modules/user/hooks/use-user-profile';
import { useSupportListQuery } from 'modules/support/hooks/use-support-list-query';

const SupportDetails: FC = () => {
  // hooks
  const { id, uid } = useParams<{ id: string; uid: string }>();
  // state
  const [isSidebarOpen, setIsSidebarOpen] = useBoolean();
  // queries
  const supportQuery = useSupportListQuery({
    page: 1,
    per_page: 1,
    q: { id_eq: id },
  });

  const profile = useUserProfile(uid);
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
    history.push('/support');
  };

  return (
    <>
      <PageLayout
        title={
          <>
            {profile.data && (
              <div className='lg:flex lg:items-center lg:justify-between'>
                <div className='w-full grid grid-flow-row auto-rows-max md:auto-rows-min min-w-0 overflow-auto'>
                  <div className='gap-x-3 gap-y-3'>
                    <h3 className='text-xl font-medium leading-7 text-gray-900 sm:truncate'>
                      {fullName}
                    </h3>
                    <p className='text-gray-900 sm:text sm:truncate'>
                      {supportQuery.data?.list[0]?.description}
                    </p>
                  </div>
                </div>
                <div className='mt-5 flex items-center sm:flex lg:mt-0 lg:ml-4'>
                  <Button
                    type='button'
                    variant='primary'
                    onClick={
                      () => {}
                      // setIsSidebarOpen.on
                    }
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
          {profile.data &&
            supportQuery.data?.list[0]?.comments.map((el) => (
              <div className='mb-2' key={el.id}>
                <h2 className='text-lg leading-6 font-medium text-gray-600 mb-4'>
                  {el.user_uid === uid ? fullName : 'Admin'}
                </h2>
                <p className='text-gray-900 sm:text sm:truncate'>
                  {el.message}
                </p>
              </div>
            ))}
        </div>
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

export default SupportDetails;
