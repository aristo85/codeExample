import React, {FC, useState} from 'react';

import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import {
  BookingFormMainData,
  BookingFormPage,
  Line,
} from '@/modules/placement/form/styles';
import {
  MobileButton,
  ModalRoomButton,
  ModalRoomContent,
  ModalRoomTitle,
  RoomInfoBlock,
  StepDescription,
} from '../styles';
import {Room} from '@/modules/placement/detail/detail.types';
import RoomData from '@/modules/placement/form/components/RoomData';
import PenIcon from '@/modules/core/components/icons/PenIcon';
import {Modal, Radio} from '@mui/material';
import DateInformation, {
  Dates,
} from '@/modules/placement/form/components/DateInformation';
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

export type SelectedRoomOption = {
  roomId: number;
  ratePlanId: number;
};

export interface MobileBookingProps {
  breadcrumbsItems: {
    label: string;
    url: string;
  }[];
  name?: string;
  address?: string;
  currentRoom?: Room;
  guestsCount: number;
  services?: Service[];
  rooms?: Room[];
  changeRoomFn: (roomOption: SelectedRoomOption) => void;
  stayDates: Dates | null;
  nextStepFn: () => void;
  currentPrices: PriceComponentProps;
}

export const MobileFirstStepBooking: FC<MobileBookingProps> = ({
  breadcrumbsItems,
  name,
  address,
  currentRoom,
  guestsCount,
  services,
  rooms,
  changeRoomFn,
  stayDates,
  nextStepFn,
  currentPrices,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectedRoomOption, setSelectedRoomOption] =
    useState<SelectedRoomOption | null>(
      currentRoom
        ? {
            roomId: currentRoom?.placementExtraData.roomId,
            ratePlanId: currentRoom?.placementExtraData.ratePlan.id,
          }
        : null,
    );

  const handleRoomSelection = (roomOption: SelectedRoomOption) => {
    setSelectedRoomOption(roomOption);
  };

  const onConfirmModalHandler = () => {
    if (selectedRoomOption) {
      changeRoomFn(selectedRoomOption);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <BookingFormPage>
        <BookingFormMainData>
          <Breadcrumbs paths={breadcrumbsItems} isMobile={true} />
          <HeaderWithSteps
            title={name}
            subTitle={address}
            stepsAmount={3}
            currentStep={1}
          />
          <StepDescription>Проверьте дату и время бронирования</StepDescription>
          <RoomInfoBlock>
            <RoomData
              guestsCount={guestsCount}
              currentRoom={currentRoom}
              services={services}
              backwardLink={breadcrumbsItems[2].url}
            />
            <PenIcon onClick={() => setIsModalOpen(prev => !prev)} />
          </RoomInfoBlock>
          <DateInformation
            stayDates={stayDates}
            backwardLink={breadcrumbsItems[1].url}
          />
          <PriceComponent
            upSection={currentPrices.upSection}
            downSection={currentPrices.downSection}
          />
          <Line />
          <MobileButton dark onClick={nextStepFn}>
            Продолжить
          </MobileButton>
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
      <Modal open={isModalOpen}>
        <ModalRoomContent>
          <ModalRoomTitle>Выберите номер</ModalRoomTitle>
          {rooms &&
            rooms.map((room, index) => {
              const {roomId, ratePlan} = room.placementExtraData;
              return (
                <RoomInfoBlock key={`${roomId}-${index}`}>
                  <RoomData
                    guestsCount={guestsCount}
                    currentRoom={room}
                    services={services}
                  />
                  <Radio
                    checked={
                      selectedRoomOption?.roomId === roomId &&
                      selectedRoomOption.ratePlanId === ratePlan.id
                    }
                    onChange={() =>
                      handleRoomSelection({roomId, ratePlanId: ratePlan.id})
                    }
                  />
                </RoomInfoBlock>
              );
            })}
          <ModalRoomButton dark onClick={onConfirmModalHandler}>
            Подтвердить выбор
          </ModalRoomButton>
        </ModalRoomContent>
      </Modal>
    </>
  );
};
