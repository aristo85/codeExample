import {ErrorResponse} from '@/modules/core/hooks/useToast';
import React, {FC} from 'react';
import {wrapper} from '@/modules/core/containers/StoreProvider';
import ErrorCustomPage from '@/modules/core/components/ErrorComponent';
import styled, {css} from 'styled-components';
import Head from 'next/head';
import {getGuideByIdTourist} from '@/modules/guide/apiGuideSlice';
import {GuideData} from '@/modules/core/api/model/guide/guideData';
import BookingGuide from '@/modules/guide/booking';
import {withLogging} from '@/modules/core/helpers/withLogging';

const PageContainer = styled.div`
  padding-bottom: 16px;
  max-width: 1700px;

  ${({theme}) => css`
    ${theme.media.down('sm')`
   
    `}
  `}
`;

export interface BookingGuidePageProps {
  data: GuideData;
  errorData: ErrorResponse | null;
}

const BookingGuidePage: FC<BookingGuidePageProps> = ({data, errorData}) => {
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
        <BookingGuide guideData={data} />
      </PageContainer>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store =>
  withLogging(async context => {
    const {id} = context.query;
    const {data, error} = await store.dispatch(
      getGuideByIdTourist.initiate({
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

export default BookingGuidePage;
