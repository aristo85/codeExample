import React, {FC, useState} from 'react';
import {ProfileContainer} from './styles';
import ProfileSection from './components/ProfileSection';
import ActionSection from './components/ActionSection';
import {useSelector} from 'react-redux';
import {selectProfileData} from '@/modules/auth/authSlice';
import Spinner from '@/modules/core/components/Spinner';

const Profile: FC = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const profile = useSelector(selectProfileData);

  if (isModalShown) {
    return <Spinner showSpinner={true} />;
  }

  if (!profile) {
    return <></>;
  }

  return (
    <ProfileContainer>
      <ProfileSection />
      <ActionSection setIsModalShown={setIsModalShown} />
    </ProfileContainer>
  );
};

export default Profile;
