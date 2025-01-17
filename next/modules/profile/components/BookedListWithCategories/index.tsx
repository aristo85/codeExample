import React, {FC, useMemo, useState} from 'react';
import {
  BookedDateInput,
  BookedItemsBody,
  BookedItemsContainer,
  DateInputWrapper,
  DateInteraction,
  DateString,
  DefaultText,
} from '@/modules/profile/components/BookedListWithCategories/styles';
import Pagination from '@/modules/core/components/Pagination';
import dayjs, {Dayjs} from 'dayjs';
import {Roles, selectProfileData} from '@/modules/auth/authSlice';
import {useSelector} from 'react-redux';
import {BookingCancellationModal} from '@/modules/profile/components/BookedListWithCategories/BookingCancellationModal';
import {useCancelBooking} from '@/modules/core/hooks/useCancelBooking';
import BookingListItem from '@/modules/core/components/BookingListItem';
import BookedTabHeaderComponent from '@/modules/core/components/BookedTabHeader';
import {BookedCategories} from '@/modules/core/components/BookedTabHeader/bookedTab.types';
import {DEFAULT_DATE_FORMAT, DEFAULT_LIMIT} from '@/modules/core/constants';
import {BookingListData} from '@/modules/core/api/model/booking/bookingListData';
import {Response} from '@/modules/core/api/Response';
import {useGetBookedListItemsQuery} from '@/modules/excursion/apiExcursionSlice';
import {getUrlQueries, Order} from '@/modules/core/helpers/urlConstructor';
import Spinner from '@/modules/core/components/Spinner';
import {ExcursionBookingListWithPlacesData} from '@/modules/core/api/model/booking/excursionBookingListWithPlacesData';

export interface BookedExcursionGroupedItemsResponseData
  extends Response<ExcursionBookingListWithPlacesData[]> {
  totalCount: string;
}

export interface BookedListResponseData extends Response<BookingListData[]> {
  totalCount: string;
}
export interface BookedListWithCategoriesProps {
  value?: string;
}

export interface Category {
  title: string;
  query: string;
}

type CategoriesData = {
  [key in BookedCategories]: Category;
};

const Categories: CategoriesData = {
  [BookedCategories.all]: {title: 'Все', query: ''},
  [BookedCategories.placement]: {
    title: 'Жилье',
    query: BookedCategories.placement,
  },
  [BookedCategories.excursion]: {
    title: 'Экскурсии',
    query: BookedCategories.excursion,
  },
  [BookedCategories.guide]: {
    title: 'Гиды',
    query: BookedCategories.guide,
  },
  // TODO Uncomment later(when create new tabs)
  // [BookedCategories.instructor]: {
  //   title: 'Инструкторы',
  //   query: BookedCategories.instructor,
  // },
};
const BookedListWithCategories: FC<BookedListWithCategoriesProps> = () => {
  const account = useSelector(selectProfileData)?.role;
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [offset, setOffset] = useState(0);
  const [currentActiveCategory, setCurrentActiveCategory] =
    useState<BookedCategories>(BookedCategories.all);

  const {
    isCancellationModalOpen,
    modalCancelButtonClickFunction,
    modalAcceptButtonClickFunction,
    penaltyAmount,
    onCancelButtonClick,
    isCalculatePenaltyLoading,
    isLoadingCancel,
    onCancelButtonWithoutCalculatePenaltyClick,
  } = useCancelBooking();

  const {
    data,
    isLoading: isLoadingList,
    isError,
  } = useGetBookedListItemsQuery(
    getUrlQueries({
      type: Categories[currentActiveCategory].query,
      limit: DEFAULT_LIMIT,
      offset,
      dateTime:
        account === Roles.partner
          ? selectedDate?.format(DEFAULT_DATE_FORMAT)
          : null,
      sortBy: 'createdAt',
      orderBy: Order.DESC,
    }),
    {skip: !account, refetchOnMountOrArgChange: true},
  );

  const onPaginationClick = (page: number) => {
    setOffset((page - 1) * DEFAULT_LIMIT);
    setCurrentPage(page);
  };

  const totalPages: number = useMemo(
    () => Math.ceil(Number(data?.totalCount) / DEFAULT_LIMIT),
    [data?.totalCount],
  );

  const onAcceptDateHandler = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const isTourist = account === Roles.tourist;

  return (
    <>
      <Spinner
        showSpinner={
          isLoadingCancel || isLoadingList || isCalculatePenaltyLoading
        }
      />
      <BookingCancellationModal
        isOpen={isCancellationModalOpen}
        closeButton={modalCancelButtonClickFunction}
        cancelBooking={modalAcceptButtonClickFunction}
        penaltyAmount={
          currentActiveCategory === BookedCategories.placement
            ? penaltyAmount
            : null
        }
      />
      <BookedItemsContainer isPartner={!isTourist}>
        {account === Roles.partner && (
          <>
            <DateInteraction>
              <DateString>{selectedDate?.format('DD MMM, dddd')}</DateString>
              <DateInputWrapper>
                <BookedDateInput
                  label=""
                  onAccept={onAcceptDateHandler}
                  value={selectedDate}
                  disablePast={false}
                />
              </DateInputWrapper>
            </DateInteraction>
          </>
        )}
        <BookedTabHeaderComponent<BookedCategories>
          tabs={Categories}
          activeTab={currentActiveCategory}
          setActiveTab={setCurrentActiveCategory}
        />
        <BookedItemsBody>
          {data &&
            !isError &&
            data?.data.map(item => {
              return (
                <BookingListItem
                  {...item}
                  currentActiveCategory={currentActiveCategory}
                  title={item.name}
                  key={item.id}
                  names={`${item.guest.firstName} ${item.guest.lastName}`}
                  linkToDetailPage={
                    isTourist
                      ? `/profile/booking/${item.type.toLowerCase()}/${item.id}`
                      : `/control-panel/booking/${item.type.toLowerCase()}/${
                          item.id
                        }`
                  }
                  isTourist={account === Roles.tourist}
                  onCancelClick={
                    currentActiveCategory === BookedCategories.placement &&
                    isTourist
                      ? onCancelButtonClick
                      : onCancelButtonWithoutCalculatePenaltyClick
                  }
                />
              );
            })}
        </BookedItemsBody>
        {!data?.data.length && (
          <DefaultText>Здесь будут ваши бронирования</DefaultText>
        )}
        {data && !isError && totalPages > 1 && (
          <Pagination
            leftSideButtons={1}
            rightSideButtons={1}
            visiblePages={4}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPaginationClick}
          />
        )}
      </BookedItemsContainer>
    </>
  );
};

export default BookedListWithCategories;
