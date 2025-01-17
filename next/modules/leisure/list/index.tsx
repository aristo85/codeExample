import React, {FC, useMemo, useState} from 'react';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {useRouter} from 'next/router';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import MobileButton from '@/modules/core/components/MobileButton';
import {useAppSelector} from '@/modules/core/containers/StoreProvider';
import Spinner from '@/modules/core/components/Spinner';
import EmptyListComponent from '@/modules/core/components/EmptyListComponent';
import Pagination from '@/modules/core/components/Pagination';
import {LeisureFilterValuesForm, LeisureType} from '../types';
import {selectLeisureFilterValues} from '../leisureSlice';
import {useGetLeisureListQuery} from '../apiLeisureSlice';
import {
  DefaultLeisureValues,
  LeisureQueryLocation,
  leisureQueryHandler,
} from '@/modules/core/helpers/leisureQueryHandler';
import {
  LeisureBreadcrumbsBlock,
  LeisureEmptyBlock,
  LeisureFilterBlock,
  LeisureListBlock,
  LeisurePage,
  LeisurePageWrapper,
} from './styles';
import LeisureFilter from '../components/LeisureFilter';
import GuideCard from '@/modules/guide/components/GuideCard';
import ExcursionCard from '@/modules/excursion/components/ExcursionCard';

const breadcrumbsItems = [
  {url: '/', label: 'Главная'},
  {url: '/leisure', label: 'Результаты поиска'},
];

const LeisureList: FC = () => {
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.md}px)`);
  const leisureFilterData: LeisureFilterValuesForm = useAppSelector(
    selectLeisureFilterValues,
  );
  const router = useRouter();
  const {data, isLoading} = useGetLeisureListQuery(router.query, {
    skip: !router.query.date,
  });

  const listData = data?.data;

  const onPaginationClick = (page: number) => {
    const {queriesString} = leisureQueryHandler(
      {
        ...leisureFilterData,
        offset:
          (page - 1) * Number(router.query.limit || DefaultLeisureValues.limit),
      },
      LeisureQueryLocation.list,
    );
    router.push(`/leisure?${queriesString}`);
  };

  const filterSubmitHandler = (paramString: string) => {
    setIsFilterOpened(false);
    void router.push(`/leisure?${paramString}`, undefined, {shallow: true});
  };

  const currentPage: number = useMemo(
    () =>
      Math.floor(
        Number(router.query.offset || DefaultLeisureValues.offset) /
          Number(router.query.limit || DefaultLeisureValues.limit),
      ) + 1,
    [router],
  );

  const totalPages: number = useMemo(
    () =>
      Math.ceil(
        Number(data?.totalCount) /
          Number(router.query.limit || DefaultLeisureValues.limit),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router, data?.totalCount],
  );

  return (
    <LeisurePage>
      <LeisureBreadcrumbsBlock>
        <Breadcrumbs paths={breadcrumbsItems} />
        {isScreenXs && (
          <MobileButton
            onClick={() => setIsFilterOpened(prev => !prev)}
            isActive={!isFilterOpened}
          />
        )}
      </LeisureBreadcrumbsBlock>
      <LeisurePageWrapper>
        {isScreenXs && isFilterOpened && data?.filterData && (
          <LeisureFilter
            handler={filterSubmitHandler}
            locationForParamsString={LeisureQueryLocation.list}
            filtersData={data?.filterData}
          />
        )}
        {!isScreenXs && data?.filterData && (
          <LeisureFilterBlock>
            <LeisureFilter
              handler={filterSubmitHandler}
              locationForParamsString={LeisureQueryLocation.list}
              filtersData={data?.filterData}
            />
          </LeisureFilterBlock>
        )}
        {!isFilterOpened && (
          <LeisureListBlock>
            {listData &&
              listData.length > 0 &&
              listData.map(leisure => {
                return leisure.type === LeisureType.GUIDE ? (
                  <GuideCard
                    key={leisure.id}
                    {...leisure}
                    age={leisure.guideData?.age ?? 0}
                    avatar={leisure.mainPhotoUrl}
                    costPerHour={leisure.guideData?.costPerHour ?? 0}
                    link={`/guide/${leisure.id}`}
                  />
                ) : (
                  <ExcursionCard
                    key={leisure.id}
                    {...leisure}
                    adultPrice={leisure.excursionData?.adultPrice ?? 0}
                    childrenPrice={leisure.excursionData?.childrenPrice}
                    duration={leisure.excursionData?.duration ?? 0}
                    type={leisure.excursionData.type}
                    link={`/excursion/${leisure.id}`}
                  />
                );
              })}
            {!listData?.length && !isLoading && (
              <LeisureEmptyBlock>
                <EmptyListComponent
                  title={'Досуг не был найден'}
                  subtitle={'Попробуйте использовать другие настройки фильтров'}
                />
              </LeisureEmptyBlock>
            )}
            {totalPages > 1 && router.query.date && (
              <Pagination
                leftSideButtons={1}
                rightSideButtons={1}
                visiblePages={4}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPaginationClick}
              />
            )}
          </LeisureListBlock>
        )}
      </LeisurePageWrapper>
      <Spinner showSpinner={isLoading} />
    </LeisurePage>
  );
};

export default LeisureList;
