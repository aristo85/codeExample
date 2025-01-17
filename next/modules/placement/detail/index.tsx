import React, {FC, useState} from 'react';
import {BookingAddress} from '@/modules/placement/styles';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import {GroupedByRoomDetailData} from '@/modules/placement/detail/detail.types';
import NameRatingTitle from '@/modules/placement/components/NameRatingTitle';
import {
  BookingAvailableRooms,
  BookingHeaderContainer,
  DateBlock,
  DetailBookingPageWrapper,
  InfoTitle,
  SubTitle,
  Divider,
  AvailableRoomInfo,
  TitleText,
  PageContainer,
  BreadcrumbsBlock,
  DetailHeadSection,
  FilterSection,
  GallerySection,
  FeaturesContainer,
  BlockContainer,
  BlockTitle,
  BlockText,
  AdvantageBlock,
  AdvantageText,
  BookingButton,
  FeaturesBlock,
  AmenitiesList,
  RoomsBlock,
  FilterBlock,
} from '@/modules/placement/detail/styles';
import {useAppSelector} from '@/modules/core/hooks';
import {useRouter} from 'next/router';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {selectFilterValues} from '@/modules/core/api/filterSlice';
import {useFilterDataFromQuery} from '@/modules/core/hooks/useFilterDataFromParams';
import dayjs from 'dayjs';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import PlacementFilter from '../components/PlacementFilter';
import PhotoGallery from '@/modules/core/components/PhotoGallery';
import FiltersHome from '@/modules/home/components/Filters';
import {AmenityItem, AmenityTxt} from '../components/Amenities/styles';
import BreakfastIcon from '@/modules/core/components/icons/BreakfastIcon';
import {getIconTravelLine} from '../components/Amenities/constants';
import RoomCard from '../components/RoomCard';
import MobileRoomCard from '../components/RoomCard/MobileRoomCard';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {serviceHandler} from '@/modules/core/helpers/serviceHandler';
import TransportIcon from '@/modules/core/components/icons/TransportIcon';
import RandomServiceIcon from '@/modules/core/components/icons/RandomServiceIcon';

export interface BookingDetailPageProps {
  data: GroupedByRoomDetailData;
}

