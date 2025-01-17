import React, {FC, useState} from 'react';
import {
  BookedTitleText,
  CheckingContractErrorMessage,
  CheckingContractErrorMessageBlock,
  ContactContent,
  Contacts,
  ContactTxt,
  Divider,
  EditBtnWrapper,
  FormWrapper,
  Label,
  ProfileStyledLink,
  ProfileStyledLinkText,
  TxtBtn,
  UserNames,
} from '../styles';
import ProfileEditForm from './ProfileEditForm';
import {useSelector} from 'react-redux';
import {Roles, selectProfileData} from '@/modules/auth/authSlice';
import BookedListWithCategories from '@/modules/profile/components/BookedListWithCategories';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import ArrowRightIcon from '@/modules/core/components/icons/ArrowRightIcon';
import {UserStatus} from '@/modules/core/api/model/user/userStatus';

const ProfileSection: FC = () => {
  const profile = useSelector(selectProfileData);
  const [isEdit, setIsEdit] = useState(false);
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);
  const isScreenMd = useMatchMedia(`(max-width: ${breakpoints.md}px)`);

  return isEdit ? (
    <ProfileEditForm setIsEdit={setIsEdit} />
  ) : (
    <FormWrapper>
      {/*TODO UNCOMMENT WHEN DECIDE TO ADD IMAGE*/}
      {/*<ImageInput*/}
      {/*  imageText={'Добавить свое фото'}*/}
      {/*  onImageSelect={function to load image}*/}
      {/*  shape={Shape.CIRCLE}*/}
      {/*  color={Color.WHITE}*/}
      {/*  icon={<Camera fill={'#1D7ABD'} />}*/}
      {/*  multipleImages={false}*/}
      {/*  imageUrl={''}*/}
      {/*/>*/}
      <UserNames>{`${profile?.lastName} ${profile?.firstName}`}</UserNames>
      <Contacts>
        <ContactContent>
          <Label>Электронная почта</Label>
          <ContactTxt>{profile?.email}</ContactTxt>
        </ContactContent>
        <ContactContent>
          <Label>Контактный телефон</Label>
          <ContactTxt>{profile?.phone}</ContactTxt>
        </ContactContent>
      </Contacts>
      {!isScreenSm && profile?.commission && profile?.company && <Divider />}
      {profile?.status === UserStatus.CHECKING_CONTRACT &&
        profile?.role === Roles.partner && (
          <CheckingContractErrorMessageBlock>
            <CheckingContractErrorMessage>
              В данный момент вы не можете добавлять жильё, экскурсии и гидов,
              пока мы не проверим наличие договора вашей компании с нашим
              порталом. Дождитесь письма на почту
            </CheckingContractErrorMessage>
          </CheckingContractErrorMessageBlock>
        )}
      {profile?.role === Roles.partner && (
        <>
          {profile?.commission && (
            <ContactContent>
              <Label>Комиссия</Label>
              <ContactTxt>{profile?.commission} %</ContactTxt>
            </ContactContent>
          )}
          <ContactContent>
            <Label>Компания</Label>
            <ContactTxt>{profile?.company}</ContactTxt>
          </ContactContent>
        </>
      )}
      {isScreenMd && profile?.role === Roles.tourist && (
        <ProfileStyledLink href={'/profile/booking'}>
          <ProfileStyledLinkText>Мои Бронирования</ProfileStyledLinkText>
          <ArrowRightIcon />
        </ProfileStyledLink>
      )}
      <EditBtnWrapper>
        <TxtBtn onClick={() => setIsEdit(true)}>Редактировать</TxtBtn>
      </EditBtnWrapper>
      {!isScreenMd && profile?.role === Roles.tourist && (
        <>
          <BookedTitleText>Бронирования</BookedTitleText>
          <BookedListWithCategories />
        </>
      )}
      {isScreenSm && <Divider />}
    </FormWrapper>
  );
};

export default ProfileSection;
