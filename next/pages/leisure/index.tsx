import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useGetCitiesQuery} from '@/modules/core/api/filterSlice';
import LeisureList from '@/modules/leisure/list';

const BookingPage = () => {
  const {data: cities} = useGetCitiesQuery();
  const router = useRouter();

  const city = cities?.data.cityList.find(
    el => el.id === +(router.query?.cityId as string),
  );

  return (
    <>
      <Head>
        <title>Go2Kavkaz : Досуги по направлению {city?.name}</title>
      </Head>
      <LeisureList />
    </>
  );
};

export default BookingPage;
