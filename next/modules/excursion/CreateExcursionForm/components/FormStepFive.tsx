import React from 'react';
import {
  ErrorMessage,
  ImageWrapper,
  InformationTxt,
  PhotoSection,
  StepWrapper,
} from '../styles';
import {ImageUpload} from '@/modules/core/components/ImageUpload';
import {Color, Shape} from '@/modules/core/components/ImageInput/types';
import Camera from '@/modules/core/components/icons/Camera';
import {Controller, useFormContext} from 'react-hook-form';
import {TourFormData} from '../../types';

const FormStepFive = () => {
  const {
    formState: {errors},
    control,
  } = useFormContext<TourFormData>();
  return (
    <StepWrapper>
      <InformationTxt>
        Загрузите качественные и яркие фото с пейзажами, архитектурными,
        природными и другими любопытными объектами по маршруту. Также хорошо
        подойдут фото с людьми на вашей экскурсии, чтобы прочувствовать
        атмосферу, которую вы создаете. <br />
        Добавьте к описанию экскурсии <span>минимум 6 фотографий</span>.
        Минимальные размеры фотографий:{' '}
        <span>горизонтальные – 1200х1000, вертикальные – 1000х1350</span>.
        Загружая фотографии, вы подтверждаете право их использования на нашем
        сайте: изображения сделаны вами, взяты с согласия автора или из
        легальных источников, а также не нарушают прав третьих лиц.
      </InformationTxt>
      <PhotoSection>
        <ImageWrapper>
          <Controller
            name="mainPhoto"
            control={control}
            render={({field: {value, onChange}}) => {
              return (
                <>
                  <ImageUpload
                    imageText={'Добавить главную фотографию'}
                    onImageUpload={data => {
                      onChange(data);
                    }}
                    shape={Shape.RECTANGLE}
                    color={Color.PRIMARY}
                    icon={<Camera fill={'#fff'} />}
                    disabledIcon={<Camera fill={'rgba(34, 33, 33, 0.32)'} />}
                    imageList={value ?? []}
                    mainImage={true}
                  />
                  {errors.mainPhoto && (
                    <ErrorMessage>{errors.mainPhoto.message}</ErrorMessage>
                  )}
                </>
              );
            }}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Controller
            name="photos"
            control={control}
            render={({field: {value, onChange}}) => {
              return (
                <>
                  <ImageUpload
                    imageText={'Добавить фотографии'}
                    onImageUpload={data => {
                      onChange(data);
                    }}
                    shape={Shape.RECTANGLE}
                    color={Color.WHITE}
                    icon={<Camera fill={'#1D7ABD'} />}
                    multipleImages={true}
                    imageList={value ?? []}
                  />
                  {errors.photos && (
                    <ErrorMessage>{errors.photos.message}</ErrorMessage>
                  )}
                </>
              );
            }}
          />
        </ImageWrapper>
      </PhotoSection>
    </StepWrapper>
  );
};

export default FormStepFive;