export const BookingDetail: FC<BookingDetailPageProps> = ({data}) => {
  const [isModalGalleryOpen, setIsModalGalleryOpen] = useState(false);
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);

  const router = useRouter();
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const [isMapOpened, setIsMapOpened] = useState(false);
  const {
    name,
    rating,
    address,
    images,
    rooms,
    services,
    ratePlans,
    description,
    amenities,
  } = data;

  // rooms?.keys().next().value - get the key of the first rooms array, [0] - get the first room from the array
  const firstRoomDetails = rooms?.get(rooms?.keys().next().value)?.[0];
  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);
  useFilterDataFromQuery();

  const {queriesString: bookingDetailParams} = queryHandler(
    filterData,
    QueryLocation.detail,
  );
  const {queriesString: bookingListParams} = queryHandler(
    filterData,
    QueryLocation.list,
  );

  const filterSubmitHandler = (paramString: string) => {
    window.open(`/placement?${paramString}`, '_blank');
  };

  const handleButtonClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  const {mealService, transportService, anotherServices} =
    serviceHandler(services);

  const breadcrumbsItems = [
    {url: `/`, label: 'Главная'},
    {
      url: `/placement?${bookingListParams}`,
      label: 'Результаты поиска',
    },
    {url: `/placement/${router.query.id}`, label: name},
  ];

  const numberOfPeople =
    (data.filterDto.numOfAdult || 0) +
    (data?.filterDto?.childAges?.length || 0);

  const advantageBlock = () => (
    <AdvantageBlock>
      {mealService && <AdvantageText>Преимущества предложения</AdvantageText>}
      <AmenityItem>
        <BreakfastIcon width={32} height={32} fill="white" />
        <AmenityTxt style={{color: 'white'}}>{`${
          mealService ? 'Завтрак' : 'Без завтрака'
        }`}</AmenityTxt>
      </AmenityItem>
      <BookingButton dark onClick={handleButtonClick}>
        Бронировать
      </BookingButton>
    </AdvantageBlock>
  );

  const isAmenitiesAndServicesBlockShown = Boolean(
    amenities.length > 0 ||
      mealService ||
      transportService ||
      (anotherServices && anotherServices?.length > 0),
  );

  return (
    <PageContainer>
      <BreadcrumbsBlock>
        <Breadcrumbs paths={breadcrumbsItems} />
      </BreadcrumbsBlock>

      <DetailHeadSection>
        <FilterSection>
          {!isScreenSm ? (
            <FilterBlock>
              <PlacementFilter
                amenitiesData={[]}
                handler={filterSubmitHandler}
                locationForParamsString={QueryLocation.list}
                isWithoutFilterParams
                isBookingDetail
                mapLink={`/placement/${router.query.id}/map?${bookingDetailParams}`}
                isLink={true}
                isMapOpened={isMapOpened}
                handleMap={() => setIsMapOpened(prev => !prev)}
              />
            </FilterBlock>
          ) : (
            <FiltersHome
              handler={filterSubmitHandler}
              locationForParamsString={QueryLocation.home}
            />
          )}
        </FilterSection>
        <GallerySection>
          <BookingHeaderContainer>
            <NameRatingTitle name={name} rating={rating} />
            <BookingAddress>{address}</BookingAddress>
          </BookingHeaderContainer>
          <PhotoGallery
            images={images}
            isModalOpened={isModalGalleryOpen}
            setIsModalOpened={setIsModalGalleryOpen}
          />
        </GallerySection>
      </DetailHeadSection>
      <FeaturesContainer>
        <FeaturesBlock>
          {isAmenitiesAndServicesBlockShown && (
            <BlockContainer>
              <BlockTitle>Удобства и услуги</BlockTitle>
              <AmenitiesList>
                {amenities.map((amenity, index) => (
                  <AmenityItem key={amenity.id}>
                    {getIconTravelLine(amenity.code, {width: 28, height: 28})}
                    <AmenityTxt>{amenity.name}</AmenityTxt>
                  </AmenityItem>
                ))}
                {mealService && (
                  <AmenityItem>
                    <BreakfastIcon
                      width={34}
                      stroke={'#3d3d3d'}
                      height={34}
                      strokeWidth={1}
                    />
                    <AmenityTxt>{mealService.name}</AmenityTxt>
                  </AmenityItem>
                )}
                {transportService && (
                  <AmenityItem>
                    <TransportIcon
                      width={34}
                      stroke={'#3d3d3d'}
                      height={34}
                      strokeWidth={1}
                    />
                    <AmenityTxt>{transportService.name}</AmenityTxt>
                  </AmenityItem>
                )}
                {anotherServices?.map(service => {
                  return (
                    <AmenityItem key={service.id}>
                      <RandomServiceIcon
                        width={34}
                        stroke={'#3d3d3d'}
                        height={34}
                        strokeWidth={1.6}
                      />
                      <AmenityTxt>{service.name}</AmenityTxt>
                    </AmenityItem>
                  );
                })}
              </AmenitiesList>
            </BlockContainer>
          )}
          {isScreenSm && advantageBlock()}
          <BlockContainer>
            <BlockTitle>Об отеле</BlockTitle>
            <BlockText>{description}</BlockText>
          </BlockContainer>
        </FeaturesBlock>
        {!isScreenSm && advantageBlock()}
      </FeaturesContainer>
      <Divider />
      <DetailBookingPageWrapper ref={sectionRef}>
        <AvailableRoomInfo>
          <TitleText>Наличие мест на</TitleText>
          <TitleText>
            {` ${dayjs(data.filterDto.arrivalDate).format('D MMMM')} -
              ${dayjs(data.filterDto.departureDate).format('D MMMM')}, `}
          </TitleText>
          <TitleText>{`${numberOfPeople} ${pluralizationFn(numberOfPeople, [
            'гость',
            'гостя',
            'гостей',
          ])}`}</TitleText>
        </AvailableRoomInfo>

        <BookingAvailableRooms>
          <DateBlock>
            <InfoTitle>
              Заезд:
              <SubTitle>
                {dayjs(
                  firstRoomDetails?.placementExtraData.stayDates
                    .arrivalDateTime,
                ).format('DD.MM.YYYY HH:mm')}
              </SubTitle>
            </InfoTitle>
            <InfoTitle>
              Выезд:
              <SubTitle>
                {dayjs(
                  firstRoomDetails?.placementExtraData.stayDates
                    .departureDateTime,
                ).format('DD.MM.YYYY HH:mm')}
              </SubTitle>
            </InfoTitle>
            <SubTitle style={{textDecorationLine: 'none', padding: 0}}>
              (По местному времени отеля)
            </SubTitle>
          </DateBlock>
        </BookingAvailableRooms>
        <RoomsBlock>
          {rooms &&
            Array.from(rooms).map(([key, rooms], index) => {
              return isScreenSm && rooms ? (
                <MobileRoomCard
                  key={`${key}-${index}`}
                  services={services}
                  rooms={rooms}
                  ratePlans={ratePlans}
                  amenitiesWithCategory={rooms[0]?.amenitiesWithCategory}
                />
              ) : rooms ? (
                <RoomCard
                  services={services}
                  rooms={rooms}
                  key={`${key}-${index}`}
                  ratePlans={ratePlans}
                  amenitiesWithCategory={rooms[0]?.amenitiesWithCategory}
                />
              ) : (
                <></>
              );
            })}
        </RoomsBlock>
      </DetailBookingPageWrapper>
    </PageContainer>
  );
};
