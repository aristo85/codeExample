import React, {FC, useEffect} from 'react';
import {
  FormInput,
  FormPhoneWrapper,
  MaximumTxt,
  Step2Row,
  StepWrapper,
} from './styles';
import {Controller, useFormContext} from 'react-hook-form';
import {BookingGuideRequestBody} from '@/modules/core/api/model/booking/bookingGuideRequestBody';
import PhoneInputNumber from '@/modules/core/components/inputs/PhoneInput';
import TextAreaStyled from '@/modules/core/components/inputs/TextareaStyled';
import {ProfileData} from '@/modules/auth/authSlice';

type Props = {
  maxNumberOfParticipants: number;
  withChildren?: boolean;
  userProfile: ProfileData | null;
};

const BookingStepTwo: FC<Props> = ({
  maxNumberOfParticipants,
  withChildren,
  userProfile,
}) => {
  const {
    register,
    control,
    reset,
    setValue,
    trigger,
    formState: {errors},
  } = useFormContext<BookingGuideRequestBody>();

  useEffect(() => {
    if (userProfile) {
      reset(values => ({
        ...values,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        email: userProfile.email,
        phone: userProfile.phone ? userProfile.phone : values.phone,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);

  return (
    <StepWrapper>
      <Step2Row>
        <FormInput
          label="Фамилия"
          {...register('lastName')}
          placeholder="Введите вашу фамилию"
          error={errors.lastName?.message}
        />
        <FormInput
          label="Имя"
          {...register('firstName')}
          placeholder="Введите ваше имя"
          error={errors.firstName?.message}
        />
        <FormPhoneWrapper>
          <Controller
            name="phone"
            control={control}
            render={({field}) => {
              return (
                <PhoneInputNumber
                  label="Номер телефона"
                  placeholder="Введите ваш номер телефона"
                  onChange={field.onChange}
                  error={errors.phone?.message}
                  phoneNumber={field.value}
                />
              );
            }}
          />
        </FormPhoneWrapper>
        <FormInput
          label="Email"
          {...register('email')}
          placeholder="Введите ваш email"
          error={errors.email?.message}
        />
        <FormInput
          label="Количество взрослых"
          {...register('adultCount')}
          placeholder="Введите количество участников"
          error={errors.adultCount?.message}
          onChange={e => {
            const currentValue = Number(e.target.value.replace(/[^0-9]/g, ''));
            setValue('adultCount', currentValue);
            void trigger('adultCount');
          }}
          fullWidth={!withChildren}
        />
        {withChildren && (
          <FormInput
            label="Количество детей младше 7 лет"
            {...register('childrenCount')}
            placeholder="Введите количество детей"
            error={errors.childrenCount?.message}
            onChange={e => {
              const currentValue = Number(
                e.target.value.replace(/[^0-9]/g, ''),
              );
              setValue('childrenCount', currentValue);
              void trigger('childrenCount');
            }}
          />
        )}
      </Step2Row>
      <MaximumTxt>{`Максимум ${maxNumberOfParticipants} человек`}</MaximumTxt>
      <TextAreaStyled
        label="Комментарий"
        {...register('bookingComments')}
        placeholder="Расскажите о себе"
        error={errors.bookingComments?.message}
      />
    </StepWrapper>
  );
};

export default BookingStepTwo;
