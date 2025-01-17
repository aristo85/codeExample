import React from 'react';
import {
  BirthdateInput,
  DateWrapper,
  ErrorMessage,
  FormInput,
  FormPhoneWrapper,
  GuideContacts,
  GuideInfo,
  GuideWrapper,
  ImageWrapper,
  StepWrapper,
} from '../styles';
import {ImageUpload} from '@/modules/core/components/ImageUpload';
import {Color, Shape} from '@/modules/core/components/ImageInput/types';
import Camera from '@/modules/core/components/icons/Camera';
import {Controller, useFormContext} from 'react-hook-form';
import {GuideFormData} from '../../types';
import PhoneInputNumber from '@/modules/core/components/inputs/PhoneInput';
import TextAreaStyled from '@/modules/core/components/inputs/TextareaStyled';
import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

const FormStepOne = () => {
  const {
    register,
    control,
    formState: {errors},
  } = useFormContext<GuideFormData>();
  return (
    <StepWrapper>
      <GuideWrapper>
        <ImageWrapper>
          <Controller
            name="avatar"
            control={control}
            render={({field: {value, onChange}}) => {
              return (
                <>
                  <ImageUpload
                    imageText={'Добавить фото гида'}
                    onImageUpload={data => {
                      onChange(data);
                    }}
                    shape={Shape.RECTANGLE}
                    color={Color.WHITE}
                    icon={<Camera fill={'#1D7ABD'} />}
                    imageList={value ?? []}
                    isFullHeight
                  />
                  {errors.avatar?.message && (
                    <ErrorMessage>{errors.avatar.message}</ErrorMessage>
                  )}
                </>
              );
            }}
          />
        </ImageWrapper>
        <GuideInfo>
          <GuideContacts>
            <FormInput
              isStepOne
              label="Имя гида"
              {...register('name')}
              placeholder="Введите имя и фамилию гида"
              error={errors.name?.message}
            />
            <Controller
              control={control}
              name="birthdayDate"
              render={({field}) => (
                <DateWrapper style={{width: '50%'}}>
                  <BirthdateInput
                    style={{width: '100%'}}
                    label="Дата рождения гида"
                    value={field.value ? dayjs(field.value) : null}
                    setValue={value => {
                      field.onChange(dayjs(value).format(DEFAULT_DATE_FORMAT));
                    }}
                    placeholder="Выберите дату рождения гида"
                    maxDate={dayjs()}
                    disablePast={false}
                    error={errors?.birthdayDate?.message}
                  />
                  {errors.birthdayDate?.message && (
                    <ErrorMessage>{errors.birthdayDate.message}</ErrorMessage>
                  )}
                </DateWrapper>
              )}
            />
          </GuideContacts>
          <GuideContacts>
            <FormPhoneWrapper>
              <Controller
                name="phone"
                control={control}
                render={({field}) => {
                  return (
                    <PhoneInputNumber
                      label="Номер телефона гида"
                      placeholder="Введите номер телефона гида"
                      onChange={field.onChange}
                      error={errors.phone?.message}
                      phoneNumber={field.value}
                    />
                  );
                }}
              />
            </FormPhoneWrapper>
            <FormInput
              isStepOne
              label="Email гида"
              {...register('email')}
              placeholder="Укажите адрес email гида"
              error={errors.email?.message}
            />
          </GuideContacts>
        </GuideInfo>
      </GuideWrapper>
      <TextAreaStyled
        label="Расскажите о Гиде"
        {...register('description')}
        placeholder="Это подробная информация о гиде и его услугах. То, что вы здесь напишете будет отображаться на детальной странице гида."
        error={errors.description?.message}
      />
    </StepWrapper>
  );
};

export default FormStepOne;
