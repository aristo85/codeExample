import React, {FC} from 'react';
import {Age, CardContainer, CardPhoto, JobTitle, Names, Phone} from './styles';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';

type Props = {
  photo: string;
  names: string;
  jobTitle: string;
  age?: number;
  phone?: string;
};

const BusinessCard: FC<Props> = ({phone, photo, names, age, jobTitle}) => {
  return (
    <CardContainer>
      <CardPhoto
        src={photo}
        alt="profile image"
        width={130}
        height={130}
        isRectangle={jobTitle === 'Гид'}
      />
      <Names>{names}</Names>
      {age !== undefined && (
        <Age>{`${age} ${pluralizationFn(age, ['год', 'года', 'лет'])}`}</Age>
      )}
      <JobTitle>{jobTitle}</JobTitle>
      {phone && <Phone format="+# (###) ### ## ##" value={phone} />}
    </CardContainer>
  );
};

export default BusinessCard;
