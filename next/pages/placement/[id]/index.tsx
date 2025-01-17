import React, {FC, useMemo} from 'react';
import {BookingDetail} from '@/modules/placement/detail';
import {wrapper} from '@/modules/core/containers/StoreProvider';
import {DetailPageData, Room} from '@/modules/placement/detail/detail.types';
import {ErrorResponse, useToast} from '@/modules/core/hooks/useToast';
import Head from 'next/head';
import ErrorCustomPage from '@/modules/core/components/ErrorComponent';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {withLogging} from '@/modules/core/helpers/withLogging';
import {getDetailBookingData} from '@/modules/placement/apiPlacementSlice';

export interface BookingPageProps {
  data: {
    data: DetailPageData;
  } | null;
  errorData: ErrorResponse | null;
}

const BookingDetailPage: FC<BookingPageProps> = ({data, errorData}) => {
  useToast(errorData);

  // Grouping rooms by id
  const groupedDetailPageDataByRooms = useMemo(() => {
    if (!data) return;

    const groupedRooms: Map<number, Room[]> = new Map();
    data.data.rooms.forEach(room => {
      const roomId = room.placementExtraData.roomId;
      if (!groupedRooms.has(roomId)) {
        groupedRooms.set(roomId, [room]);
      } else {
        groupedRooms.get(roomId)?.push(room);
      }
    });

    return groupedRooms;
  }, [data]);

  if (!data)
    return (
      <ErrorCustomPage
        status={errorData?.data.status}
        message={errorData?.data.message}
      />
    );
  return (
    <>
      <Head>
        <title>
          Go2Kavkaz : {data.data.name} {data.data.city}
        </title>
      </Head>
      <BookingDetail
        data={{
          ...data.data,
          rooms: groupedDetailPageDataByRooms,
        }}
      />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store =>
  withLogging(async context => {
    const {id, ...rest} = context.query;
    const {data, error} = await store.dispatch(
      getDetailBookingData.initiate({
        id: Number(id),
        urlQueries: queryHandler(rest, QueryLocation.detail).filters,
      }),
    );

    return {
      props: {
        data: data || null,
        errorData: error || null,
      },
    };
  }),
);

export default BookingDetailPage;
