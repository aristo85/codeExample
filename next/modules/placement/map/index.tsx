import React, {FC} from 'react';
import {
  BookingAddress,
  BookingMainBlock,
  BookingPage,
  BreadcrumbsBlock,
} from '@/modules/placement/styles';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import {useAppSelector} from '@/modules/core/hooks';
import {useRouter} from 'next/router';
import DynamicMap from '@/modules/core/components/Map';
import NameRatingTitle from '@/modules/placement/components/NameRatingTitle';
import {BookingHeaderContainer} from '@/modules/placement/detail/styles';
import {
  MapBookingPageWrapper,
  MapBookingWrapper,
} from '@/modules/placement/map/styles';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {selectFilterValues} from '@/modules/core/api/filterSlice';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {useFilterDataFromQuery} from '@/modules/core/hooks/useFilterDataFromParams';
import {useGetDetailBookingDataQuery} from '@/modules/placement/apiPlacementSlice';
import Spinner from '@/modules/core/components/Spinner';

export const BookingMap: FC = () => {
  useFilterDataFromQuery();
  const router = useRouter();
  const {id} = router.query;

  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);
  const {queriesString: bookingListParams} = queryHandler(
    filterData,
    QueryLocation.list,
  );
  const {queriesString: bookingDetailParams} = queryHandler(
    filterData,
    QueryLocation.detail,
  );

  const {data} = useGetDetailBookingDataQuery(
    {
      id: Number(id),
      urlQueries: bookingDetailParams,
    },
    {skip: !id},
  );

  if (!data) {
    return <Spinner showSpinner={true} />;
  }

  const {name, coordinate, rating, address, images, city} = data.data;

  const breadcrumbsItems = [
    {url: '/', label: 'Главная'},
    {
      url: `/placement?${bookingListParams}`,
      label: 'Результаты поиска',
    },
    {
      url: `/placement/${id}?${bookingDetailParams}`,
      label: name,
    },
    {url: `/placement/${router.query.id}/map`, label: 'На карте'},
  ];

  return (
    <BookingPage>
      <BreadcrumbsBlock>
        <Breadcrumbs paths={breadcrumbsItems} />
      </BreadcrumbsBlock>
      <MapBookingPageWrapper>
        <BookingHeaderContainer>
          <NameRatingTitle name={name} rating={rating} />
          <BookingAddress>{address}</BookingAddress>
        </BookingHeaderContainer>
        <BookingMainBlock></BookingMainBlock>
        <MapBookingWrapper>
          <DynamicMap
            markers={[
              {
                city: city,
                avatar: images[0],
                name: name,
                address: address,
                id: Number(id),
                coordinate: coordinate,
              },
            ]}
            linkTo={`placement`}
            queries={bookingDetailParams}
          />
        </MapBookingWrapper>
      </MapBookingPageWrapper>
    </BookingPage>
  );
};
