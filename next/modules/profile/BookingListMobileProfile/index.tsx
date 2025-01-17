import React, {FC} from 'react';
import BookedListWithCategories from '@/modules/profile/components/BookedListWithCategories';
import {PageWrapper} from '@/modules/placement/styles';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';

const breadcrumbsItems = [
  {url: '/profile', label: 'Личный кабинет'},
  {url: '/profile/booking', label: 'Бронирование'},
];
const BookingListMobileProfile: FC = () => {
  return (
    <PageWrapper style={{flexDirection: 'column'}}>
      <Breadcrumbs paths={breadcrumbsItems} />
      <BookedListWithCategories />
    </PageWrapper>
  );
};

export default BookingListMobileProfile;
