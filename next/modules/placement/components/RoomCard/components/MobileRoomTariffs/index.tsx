import React, {FC} from 'react';
import {PlacementRateData} from '@/modules/core/api/model/placement/placementRateData';
import {
  CancellationText,
  CardContainer,
  InfoTitle,
  Price,
  ServiceContainer,
  StyledSwiper,
} from './styles';
import {
  BookingCardRoomButton,
  RoomCardTextValue,
  RoomServiceBlock,
  RoomServiceName,
  RoomServiceValue,
} from '../RoomInformationContent/styles';
import {SwiperSlide} from 'swiper/react';
import {Room} from '@/modules/placement/detail/detail.types';
import {Pagination} from 'swiper/modules';
import dayjs from 'dayjs';
import BreakfastIcon from '@/modules/core/components/icons/BreakfastIcon';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {
  selectFilterValues,
  setFilterValue,
} from '@/modules/core/api/filterSlice';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {useRouter} from 'next/router';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Service} from '@/modules/profile/types';
import TransportIcon from '@/modules/core/components/icons/TransportIcon';
import RandomServiceIcon from '@/modules/core/components/icons/RandomServiceIcon';
import {serviceHandler} from '@/modules/core/helpers/serviceHandler';

type Props = {
  rooms: Room[];
  services: Service[];
  ratePlans?: PlacementRateData[];
};

const MobileRoomTariffs: FC<Props> = ({rooms, ratePlans, services}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const filterData = useAppSelector(selectFilterValues);

  return rooms.length > 0 ? (
    <StyledSwiper pagination={{clickable: true}} modules={[Pagination]}>
      {rooms.map((room, index) => {
        const {
          roomId,
          ratePlan,
          cancellationPolicy,
          price,
          includedServices,
          fullPlacementsName,
        } = room.placementExtraData;

        const currentRoomServices = includedServices?.map(({id}, index) =>
          services.find(service => String(service.id) === String(id)),
        ) as Service[];

        const {mealService, transportService, anotherServices} =
          serviceHandler(currentRoomServices);

        const isFreeCancellation = cancellationPolicy.freeCancellationPossible;
        const penaltyAmount = cancellationPolicy.penaltyAmount;
        const isCancellationDeadline =
          cancellationPolicy.freeCancellationDeadlineLocal;

        const onBookingButtonHandler = () => {
          dispatch(
            setFilterValue({
              roomId: roomId,
              ratePlanId: ratePlan.id,
            }),
          );
          const {queriesString} = queryHandler(
            {
              ...filterData,
              roomId: roomId,
              ratePlanId: ratePlan.id,
            },
            QueryLocation.form,
          );
          router.push(`/booking/placement/${router.query.id}?${queriesString}`);
        };

        return (
          <SwiperSlide key={`${index}`}>
            <CardContainer>
              <InfoTitle>{fullPlacementsName}</InfoTitle>
              <ServiceContainer>
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
                      <RoomServiceName
                        bold={true}>{`Без завтрака`}</RoomServiceName>
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
                      <RoomServiceName highlighted={!!transportService}>
                        Транспорт:
                      </RoomServiceName>
                      <RoomServiceValue>
                        {transportService?.name}
                      </RoomServiceValue>
                    </RoomCardTextValue>
                  </RoomServiceBlock>
                )}
                {anotherServices?.map(service => {
                  return (
                    service && (
                      <RoomServiceBlock key={service.id}>
                        <RandomServiceIcon
                          width={24}
                          height={24}
                          fill={'#1D7ABD'}
                        />
                        <RoomCardTextValue>
                          {service.name === service.description ? (
                            <RoomServiceName highlighted={true}>
                              {service.name}
                            </RoomServiceName>
                          ) : (
                            <RoomServiceName
                              highlighted={
                                true
                              }>{`${service.name}`}</RoomServiceName>
                          )}
                        </RoomCardTextValue>
                      </RoomServiceBlock>
                    )
                  );
                })}
              </ServiceContainer>
              <Price>{price.price} ₽</Price>
              <BookingCardRoomButton onClick={onBookingButtonHandler}>
                Бронировать
              </BookingCardRoomButton>
              {isFreeCancellation ? (
                <CancellationText>
                  {isCancellationDeadline
                    ? `Бесплатная отмена до ${dayjs(
                        isCancellationDeadline,
                      ).format('DD.MM.YYYY HH:mm')}
                  по местному времени отеля`
                    : 'Отмена бесплатная'}
                </CancellationText>
              ) : (
                penaltyAmount && (
                  <CancellationText>
                    Отмена платная — {penaltyAmount} ₽
                  </CancellationText>
                )
              )}
            </CardContainer>
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  ) : (
    <></>
  );
};

export default MobileRoomTariffs;
