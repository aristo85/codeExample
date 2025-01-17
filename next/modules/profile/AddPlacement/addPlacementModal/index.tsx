import InputStyled from '@/modules/core/components/inputs/InputStyled';
import React, {useMemo} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {ModalTitle} from '@/modules/auth/components/ModalAuth/styles';
import ModalAuth from '@/modules/auth/components/ModalAuth';
import {useNotification} from '@/modules/core/hooks/useNotification';
import {PlacementType} from '@/modules/placement/components/BookingCard';
import {
  PlacementTypeApiEnum,
  placementTypeApiOptions,
} from '@/modules/profile/AddPlacement';
import {useAddPlacementByIdMutation} from '@/modules/placement/apiPlacementSlice';
import {
  FormWrapper,
  ImageCover,
  ModalSubTitle,
  TipsContainer,
} from '@/modules/profile/AddPlacement/addPlacementModal/styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Spinner from '@/modules/core/components/Spinner';

const AddPlacementValidationSchema = yup.object().shape({
  placementId: yup.string().required('Укажите объект размещения'),
});

export interface AddPlacementById {
  placementId: string;
}

export interface addPlacementModalProps {
  closeButton: () => void;
  placementType: PlacementType | null;
  placementApiType: PlacementTypeApiEnum | null;
}
export const AddPlacementModal: React.FC<addPlacementModalProps> = ({
  closeButton,
  placementType,
  placementApiType,
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<AddPlacementById>({
    resolver: yupResolver(AddPlacementValidationSchema),
    mode: 'onChange',
  });

  const [addPlacementFn, {isLoading}] = useAddPlacementByIdMutation();

  const toast = useNotification();
  const router = useRouter();

  const handleFormSubmit = async ({placementId}: AddPlacementById) => {
    if (placementId && placementApiType && placementType) {
      const response = await addPlacementFn({
        placementId,
        placementApiType,
        placementType,
      }).unwrap();

      if (response.success) {
        toast('Удачно добавлен объект размещения', 'success');
        closeButton();
        setTimeout(() => {
          router.push('/control-panel/placement');
        }, 1000);
      }
    }
  };

  const currentApiType = useMemo(
    () =>
      placementTypeApiOptions.filter(
        option => option.code === placementApiType,
      )[0],
    [placementApiType],
  );

  return (
    <ModalAuth isOpen={true} onClose={closeButton}>
      <Spinner showSpinner={isLoading} />
      <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
        <ModalTitle>Добавление объекта</ModalTitle>
        <InputStyled
          label="ID объекта проживания"
          placeholder={`Введите Property ID от ${currentApiType.name}`}
          {...register('placementId')}
          error={errors.placementId?.message}
        />
        <TipsContainer>
          <ModalSubTitle>{currentApiType.description}</ModalSubTitle>
          <ImageCover>
            <Image fill={true} src={currentApiType.imageTip} alt={'tip'} />
          </ImageCover>
          <ModalSubTitle>{currentApiType.tips}</ModalSubTitle>
        </TipsContainer>
        <ButtonBasic disabled={!isValid} dark type="submit">
          Добавить
        </ButtonBasic>
      </FormWrapper>
    </ModalAuth>
  );
};
