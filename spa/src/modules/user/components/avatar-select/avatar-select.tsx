import { ChangeEvent, FC, useCallback, useState } from 'react';
// components
import Icon from 'modules/core/components/icon';
// assets
import ProfileAvatar from 'assets/profile-avatar.png';

import type { AvatarSelectProps } from './avatar-select.interface';
import {
  Root,
  Img,
  PhotoButton,
  FileInput,
  SavePhotoButton,
} from './avatar-select.styled';
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useProfilePhotoUpdateMutation } from 'modules/user/hooks/use-profile-update-mutation';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
// import axios from 'axios';
// import { config } from 'config';

const AvatarSelect: FC<AvatarSelectProps> = () => {
  const { t } = useLocalization();
  const profile = useProfileQuery();

  const [file, setFile] = useState<any>(null);

  const avatarUpadateMutation = useProfilePhotoUpdateMutation();

  const handleImageSelect = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      setFile(files[0]);
    }
  }, []);
  const fileUrl = file
    ? window.URL.createObjectURL(file)
    : profile?.data?.avatar?.url;

  const handleAvaSave = () => {
    file &&
      avatarUpadateMutation.mutateAsync(file).then((res) => {
        res && setFile(null);
        profile.refetch();
      });
  };

  return (
    <>
      <Root>
        <Img src={fileUrl ?? ProfileAvatar} alt='avatar' />
        <PhotoButton>
          <FileInput onChange={handleImageSelect} />
          <Icon name='camera' color='white' />
        </PhotoButton>
      </Root>
      {file && (
        <SavePhotoButton
          text={t('FORM.BTN.SAVE_AVA')}
          onClick={handleAvaSave}
          isLoading={avatarUpadateMutation.isLoading}
        />
      )}
    </>
  );
};

export default AvatarSelect;
