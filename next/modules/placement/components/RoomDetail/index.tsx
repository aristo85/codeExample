import React, {FC} from 'react';
import {
  BookingButton,
  ButtonContent,
  ButtonPriceContainer,
  CancellationText,
  FreePriceText,
  InformationDetail,
  InfoTitle,
  Price,
  RoomDetailWrapper,
  ServiceText,
} from '@/modules/placement/components/RoomDetail/styles';
import {DetailPageData, Room} from '@/modules/placement/detail/detail.types';
import dayjs from 'dayjs';
import {useRouter} from 'next/router';
import {
  selectFilterValues,
  setFilterValue,
} from '@/modules/core/api/filterSlice';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {Service} from '@/modules/profile/types';

export interface RoomDetailProps extends Room {
  services: Service[];
  roomIndex: number;
  ratePlans: DetailPageData['ratePlans'];
}

const RoomDetail: FC<RoomDetailProps> = ({
  placementExtraData,
  services,
  ratePlans,
}) => {
  const {
    roomId,
    ratePlan,
    cancellationPolicy,
    price,
    includedServices,
    fullPlacementsName,
  } = placementExtraData;

  const filterData = useAppSelector(selectFilterValues);

  const dispatch = useAppDispatch();

  const router = useRouter();

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
    <RoomDetailWrapper>
      <InformationDetail>
        <div>
          <InfoTitle>
            <span> {fullPlacementsName}</span>
          </InfoTitle>
          {includedServices?.map(({id}, index) => {
            const service = services.find(
              service => String(service.id) === String(id),
            );
            return (
              <ServiceText key={`${id}-${index}`}>
                {`${service?.name}`}
                {service?.description &&
                  service?.description !== service?.name && (
                    <span>{service?.description}</span>
                  )}
              </ServiceText>
            );
          })}
        </div>
        <ButtonPriceContainer>
          <ButtonContent>
            <Price>{price.price} рублей</Price>
            {cancellationPolicy.freeCancellationPossible &&
              cancellationPolicy.freeCancellationDeadlineLocal && (
                <CancellationText>
                  {`Бесплатная отмена до ${dayjs(
                    cancellationPolicy.freeCancellationDeadlineLocal,
                  ).format('DD.MM.YYYY HH:mm')}
                  по местному времени отеля`}
                </CancellationText>
              )}

            {/*If don't have time(null) but cancellation is true*/}
            {cancellationPolicy.freeCancellationPossible &&
              !cancellationPolicy.freeCancellationDeadlineLocal && (
                <FreePriceText>Бесплатная отмена</FreePriceText>
              )}
          </ButtonContent>
          <BookingButton dark onClick={onBookingButtonHandler}>
            Бронировать
          </BookingButton>
        </ButtonPriceContainer>
      </InformationDetail>
    </RoomDetailWrapper>
  );
};

export default RoomDetail;
