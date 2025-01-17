import React, {FC, useMemo, useState} from 'react';
import {PageWrapper} from '@/modules/placement/styles';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {
  ExcursionBreadcrumbsBlock,
  ExcursionEmptyBlock,
  ExcursionFilterBlock,
  ExcursionListBlock,
  ExcursionPage,
} from '@/modules/excursion/list/styles';
import {useRouter} from 'next/router';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import MobileButton from '@/modules/core/components/MobileButton';
import ExcursionFilter from '@/modules/excursion/components/ExcursionFilter';
import {
  excursionQueryHandler,
  ExcursionQueryLocation,
} from '@/modules/core/helpers/excursionQueryHandler';
import ExcursionCard from '@/modules/excursion/components/ExcursionCard';
import {useAppSelector} from '@/modules/core/containers/StoreProvider';
import {selectExcursionFilterValues} from '@/modules/excursion/components/ExcursionFilter/ExcursionFilterSlice';
import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import {useGetExcursionListQuery} from '@/modules/excursion/apiExcursionSlice';
import Spinner from '@/modules/core/components/Spinner';
import EmptyListComponent from '@/modules/core/components/EmptyListComponent';
import {DefaultExcursionValues} from '@/modules/excursion/constants';
import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import Pagination from '@/modules/core/components/Pagination';

const breadcrumbsItems = [
  {url: '/', label: 'Главная'},
  {url: '/excursion', label: 'Результаты поиска'},
];

const ExcursionList: FC = () => {
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.md}px)`);
  const excursionFilterData: ExcursionFilterValuesForm = useAppSelector(
    selectExcursionFilterValues,
  );
  const router = useRouter();
  const {data, isLoading} = useGetExcursionListQuery(router.query, {
    skip: !router.query.cityId,
  });

  const listData = data?.data;

  const onPaginationClick = (page: number) => {
    const queries = getUrlQueries({
      ...excursionFilterData,
      offset:
        (page - 1) * Number(router.query.limit || DefaultExcursionValues.limit),
    });
    router.push(`/excursion?${queries}`);
  };

  const filterSubmitHandler = (paramString: string) => {
    setIsFilterOpened(false);
    void router.push(`/excursion?${paramString}`);
  };

  const currentPage: number = useMemo(
    () =>
      Math.floor(
        Number(router.query.offset || DefaultExcursionValues.offset) /
          Number(router.query.limit || DefaultExcursionValues.limit),
      ) + 1,
    [router],
  );

  const totalPages: number = useMemo(
    () =>
      Math.ceil(
        Number(data?.totalCount) /
          Number(router.query.limit || DefaultExcursionValues.limit),
      ),
    [router, data?.totalCount],
  );

  return (
    <ExcursionPage>
      <ExcursionBreadcrumbsBlock>
        <Breadcrumbs paths={breadcrumbsItems} />
        {isScreenXs && (
          <MobileButton
            onClick={() => setIsFilterOpened(prev => !prev)}
            isActive={!isFilterOpened}
          />
        )}
      </ExcursionBreadcrumbsBlock>
      <PageWrapper>
        {!isScreenXs && (
          <ExcursionFilterBlock>
            <ExcursionFilter
              handler={filterSubmitHandler}
              locationForParamsString={ExcursionQueryLocation.list}
            />
          </ExcursionFilterBlock>
        )}

        {isScreenXs && isFilterOpened && (
          <ExcursionFilter
            handler={filterSubmitHandler}
            locationForParamsString={ExcursionQueryLocation.list}
          />
        )}

        {!isFilterOpened && (
          <ExcursionListBlock>
            {listData &&
              listData.length > 0 &&
              listData.map(excursion => (
                <ExcursionCard
                  key={excursion.id}
                  {...excursion}
                  link={`/excursion/${excursion.id}?${
                    excursionQueryHandler(
                      excursionFilterData,
                      ExcursionQueryLocation.detail,
                    ).queriesString
                  }`}
                />
              ))}

            {!listData?.length && !isLoading && (
              <ExcursionEmptyBlock>
                <EmptyListComponent
                  title={'Экскурсии не найдены'}
                  subtitle={'Попробуйте использовать другие настройки фильтров'}
                />
              </ExcursionEmptyBlock>
            )}

            {totalPages > 1 && router.query.cityId && (
              <Pagination
                leftSideButtons={1}
                rightSideButtons={1}
                visiblePages={4}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPaginationClick}
              />
            )}
          </ExcursionListBlock>
        )}
      </PageWrapper>
      <Spinner showSpinner={isLoading} />
    </ExcursionPage>
  );
};

export default ExcursionList;
