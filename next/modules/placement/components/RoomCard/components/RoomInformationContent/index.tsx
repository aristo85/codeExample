import React, {FC} from 'react';
import {
  BookingCardRoomButton,
  RoomBookingTip,
  RoomCardBookingBlock,
  RoomCardDetailBlock,
  RoomCardDetailInformationBlock,
  RoomCardPrice,
  RoomCardTextValue,
  RoomInformationContainer,
  RoomInformationWrapper,
  RoomPriceAndButtonContainer,
  RoomRateTitle,
  RoomServiceBlock,
  RoomServiceName,
} from './styles';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {
  selectFilterValues,
  setFilterValue,
} from '@/modules/core/api/filterSlice';
import {useRouter} from 'next/router';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {PlacementRateData} from '@/modules/core/api/model/placement/placementRateData';
import {CancellationRoomPolicy} from '@/modules/placement/detail/detail.types';

import dayjs from 'dayjs';
import BreakfastIcon from '@/modules/core/components/icons/BreakfastIcon';
import TransportIcon from '@/modules/core/components/icons/TransportIcon';
import RandomServiceIcon from '@/modules/core/components/icons/RandomServiceIcon';
import {Service} from '@/modules/profile/types';
import {serviceHandler} from '@/modules/core/helpers/serviceHandler';

export type RoomInformationContentProps = {
  fullPlacementsName: string;
  roomId?: number;
  ratePlan?: PlacementRateData;
  cancellationPolicy: CancellationRoomPolicy;
  price: {
    price: number;
    taxAmount: number;
    daysCount: number;
    pricePerDay: number;
    totalPrice: number;
  };
  currentRoomServices?: Service[];
};

const RoomInformationContent: FC<RoomInformationContentProps> = ({
  roomId,
  ratePlan,
  cancellationPolicy,
  price,
  currentRoomServices,
  fullPlacementsName,
}) => {
  const filterData = useAppSelector(selectFilterValues);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onBookingButtonHandler = () => {
    dispatch(
      setFilterValue({
        roomId: roomId,
        ratePlanId: ratePlan?.id,
      }),
    );
    const {queriesString} = queryHandler(
      {
        ...filterData,
        roomId: roomId,
        ratePlanId: ratePlan?.id,
      },
      QueryLocation.form,
    );
    void router.push(`/booking/placement/${router.query.id}?${queriesString}`);
  };

  const {mealService, transportService, anotherServices} =
    serviceHandler(currentRoomServices);

  const isFreeCancellation = cancellationPolicy.freeCancellationPossible;
  const penaltyAmount = cancellationPolicy.penaltyAmount;
  const isCancellationDeadline =
    cancellationPolicy.freeCancellationDeadlineLocal;

  return (
    <RoomInformationWrapper>
      <RoomInformationContainer>
        <RoomCardDetailBlock>
          <RoomCardDetailInformationBlock>
            <RoomRateTitle>{fullPlacementsName || ''}</RoomRateTitle>
            <RoomServiceBlock>
              <BreakfastIcon
                width={24}
                height={24}
                fill={mealService ? '#1D7ABD' : '#222121'}
              />
              <RoomCardTextValue>
                {mealService ? (
                  <>
                    <RoomServiceName highlighted={true}>
                      Питание:
                    </RoomServiceName>
                    <RoomServiceName>{` ${mealService.name}`}</RoomServiceName>
                  </>
                ) : (
                  <RoomServiceName bold={true}>Без завтрака</RoomServiceName>
                )}
              </RoomCardTextValue>
            </RoomServiceBlock>
            {transportService && (
              <RoomServiceBlock>
                <TransportIcon
                  width={24}
                  height={24}
                  fill={transportService ? '#1D7ABD' : '#222121'}
                />
                <RoomCardTextValue>
                  <RoomServiceName highlighted={true}>
                    Транспорт:
                  </RoomServiceName>
                  <RoomServiceName>
                    {` ${transportService.name}`}
                  </RoomServiceName>
                </RoomCardTextValue>
              </RoomServiceBlock>
            )}
            {anotherServices?.map(service => {
              return (
                <RoomServiceBlock key={service.id}>
                  <RandomServiceIcon width={24} height={24} fill={'#1D7ABD'} />
                  <RoomCardTextValue>
                    {service.name === service.description ? (
                      <RoomServiceName
                        highlighted={true}>{`${service.name}`}</RoomServiceName>
                    ) : (
                      <RoomServiceName
                        highlighted={true}>{`${service.name}`}</RoomServiceName>
                    )}
                  </RoomCardTextValue>
                </RoomServiceBlock>
              );
            })}
          </RoomCardDetailInformationBlock>
        </RoomCardDetailBlock>
      </RoomInformationContainer>
      <RoomCardBookingBlock>
        <RoomPriceAndButtonContainer>
          <RoomCardPrice>{price.price} ₽</RoomCardPrice>
          <BookingCardRoomButton dark onClick={onBookingButtonHandler}>
            Бронировать
          </BookingCardRoomButton>
        </RoomPriceAndButtonContainer>
        {isFreeCancellation ? (
          <RoomBookingTip>
            {isCancellationDeadline
              ? `Бесплатная отмена до ${dayjs(isCancellationDeadline).format(
                  'DD.MM.YYYY HH:mm',
                )}
                  по местному времени отеля`
              : 'Отмена бесплатная'}
          </RoomBookingTip>
        ) : (
          penaltyAmount && (
            <RoomBookingTip>Отмена платная — {penaltyAmount} ₽</RoomBookingTip>
          )
        )}
      </RoomCardBookingBlock>
    </RoomInformationWrapper>
  );
};

export default RoomInformationContent;
