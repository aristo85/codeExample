import { FC, useCallback } from 'react';
// components
import Toggle from 'modules/core/components/toggle';
import ConfirmDialog from 'modules/core/components/confirm-dialog';
// hooks
import { useBoolean } from 'modules/core/hooks/use-boolean';
import { useUserBlockMutation } from 'modules/user/hooks/use-user-block-mutation';
import { useUserProfile } from 'modules/user/hooks/use-user-profile';
import { useUserUnblockMutation } from 'modules/user/hooks/use-user-unblock-mutation';

import type { UserBlockFieldProps } from './user-block-field.interface';

const UserBlockField: FC<UserBlockFieldProps> = ({
  idUser,
  className,
  style,
}) => {
  // queries
  const profile = useUserProfile(idUser);
  const userBlockMutation = useUserBlockMutation();
  const userUnblockMutation = useUserUnblockMutation();
  // state
  const [
    isAccountBlockSubmitActive,
    setIsAccountBlockSubmitActive,
  ] = useBoolean();
  // memo
  const isBlocked = profile.data?.user?.status === 'blocked';

  const handleAccountBlockChange = useCallback(() => {
    if (isBlocked) {
      userUnblockMutation.mutate(idUser);
    } else {
      setIsAccountBlockSubmitActive.on();
    }
  }, [idUser, userBlockMutation.mutate, userUnblockMutation.mutate, isBlocked]);

  const handleAccountBlockSubmit = useCallback(() => {
    setIsAccountBlockSubmitActive.off();
    userBlockMutation.mutate(idUser);
  }, [userBlockMutation.mutate]);

  return (
    <>
      <Toggle
        label='Account blocked'
        enabled={isBlocked}
        onChange={handleAccountBlockChange}
        className={className}
        style={style}
      />
      <ConfirmDialog
        variant='danger'
        isActive={isAccountBlockSubmitActive}
        onClose={setIsAccountBlockSubmitActive.off}
        onSubmit={handleAccountBlockSubmit}
        onCancel={setIsAccountBlockSubmitActive.off}
        focusOnAction='cancel'
        title='Are you sure you want to block this user?'
        description='After that he will not be able to do transactions or other activities'
      />
    </>
  );
};

export default UserBlockField;
