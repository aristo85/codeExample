import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {
  ErrorMessage,
  FormInput,
  FormPhoneWrapper,
  GuideContacts,
  GuideInfo,
  GuideWrapper,
  ImageWrapper,
  StepWrapper,
} from '../styles';
import Camera from '@/modules/core/components/icons/Camera';
import TextAreaStyled from '@/modules/core/components/inputs/TextareaStyled';
import PhoneInputNumber from '@/modules/core/components/inputs/PhoneInput';
import {Color, Shape} from '@/modules/core/components/ImageInput/types';
import {TourFormData} from '../../types';
import {ImageUpload} from '@/modules/core/components/ImageUpload';

const FormStepOne = () => {
  const {
    register,
    control,
    formState: {errors},
  } = useFormContext<TourFormData>();
  return (
    <StepWrapper>
      <FormInput
        label="Название экскурсии"
        {...register('name')}
        placeholder="В одну строчку напишите, чему посвящена экскурсия, чтобы туристу было понятно ее содержание"
        mobileh={98}
        error={errors.name?.message}
      />
      <GuideWrapper>
        <ImageWrapper>
          <Controller
            name="guideAvatar"
            control={control}
            render={({field: {value, onChange}}) => {
              return (
                <>
                  <ImageUpload
                    imageText={'Добавить фото экскурсовода'}
                    onImageUpload={data => {
                      onChange(data);
                    }}
                    shape={Shape.CIRCLE}
                    color={Color.WHITE}
                    icon={<Camera fill={'#1D7ABD'} />}
                    imageList={value ?? []}
                  />
                  {errors.guideAvatar?.message && (
                    <ErrorMessage>{errors.guideAvatar.message}</ErrorMessage>
                  )}
                </>
              );
            }}
          />
        </ImageWrapper>
        <GuideInfo>
          <FormInput
            label="Имя экскурсовода"
            {...register('guideName')}
            placeholder="Введите имя и фамилию экскурсовода"
            error={errors.guideName?.message}
          />
          <GuideContacts>
            <FormPhoneWrapper>
              <Controller
                name="guidePhone"
                control={control}
                render={({field}) => {
                  return (
                    <PhoneInputNumber
                      label="Номер телефона экскурсовода"
                      placeholder="Введите номер телефона экскурсовода"
                      onChange={field.onChange}
                      error={errors.guidePhone?.message}
                      phoneNumber={field.value}
                    />
                  );
                }}
              />
            </FormPhoneWrapper>
            <FormInput
              label="Email экскурсовода"
              {...register('guideEmail')}
              placeholder="Укажите адрес email экскурсовода"
              error={errors.guideEmail?.message}
            />
          </GuideContacts>
        </GuideInfo>
      </GuideWrapper>
      <TextAreaStyled
        label="Описание"
        {...register('description')}
        placeholder="Представьте, что экскурсии на эту тему проводят разные экскурсоводы. Чтобы убедить людей пойти на экскурсию с вами, нужно показать, чем вы отличаетесь от других экскурсоводов. В чем заключается ваш подход? Что именно вы хотите рассказать на экскурсии? Вдохновите этим других людей!"
        error={errors.description?.message}
      />
    </StepWrapper>
  );
};

export default FormStepOne;
