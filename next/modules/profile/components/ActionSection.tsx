import React, {FC, useState} from 'react';
import {
  Label,
  Divider,
  RightContent,
  Action,
  ActionBtn,
  Footer,
  InfoSection,
} from '../styles';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {
  cleanProfile,
  selectRefreshToken,
  setLogOut,
} from '@/modules/auth/authSlice';
import DataTermsAndPrivacyPolicy from '@/modules/core/components/DataTermsAndPrivacyPolicy';
import {
  privacyPolicyText,
  termsOfDataUseText,
} from '@/modules/core/components/DataTermsAndPrivacyPolicy/content';
import {ChangePasswordProfile} from '@/modules/profile/components/ChangePasswordModal';
import {useLogoutMutation} from '@/modules/core/api/apiSlice';
import Spinner from '@/modules/core/components/Spinner';

interface ActionSectionProps {
  setIsModalShown: (value: boolean) => void;
}
const ActionSection: FC<ActionSectionProps> = ({setIsModalShown}) => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();
  const refreshToken = useAppSelector(selectRefreshToken);
  const [logout, {isLoading}] = useLogoutMutation();

  // TODO Can't delete account for now, maybe uncomment it later
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  //   const [deleteAccount] = useDeleteAccountMutation();
  // const deleteAccountHandler = async () => {
  //   const deleteResponse = await deleteAccount().unwrap();
  //   if (deleteResponse.success) {
  //     handleLogout();
  //     // setIsDeleteModalOpen(false);
  //   }
  // };

  const handleLogout = async () => {
    setIsModalShown(true);
    const logoutResponse = await logout(refreshToken).unwrap();
    if (logoutResponse.success) {
      dispatch(cleanProfile());
      dispatch(setLogOut());
    } else {
      setIsModalShown(false);
    }
  };

  return (
    <RightContent>
      <Spinner showSpinner={isLoading} />
      <Action>
        <Label>Безопасность</Label>
        <ActionBtn onClick={() => setIsPasswordModalOpen(true)}>
          Сменить пароль
        </ActionBtn>
        <ActionBtn onClick={handleLogout}>Выйти из аккаунта</ActionBtn>
      </Action>
      {/*<Action>*/}
      {/*  <Label>Обратная связь</Label>*/}
      {/*  <ActionBtn>Написать</ActionBtn>*/}
      {/*</Action>*/}
      <Divider />
      <InfoSection>
        <DataTermsAndPrivacyPolicy
          items={[
            {
              title: 'Политика конфиденциальности',
              text: privacyPolicyText,
            },
            {
              title: 'Условия использования данных',
              text: termsOfDataUseText,
            },
          ]}
        />
      </InfoSection>
      <Footer>
        {/* TODO: add account deletion */}
        {/* <TxtBtn
          onClick={() => setIsDeleteModalOpen(true)}
          style={{color: 'red'}}>
          Удалить аккаунт
        </TxtBtn> */}
      </Footer>
      {isPasswordModalOpen && (
        <ChangePasswordProfile
          closeButton={() => setIsPasswordModalOpen(false)}
        />
      )}
      {/*{isDeleteModalOpen && (*/}
      {/*  <DeleteSubmitModal*/}
      {/*    closeButton={() => setIsDeleteModalOpen(false)}*/}
      {/*    deleteAccount={deleteAccountHandler}*/}
      {/*  />*/}
      {/*)}*/}
    </RightContent>
  );
};

export default ActionSection;
