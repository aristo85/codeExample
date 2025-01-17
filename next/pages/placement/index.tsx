import React, {FC} from 'react';
import Booking from '../../modules/placement';
import {wrapper} from '@/modules/core/containers/StoreProvider';
import {BookingCardProps} from '@/modules/placement/components/BookingCard';
import {getBookingData} from '@/modules/placement/apiPlacementSlice';
import {ErrorResponse, useToast} from '@/modules/core/hooks/useToast';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useGetCitiesQuery} from '@/modules/core/api/filterSlice';
import {AmenityData} from '@/modules/core/api/model/placement/amenityData';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {withLogging} from '@/modules/core/helpers/withLogging';

export type AmenityFilterItem = AmenityData & {count: number; category: string};
export interface BookingPageProps {
  data: {
    data: BookingCardProps[];
    amenitiesData: AmenityFilterItem[];
  };
  totalCount: string;
  errorData: ErrorResponse | null;
}
const BookingPage: FC<BookingPageProps> = ({data, totalCount, errorData}) => {
  useToast(errorData);
  const {data: cities} = useGetCitiesQuery();
  const router = useRouter();

  const city = cities?.data.cityList.find(
    el => el.id === +(router.query?.cityId as string),
  );

  return (
    <>
      <Head>
        <title>Go2Kavkaz : Отели по направлению {city?.name}</title>
      </Head>
      <Booking
        data={data?.data}
        totalCount={totalCount}
        amenitiesData={data?.amenitiesData}
      />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store =>
  withLogging(async context => {
    const {data, error} = await store.dispatch(
      getBookingData.initiate(
        queryHandler(context.query, QueryLocation.list).filters,
      ),
    );

    return {
      props: {
        data: data?.data || null,
        errorData: error || null,
        totalCount: data?.totalCount || null,
      },
    };
  }),
);
export default BookingPage;
