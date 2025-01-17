import {Category} from '@/modules/core/components/BookedTabHeader/bookedTab.types';
import {ServiceType} from '@/modules/core/components/BookingListItem';

export const BookedListTabs: Record<ServiceType, Category> = {
  [ServiceType.PLACEMENT]: {title: 'Жилье', query: 'PLACEMENT'},
  [ServiceType.EXCURSION]: {title: 'Экскурсии', query: 'EXCURSION'},
  [ServiceType.GUIDE]: {title: 'Гиды', query: 'GUIDE'},
};
