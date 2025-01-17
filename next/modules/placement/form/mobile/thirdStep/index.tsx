import React, {FC} from 'react';

import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import {
  BookingFormMainData,
  BookingFormPage,
  Line,
} from '@/modules/placement/form/styles';
import {
  ConfirmFormData,
  ConfirmTitle,
  ConfirmValue,
  MobileButton,
  StepDescription,
} from '../styles';
import RoomData from '@/modules/placement/form/components/RoomData';
import {Room} from '@/modules/placement/detail/detail.types';
import DateInformation, {
  Dates,
} from '@/modules/placement/form/components/DateInformation';
import {BookingFormFields} from '@/modules/placement/form';
import {UseFormHandleSubmit, UseFormWatch} from 'react-hook-form';
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
import {Service} from '@/modules/profile/types';

export interface MobileBookingProps {
  handleSubmit: UseFormHandleSubmit<BookingFormFields>;
  watch: UseFormWatch<BookingFormFields>;
  breadcrumbsItems: {
    label: string;
    url: string;
  }[];
  name?: string;
  address?: string;
  currentRoom?: Room;
  guestsCount: number;
  services?: Service[];
  stayDates: Dates | null;
  fullPaymentFn: (data: BookingFormFields) => void;
  partialPaymentFn: (data: BookingFormFields) => void;
  currentPrices: PriceComponentProps;
}

export const MobileThirdStepBooking: FC<MobileBookingProps> = ({
  handleSubmit,
  watch,
  breadcrumbsItems,
  name,
  address,
  guestsCount,
  currentRoom,
  services,
  stayDates,
  fullPaymentFn,
  partialPaymentFn,
  currentPrices,
}) => {
  const {firstName, lastName, phone, email, bookingComments} = watch();

  return (
    <>
      <BookingFormPage>
        <BookingFormMainData>
          <Breadcrumbs paths={breadcrumbsItems} isMobile={true} />
          <HeaderWithSteps title={name} subTitle={address} />
          <StepDescription>Проверьте бронирование</StepDescription>
          <RoomData
            guestsCount={guestsCount}
            currentRoom={currentRoom}
            services={services}
            backwardLink={breadcrumbsItems[2].url}
          />
          <Line />
          <DateInformation
            stayDates={stayDates}
            isMobileFinalStep={true}
            backwardLink={breadcrumbsItems[1].url}
          />
          <Line />
          <ConfirmFormData>
            <ConfirmTitle>Имя</ConfirmTitle>
            <ConfirmValue>{`${firstName} ${lastName}`}</ConfirmValue>
          </ConfirmFormData>
          <ConfirmFormData>
            <ConfirmTitle>Телефон</ConfirmTitle>
            <ConfirmValue>{phone}</ConfirmValue>
          </ConfirmFormData>
          <ConfirmFormData>
            <ConfirmTitle>Email</ConfirmTitle>
            <ConfirmValue>{email}</ConfirmValue>
          </ConfirmFormData>
          <Line />
          {bookingComments && (
            <>
              <ConfirmFormData>
                <ConfirmTitle>Комментарий</ConfirmTitle>
                <ConfirmValue style={{whiteSpace: 'pre-wrap'}}>
                  {bookingComments}
                </ConfirmValue>
              </ConfirmFormData>
              <Line />
            </>
          )}
          <PriceComponent
            upSection={currentPrices.upSection}
            downSection={currentPrices.downSection}
          />
          <Line />
          <MobileButton dark onClick={handleSubmit(fullPaymentFn)}>
            {/*Оплатить полностью*/}
            Оплатить
          </MobileButton>
          {/*<MobileButton onClick={handleSubmit(partialPaymentFn)}>*/}
          {/*  Внести предоплату*/}
          {/*</MobileButton>*/}
          <DataTermsAndPrivacyPolicy
            items={[
              {
                title: 'Отмена бронирования',
                text: cancelReservationText(
                  currentRoom?.placementExtraData.cancellationPolicy,
                ),
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
