import React, {FC} from 'react';

import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {
  BookingFormRoomData,
  RoomCost,
  RoomDetail,
  RoomDetailBlock,
  RoomImage,
  RoomName,
} from './styles';
import {Room} from '@/modules/placement/detail/detail.types';
import {currencyNameFormatter} from '@/modules/placement/constants';
import {useRouter} from 'next/router';
import {Service} from '@/modules/profile/types';

export interface RoomDataProps {
  currentRoom?: Room;
  guestsCount: number;
  services?: Service[];
  backwardLink?: string;
}
const RoomData: FC<RoomDataProps> = ({
  currentRoom,
  guestsCount,
  services,
  backwardLink,
}) => {
  const router = useRouter();
  const {price, currencyCode} = currentRoom?.placementExtraData || {};

  const backwardHandler = () => {
    if (!backwardLink) return;

    router.push(backwardLink);
  };

  const currentRoomServices =
    currentRoom?.placementExtraData.includedServices?.map(({id}) =>
      services?.find(service => String(service.id) === String(id)),
    ) as Service[];

  return (
    <BookingFormRoomData onClick={backwardHandler}>
      {currentRoom?.images[0] && (
        <RoomImage
          width={68}
          height={68}
          src={currentRoom?.images[0] || ''}
          alt={'Room-image'}
        />
      )}
      <RoomDetailBlock>
        <RoomName>{currentRoom?.roomName || ''}</RoomName>
        <RoomDetail>
          {`${guestsCount} ${pluralizationFn(guestsCount, [
            'гость',
            'гостя',
            'гостей',
          ])}`}
          {currentRoomServices.length > 0 &&
            `. Включено: ${currentRoomServices?.map(
              service => ` ${service.name.toLowerCase()}`,
            )}`}
        </RoomDetail>
        {price && currencyCode && (
          <RoomCost>
            {`${price.pricePerDay || 0} ${currencyNameFormatter(
              price.pricePerDay || 0,
              currencyCode,
            )} / ночь`}
          </RoomCost>
        )}
      </RoomDetailBlock>
    </BookingFormRoomData>
  );
};

export default RoomData;
