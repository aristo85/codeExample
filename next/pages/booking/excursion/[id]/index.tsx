import {ErrorResponse} from '@/modules/core/hooks/useToast';
import React, {FC} from 'react';
import {wrapper} from '@/modules/core/containers/StoreProvider';
import {getExcursionByIdTourist} from '@/modules/excursion/apiExcursionSlice';
import {ExcursionData} from '@/modules/core/api/model/excursion/excursionData';
import ErrorCustomPage from '@/modules/core/components/ErrorComponent';
import BookingExcursion from '@/modules/excursion/booking';
import styled, {css} from 'styled-components';
import Head from 'next/head';
import {withLogging} from '@/modules/core/helpers/withLogging';

const PageContainer = styled.div`
  max-width: 1700px;
  padding-bottom: 16px;

  ${({theme}) => css`
    ${theme.media.down('sm')`
    `}
  `}
`;

export interface BookingPageProps {
  data: ExcursionData;
  errorData: ErrorResponse | null;
}

const BookingPage: FC<BookingPageProps> = ({data, errorData}) => {
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
        <title>Go2Kavkaz : Бронирование</title>
      </Head>
      <PageContainer>
        <BookingExcursion excursionData={data} />
      </PageContainer>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store =>
  withLogging(async context => {
    const {id} = context.query;
    const {data, error} = await store.dispatch(
      getExcursionByIdTourist.initiate({
        id: Number(id),
      }),
    );
    return {
      props: {
        data: data?.data || null,
        errorData: error || null,
      },
    };
  }),
);

export default BookingPage;
