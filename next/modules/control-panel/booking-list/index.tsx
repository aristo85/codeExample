import BookedTabHeaderComponent from '@/modules/core/components/BookedTabHeader';
import React, {useLayoutEffect, useMemo, useState} from 'react';
import {BookedListTabs} from '@/modules/control-panel/booking-list/contants';
import {BookedListContainer} from '@/modules/control-panel/booking-list/styles';
import {
  useGetBookedExcursionGroupedItemsQuery,
  useGetBookedListItemsQuery,
} from '@/modules/placement/apiPlacementSlice';
import {getUrlQueries, Order} from '@/modules/core/helpers/urlConstructor';
import Pagination from '@/modules/core/components/Pagination';
import {DEFAULT_LIMIT} from '@/modules/core/constants';
import {ServiceType} from '@/modules/core/components/BookingListItem';
import Spinner from '@/modules/core/components/Spinner';
import GuideTableComponent from '@/modules/control-panel/booking-list/tables/guideTable';
import PlacementTableComponent from '@/modules/control-panel/booking-list/tables/placementTable';
import ExcursionGroupedTableComponent from '@/modules/control-panel/booking-list/tables/excursionGroupedTable';
import {SortingState} from '@tanstack/react-table';
import {useRouter} from 'next/router';

const BookedList = () => {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<ServiceType>(
    ServiceType.PLACEMENT,
  );
  const [sorting, setSorting] = useState<SortingState>([]);

  const router = useRouter();

  useLayoutEffect(() => {
    if (router.query.bookingActiveTab) {
      setActiveTab(router.query.bookingActiveTab as ServiceType);
    }
  }, [router]);

  const {
    data,
    isLoading: isLoadingList,
    isError: isErrorList,
    isFetching,
  } = useGetBookedListItemsQuery(
    getUrlQueries({
      type: activeTab,
      limit: DEFAULT_LIMIT,
      offset,
      sortBy: 'createdAt',
      orderBy: Order.DESC,
    }),
    {skip: activeTab === ServiceType.EXCURSION},
  );

  const {data: groupedExcursionList, refetch} =
    useGetBookedExcursionGroupedItemsQuery(
      getUrlQueries({
        limit: DEFAULT_LIMIT,
        offset,
        sortBy: sorting[0]?.id,
        orderBy: sorting[0]?.desc ? Order.ASC : Order.DESC,
      }),
      {
        skip: activeTab !== ServiceType.EXCURSION,
      },
    );

  const totalPages: number = useMemo(
    () =>
      Math.ceil(
        Number(
          activeTab === ServiceType.EXCURSION
            ? groupedExcursionList?.totalCount
            : data?.totalCount,
        ) / DEFAULT_LIMIT,
      ),
    [data?.totalCount, activeTab, groupedExcursionList?.totalCount],
  );
  const onPaginationClick = (page: number) => {
    setOffset((page - 1) * DEFAULT_LIMIT);
    setCurrentPage(page);
  };

  const setActiveTabHandler = (tab: ServiceType) => {
    setCurrentPage(1);
    setOffset(0);
    setActiveTab(tab);
  };

  const checkBeforeDisplayData = !isFetching && !isLoadingList && !isErrorList;

  return (
    <BookedListContainer>
      <BookedTabHeaderComponent<ServiceType>
        tabs={BookedListTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTabHandler}
      />
      {checkBeforeDisplayData && activeTab === ServiceType.PLACEMENT && (
        <PlacementTableComponent data={data?.data} />
      )}
      {checkBeforeDisplayData && activeTab === ServiceType.EXCURSION && (
        <ExcursionGroupedTableComponent
          sorting={sorting}
          refetch={refetch}
          data={groupedExcursionList?.data}
          setSorting={setSorting}
        />
      )}
      {checkBeforeDisplayData && activeTab === ServiceType.GUIDE && (
        <GuideTableComponent data={data?.data} />
      )}
      {checkBeforeDisplayData && data?.data && totalPages > 1 && (
        <Pagination
          leftSideButtons={1}
          rightSideButtons={1}
          visiblePages={4}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPaginationClick}
          isRewindButtonsShown={true}
        />
      )}
      <Spinner showSpinner={isLoadingList} />
    </BookedListContainer>
  );
};

export default BookedList;
