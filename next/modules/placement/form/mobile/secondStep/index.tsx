import React, {FC} from 'react';

import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import {
  BookingFormMainData,
  BookingFormPage,
} from '@/modules/placement/form/styles';
import BookingFormBlock from '@/modules/placement/form/bookingForm';
import {StepDescription} from '@/modules/placement/form/mobile/styles';
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';
import {BookingFormFields} from '@/modules/placement/form';
import DataTermsAndPrivacyPolicy from '@/modules/core/components/DataTermsAndPrivacyPolicy';
import {
  cancelReservationText,
  privacyPolicyText,
  termsOfDataUseText,
} from '@/modules/core/components/DataTermsAndPrivacyPolicy/content';
import PriceComponent, {
  PriceComponentProps,
} from '@/modules/core/components/PriceComponent';
import {HeaderWithSteps} from '@/modules/core/components/HeaderWithSteps';
import {CancellationRoomPolicy} from '@/modules/placement/detail/detail.types';

export interface MobileBookingProps {
  register: UseFormRegister<BookingFormFields>;
  handleSubmit: UseFormHandleSubmit<BookingFormFields>;
  control: Control<BookingFormFields>;
  watch: UseFormWatch<BookingFormFields>;
  trigger: UseFormTrigger<BookingFormFields>;
  formState: FormState<BookingFormFields>;
  breadcrumbsItems: {
    label: string;
    url: string;
  }[];
  name?: string;
  address?: string;
  nextStepFn: () => void;
  guestsCount: number;
  getValues: (value: string) => string;
  currentPrices: PriceComponentProps;
  setFirstGuestDataToForm: () => void;
  setValue: UseFormSetValue<BookingFormFields>;
  cancellationPolicy?: CancellationRoomPolicy;
}

export const MobileSecondStepBooking: FC<MobileBookingProps> = ({
  register,
  handleSubmit,
  control,
  watch,
  trigger,
  formState,
  breadcrumbsItems,
  name,
  address,
  nextStepFn,
  guestsCount,
  getValues,
  currentPrices,
  cancellationPolicy,
  setFirstGuestDataToForm,
  setValue,
}) => {
  return (
    <>
      <BookingFormPage>
        <BookingFormMainData>
          <Breadcrumbs paths={breadcrumbsItems} isMobile={true} />
          <HeaderWithSteps
            title={name}
            subTitle={address}
            stepsAmount={3}
            currentStep={2}
          />
          <StepDescription>Укажите ваши контактные данные</StepDescription>
          <BookingFormBlock
            setFirstGuestDataToForm={setFirstGuestDataToForm}
            setValue={setValue}
            getValues={getValues}
            register={register}
            watch={watch}
            trigger={trigger}
            handleSubmit={handleSubmit}
            control={control}
            formState={formState}
            isMobile={true}
            nextStepFn={nextStepFn}
            stayDates={null}
            guestsCount={guestsCount}
          />
          <PriceComponent
            upSection={currentPrices.upSection}
            downSection={currentPrices.downSection}
          />
          <DataTermsAndPrivacyPolicy
            items={[
              {
                title: 'Отмена бронирования',
                text: cancelReservationText(cancellationPolicy),
              },
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
        </BookingFormMainData>
      </BookingFormPage>
    </>
  );
};
