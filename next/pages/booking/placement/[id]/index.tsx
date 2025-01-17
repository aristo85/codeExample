import React, {FC} from 'react';
import {BookingForm} from '@/modules/placement/form';
import Head from 'next/head';

const BookingFormPage: FC = () => {
  return (
    <>
      <Head>
        <title>Go2Kavkaz : Бронирование</title>
      </Head>
      <BookingForm />
    </>
  );
};
export default BookingFormPage;
