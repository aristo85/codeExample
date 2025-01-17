import React, {FC} from 'react';
import {BookingExcursionRequestBody} from '@/modules/core/api/model/booking/bookingExcursionRequestBody';
import {useFormContext} from 'react-hook-form';
import {
  FieldTitle,
  FieldTxt,
  FieldWrapper,
  Step3Section,
  StepWrapper,
} from './styles';
import dayjs from 'dayjs';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {Divider} from '@mui/material';

type Props = {
  duration: number;
};

const BookingStepThree: FC<Props> = ({duration}) => {
  const {register, control, getFieldState, getValues} =
    useFormContext<BookingExcursionRequestBody>();
  const {
    date,
    time,
    firstName,
    lastName,
    phone,
    email,
    bookingComments,
    adultCount,
    childrenCount,
  } = getValues();
  return (
    <StepWrapper>
      <Step3Section>
        <FieldWrapper>
          <FieldTitle>Дата</FieldTitle>
          <FieldTxt>{dayjs(date).format('DD MMM YYYY')}</FieldTxt>
        </FieldWrapper>
        <FieldWrapper>
          <FieldTitle>Время</FieldTitle>
          <FieldTxt>{time}</FieldTxt>
        </FieldWrapper>
        <FieldWrapper>
          <FieldTitle>Длительность</FieldTitle>
          <FieldTxt>
            {duration} {pluralizationFn(duration, ['час', 'часа', 'часов'])}
          </FieldTxt>
        </FieldWrapper>
        <FieldWrapper>
          <FieldTitle>Количество взрослых</FieldTitle>
          <FieldTxt>{adultCount}</FieldTxt>
        </FieldWrapper>
        {childrenCount && (
          <FieldWrapper>
            <FieldTitle>Количество детей младше 7 лет</FieldTitle>
            <FieldTxt>{childrenCount}</FieldTxt>
          </FieldWrapper>
        )}
      </Step3Section>
      <Divider />
      <Step3Section>
        <FieldWrapper>
          <FieldTitle>Имя</FieldTitle>
          <FieldTxt>
            {firstName} {lastName}
          </FieldTxt>
        </FieldWrapper>
        {phone && (
          <FieldWrapper>
            <FieldTitle>Телефон</FieldTitle>
            <FieldTxt>+{phone}</FieldTxt>
          </FieldWrapper>
        )}
        {email && (
          <FieldWrapper>
            <FieldTitle>Электронная почта</FieldTitle>
            <FieldTxt>{email}</FieldTxt>
          </FieldWrapper>
        )}
      </Step3Section>
      <Divider />
      <Step3Section>
        {bookingComments && (
          <FieldWrapper>
            <FieldTitle>Комментарий</FieldTitle>
            <FieldTxt style={{whiteSpace: 'pre-wrap'}}>
              {bookingComments}
            </FieldTxt>
          </FieldWrapper>
        )}
      </Step3Section>
    </StepWrapper>
  );
};

export default BookingStepThree;
