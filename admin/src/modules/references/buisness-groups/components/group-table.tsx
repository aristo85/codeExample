import { FC, useState } from 'react';
import classNames from 'classnames';
// components
import Table from 'modules/core/components/table';
import SideBar from 'modules/core/components/side-bar/side-bar';
import GroupEditForm from '../containers/group-edit-form/group-edit-form';
// import ConfirmDialog from 'modules/core/components/confirm-dialog';

import { GroupsPropsListProps } from './group-table.interface';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Group } from '../types/groups.types';
import { format, fromUnixTime } from 'date-fns/esm';
// import { useBoolean } from 'modules/core/hooks/use-boolean';
// import { useGroupDeleteMutation } from '../hooks/use-group-delete-mutation';

const GroupsTable: FC<GroupsPropsListProps> = ({
  groups,
  paginationProps,
  isLoading,
  forceRerender,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<
    undefined | ResourceObject<Group>
  >();
  // state
  // const [isGroupDeleteSubmitActive, setIsGroupDeleteSubmitActive] = useState<
  //   undefined | string
  // >();

  // const groupDeleteMutation = useGroupDeleteMutation();

  const cellRenderer = (data: ResourceObject<Group>, key: string) => {
    if (key === 'is_blocked') {
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

    if (key === 'description') {
      return `${data.description}`;
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

    // if (key === 'delete') {
    //   return (
    //     <button
    //       className='text-red-600 hover:text-red-900'
    //       onClick={() => {
    //         onDeleteGroup(data.id);
    //       }}
    //     >
    //       Delete
    //     </button>
    //   );
    // }
  };

  // const onDeleteGroup = useCallback((id) => {
  //   setIsGroupDeleteSubmitActive(id);
  // }, []);

  // const onDeleteGroupSubmit = useCallback(() => {
  //   if (isGroupDeleteSubmitActive) {
  //     groupDeleteMutation
  //       .mutateAsync(isGroupDeleteSubmitActive)
  //       .then((res) => {
  //         setIsGroupDeleteSubmitActive(undefined);
  //       })
  //       .catch((err) => {
  //         setIsGroupDeleteSubmitActive(undefined);
  //       });
  //   }
  // }, [isGroupDeleteSubmitActive]);

  return (
    <>
      <div className='px-4 py-6 sm:px-0'>
        <Table
          columns={[
            'id',
            'name',
            'is blocked',
            'description',
            'created',
            'updated',
            '',
          ]}
          dataKeys={[
            'id',
            'name',
            'is_blocked',
            'description',
            'created_at',
            'updated_at',
            'edit',
            // 'delete',
          ]}
          data={groups}
          cellRenderer={cellRenderer}
          paginationProps={paginationProps}
          isLoading={isLoading}
        />
      </div>

      <SideBar
        isOpen={!!isSidebarOpen}
        title='Edit Group Form'
        onClose={() => setIsSidebarOpen(undefined)}
      >
        {isSidebarOpen && (
          <GroupEditForm
            group={isSidebarOpen}
            onClose={() => setIsSidebarOpen(undefined)}
            forceRerender={forceRerender}
          />
        )}
      </SideBar>
      {/* <ConfirmDialog
        variant='danger'
        isActive={!!isGroupDeleteSubmitActive}
        onClose={() => setIsGroupDeleteSubmitActive(undefined)}
        onSubmit={onDeleteGroupSubmit}
        onCancel={() => setIsGroupDeleteSubmitActive(undefined)}
        focusOnAction='cancel'
        title='Are you sure you want to delete this group?'
        description='click submit to delete the group permanently or cancel'
      /> */}
    </>
  );
};

export default GroupsTable;
