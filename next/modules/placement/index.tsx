import React, {FC, useMemo, useState} from 'react';
import {
  BookingEmptyBlock,
  BookingMainBlock,
  BookingPage,
  BreadcrumbsBlock,
  FilterBlock,
  MapWrapper,
  PageWrapper,
} from '@/modules/placement/styles';
import PlacementFilter from './components/PlacementFilter';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import Pagination from '@/modules/core/components/Pagination';
import BookingHeader from '@/modules/placement/components/BookingHeader';
import BookingCard, {
  BookingCardProps,
} from '@/modules/placement/components/BookingCard';
import DynamicMap from '@/modules/core/components/Map';
import MobileButton from '@/modules/core/components/MobileButton';
import {useRouter} from 'next/router';
import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import {FilterValues} from './components/PlacementFilter/types';
import {useAppSelector} from '@/modules/core/hooks';
import {selectFilterValues} from '@/modules/core/api/filterSlice';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {DefaultQueriesBookingValues} from '@/modules/placement/constants';
import EmptyListComponent from '@/modules/core/components/EmptyListComponent';
import {AmenityFilterItem} from '@/pages/placement';

const breadcrumbsItems = [
  {url: '/', label: 'Главная'},
  {url: '/placement', label: 'Результаты поиска'},
];

export interface BookingProps {
  data?: BookingCardProps[];
  totalCount: string;
  amenitiesData: AmenityFilterItem[];
}

const Booking: FC<BookingProps> = ({data, totalCount, amenitiesData}) => {
  const [isMapOpened, setIsMapOpened] = useState<boolean>(false);
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.md}px)`);
  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);
  const router = useRouter();
  const {queriesString: bookingDetailParams} = queryHandler(
    filterData,
    QueryLocation.detail,
  );

  const onPaginationClick = (page: number) => {
    const queries = getUrlQueries({
      ...filterData,
      offset:
        (page - 1) *
        Number(router.query.limit || DefaultQueriesBookingValues.limit),
    });
    router.push(`/placement?${queries}`);
  };

  const mapData = useMemo(
    () =>
      data?.map(booking => {
        return {
          avatar: booking.avatar,
          city: booking.city,
          coordinate: booking.coordinate,
          name: booking.name,
          address: booking.address,
          id: booking.id,
        };
      }),
    [data],
  );

  const mapToggleHandler = () => {
    setIsMapOpened(prev => !prev);
  };

  const filterSubmitHandler = (paramString: string) => {
    setIsFilterOpened(false);
    void router.push(`/placement?${paramString}`);
  };

  const currentPage: number = useMemo(
    () =>
      Math.floor(
        Number(router.query.offset || DefaultQueriesBookingValues.offset) /
          Number(router.query.limit || DefaultQueriesBookingValues.limit),
      ) + 1,
    [router],
  );

  const totalPages: number = useMemo(
    () =>
      Math.ceil(
        Number(totalCount) /
          Number(router.query.limit || DefaultQueriesBookingValues.limit),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router],
  );

  const cityIdOrPopularQueryValueExists = !!(
    router.query.cityId || router.query.popular
  );

  return (
    <BookingPage>
      <BreadcrumbsBlock>
        <Breadcrumbs paths={breadcrumbsItems} />

        {isScreenXs && (
          <MobileButton
            onClick={() => setIsFilterOpened(prev => !prev)}
            isActive={!isFilterOpened}
          />
        )}
      </BreadcrumbsBlock>

      <PageWrapper isMain>
        {!isScreenXs && (
          <FilterBlock>
            <PlacementFilter
              amenitiesData={amenitiesData}
              handler={filterSubmitHandler}
              locationForParamsString={QueryLocation.list}
              isMapOpened={isMapOpened}
              handleMap={mapToggleHandler}
              isLink={false}
              isPlacement
            />
          </FilterBlock>
        )}

        {isScreenXs && isFilterOpened && (
          <PlacementFilter
            amenitiesData={amenitiesData}
            handler={filterSubmitHandler}
            locationForParamsString={QueryLocation.list}
          />
        )}

        {!isFilterOpened && (
          <BookingMainBlock>
            {cityIdOrPopularQueryValueExists && data && data.length > 0 && (
              <BookingHeader
                city={router.query.popular ? 'Популярное' : data[0].city || ''}
                count={totalCount}
                isMapOpened={isMapOpened}
                mapOpenFn={mapToggleHandler}
              />
            )}

            {isMapOpened && cityIdOrPopularQueryValueExists && data?.length && (
              <MapWrapper>
                <DynamicMap
                  markers={mapData}
                  queries={bookingDetailParams}
                  linkTo={`placement`}
                />
              </MapWrapper>
            )}

            {!isMapOpened &&
              cityIdOrPopularQueryValueExists &&
              data &&
              data.length > 0 &&
              data
                .filter(el => el.extraData)
                .map(booking => (
                  <BookingCard
                    key={booking.id}
                    {...booking}
                    link={`/placement/${booking.id}?${bookingDetailParams}`}
                  />
                ))}

            {!isMapOpened &&
              (!cityIdOrPopularQueryValueExists || !data?.length) && (
                <BookingEmptyBlock>
                  <EmptyListComponent
                    title={'Жилье не найдено'}
                    subtitle={
                      'Попробуйте использовать другие настройки фильтров'
                    }
                  />
                </BookingEmptyBlock>
              )}

            {!isMapOpened &&
              totalPages > 1 &&
              cityIdOrPopularQueryValueExists && (
                <Pagination
                  leftSideButtons={1}
                  rightSideButtons={1}
                  visiblePages={4}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPaginationClick}
                />
              )}
          </BookingMainBlock>
        )}
      </PageWrapper>
    </BookingPage>
  );
};

export default Booking;
