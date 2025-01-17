import InputStyled from '@/modules/core/components/inputs/InputStyled';
import React, {FC, useEffect} from 'react';
import {
  BookingFormTitle,
  BookingGuestContainer,
  BookingGuestTitleContainer,
  FormButtonsBlock,
  FormLine,
  FormWrapper,
  InputFieldsContainer,
  PayFullAmountButton,
  RadioWrapper,
  SwitcherGuestControlLabel,
  SwitcherGuestLabel,
  TextAreaContainer,
} from './styles';

import PhoneInputNumber from '@/modules/core/components/inputs/PhoneInput';
import TextAreaStyled from '@/modules/core/components/inputs/TextareaStyled';
import DateInformation, {
  Dates,
} from '@/modules/placement/form/components/DateInformation';
import {
  MobileButton,
  MobileButtonBlock,
} from '@/modules/placement/form/mobile/styles';
import {Line} from '@/modules/placement/form/styles';
import {DefaultQueriesBookingValues} from '@/modules/placement/constants';
import {BookingFormFields} from '@/modules/placement/form';
import {
  Control,
  Controller,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';
import {Radio, RadioGroup} from '@mui/material';

interface BookingFormProps {
  register: UseFormRegister<BookingFormFields>;
  handleSubmit: UseFormHandleSubmit<BookingFormFields>;
  control: Control<BookingFormFields>;
  watch: UseFormWatch<BookingFormFields>;
  trigger: UseFormTrigger<BookingFormFields>;
  formState: FormState<BookingFormFields>;
  stayDates: Dates | null;
  isMobile: boolean;
  guestsCount: number;
  fullPaymentFn?: (data: BookingFormFields) => void;
  partialPaymentFn?: (data: BookingFormFields) => void;
  nextStepFn?: () => void;
  getValues: (data: string) => string;
  setFirstGuestDataToForm: () => void;
  setValue: UseFormSetValue<BookingFormFields>;
  backwardLink?: string;
}

export enum GuestType {
  HIMSELF = 'HIMSELF',
  ANOTHER = 'ANOTHER',
}

const BookingFormBlock: FC<BookingFormProps> = ({
  register,
  handleSubmit,
  control,
  watch,
  trigger,
  formState: {errors, isValid},
  stayDates,
  getValues,
  isMobile,
  nextStepFn,
  fullPaymentFn,
  partialPaymentFn,
  guestsCount = DefaultQueriesBookingValues.numOfAdult,
  setFirstGuestDataToForm,
  setValue,
  backwardLink,
}) => {
  const {firstName, lastName, whoIsGuest} = watch();

  useEffect(() => {
    if (getValues('whoIsGuest') === GuestType.HIMSELF) {
      setValue('guests', [{firstName, lastName}]);
    }
    firstName && trigger();
  }, [firstName, lastName, whoIsGuest]);

  const addCountryCodeToPhoneFieldFunction = (
    data: BookingFormFields,
  ): BookingFormFields => {
    return {...data};
  };

  const mobileButtonSubmitHandler = () => {
    nextStepFn && nextStepFn();
  };

  const fullPaymentHandler = (data: BookingFormFields) => {
    fullPaymentFn && fullPaymentFn(addCountryCodeToPhoneFieldFunction(data));
  };

  // TODO uncomment partial payment if we need it
  // const partialPaymentHandler = (data: BookingFormFields) => {
  //   partialPaymentFn &&
  //     partialPaymentFn(addCountryCodeToPhoneFieldFunction(data));
  // };

  return (
    <FormWrapper>
      <BookingFormTitle>Введите свои данные</BookingFormTitle>
      <InputStyled
        label="Фамилия"
        placeholder="Введите вашу фамилию"
        {...register('lastName')}
        error={errors.lastName?.message}
      />
      <InputStyled
        label="Имя"
        placeholder="Введите ваше имя"
        {...register('firstName')}
        error={errors.firstName?.message}
      />
      <InputStyled
        label="Электронная почта"
        placeholder="Введите вашу электронную почту"
        {...register('email')}
        error={errors.email?.message}
      />
      <Controller
        name="phone"
        control={control}
        render={() => {
          return (
            <PhoneInputNumber
              label="Телефон"
              phoneNumber={getValues && getValues('phone')}
              placeholder="Введите номер телефона"
              error={errors.phone?.message}
              onChange={e => {
                setValue('phone', e);
                if (e) {
                  trigger('phone');
                }
              }}
            />
          );
        }}
      />

      <RadioWrapper>
        <BookingFormTitle>Кто основной гость?</BookingFormTitle>
        <RadioGroup
          defaultValue={getValues('whoIsGuest')}
          name="GuestType"
          onChange={e => {
            setValue('whoIsGuest', e.target.value as GuestType);
            setValue('guests', []);
            if (e.target.value === GuestType.HIMSELF) void trigger();
          }}>
          <SwitcherGuestControlLabel
            value={GuestType.HIMSELF}
            control={<Radio />}
            label={<SwitcherGuestLabel>Я</SwitcherGuestLabel>}
          />
          <SwitcherGuestControlLabel
            value={GuestType.ANOTHER}
            control={<Radio />}
            label={<SwitcherGuestLabel>Другой человек</SwitcherGuestLabel>}
          />
        </RadioGroup>
      </RadioWrapper>

      {whoIsGuest === GuestType.ANOTHER && (
        <BookingGuestContainer>
          <BookingGuestTitleContainer>
            <BookingFormTitle>Введите данные гостя</BookingFormTitle>
          </BookingGuestTitleContainer>
          <InputFieldsContainer>
            <InputStyled
              label={`Фамилия гостя`}
              placeholder={`Введите фамилию гостя`}
              {...register(`guests.${0}.lastName`)}
              error={errors?.guests?.[0]?.lastName?.message}
            />
            <InputStyled
              label={`Имя гостя`}
              placeholder={`Введите имя гостя`}
              {...register(`guests.${0}.firstName`)}
              error={errors?.guests?.[0]?.firstName?.message}
            />
          </InputFieldsContainer>
        </BookingGuestContainer>
      )}

      {stayDates && (
        <DateInformation stayDates={stayDates} backwardLink={backwardLink} />
      )}

      <TextAreaContainer>
        <TextAreaStyled
          label="Расскажите нам о ваших особых пожеланиях"
          placeholder="Администрация объекта размещения не может гарантировать выполнение особых пожеланий, но сделает для этого все возможное. Вы всегда можете оставить пожелание после завершения бронирования"
          {...register('bookingComments')}
          error={errors.bookingComments?.message}
        />
      </TextAreaContainer>
      {!isMobile && (
        <>
          <FormLine />
          <FormButtonsBlock>
            {/*TODO uncomment partial button if we need it*/}
            {/*<PayPartialAmountButton*/}
            {/*  onClick={handleSubmit(partialPaymentHandler)}*/}
            {/*  disabled={!isValid}>*/}
            {/*  Внести предоплату*/}
            {/*</PayPartialAmountButton>*/}
            <PayFullAmountButton
              dark
              onClick={handleSubmit(fullPaymentHandler)}
              disabled={!isValid}>
              {/*Оплатить полностью*/}
              Оплатить
            </PayFullAmountButton>
          </FormButtonsBlock>
        </>
      )}
      {isMobile && (
        <MobileButtonBlock>
          <Line />
          <MobileButton
            dark
            disabled={!isValid}
            onClick={mobileButtonSubmitHandler}>
            Продолжить
          </MobileButton>
        </MobileButtonBlock>
      )}
    </FormWrapper>
  );
};

export default BookingFormBlock;
