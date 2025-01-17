import React, {FC, useMemo, useState} from 'react';
import {PageWrapper} from '@/modules/placement/styles';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {
  GuideBreadcrumbsBlock,
  GuideEmptyBlock,
  GuideFilterBlock,
  GuideListBlock,
  GuidePage,
} from './styles';
import {useRouter} from 'next/router';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import MobileButton from '@/modules/core/components/MobileButton';
import {useAppSelector} from '@/modules/core/containers/StoreProvider';
import Spinner from '@/modules/core/components/Spinner';
import EmptyListComponent from '@/modules/core/components/EmptyListComponent';
import {DefaultExcursionValues} from '@/modules/excursion/constants';
import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import Pagination from '@/modules/core/components/Pagination';
import {selectGuideFilterValues} from '@/modules/guide/components/GuideFilter/guideFilterSlice';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';
import {DefaultGuideValues} from '@/modules/guide/constants';
import GuideFilter from '@/modules/guide/components/GuideFilter';
import {
  guideQueryHandler,
  GuideQueryLocation,
} from '@/modules/core/helpers/guideQueryHandler';
import {useGetGuideListQuery} from '@/modules/guide/apiGuideSlice';
import GuideCard from '@/modules/guide/components/GuideCard';

const breadcrumbsItems = [
  {url: '/', label: 'Главная'},
  {url: '/guide', label: 'Результаты поиска'},
];

const GuideList: FC = () => {
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.md}px)`);
  const guideFilterData: GuideFilterValuesForm = useAppSelector(
    selectGuideFilterValues,
  );
  const router = useRouter();
  const {data, isLoading} = useGetGuideListQuery(router.query, {
    skip: !router.query.cityId,
  });

  const listData = data?.data;

  const onPaginationClick = (page: number) => {
    const queries = getUrlQueries({
      ...guideFilterData,
      offset:
        (page - 1) * Number(router.query.limit || DefaultExcursionValues.limit),
    });
    router.push(`/guide?${queries}`);
  };

  const filterSubmitHandler = (paramString: string) => {
    setIsFilterOpened(false);
    void router.push(`/guide?${paramString}`);
  };

  const currentPage: number = useMemo(
    () =>
      Math.floor(
        Number(router.query.offset || DefaultGuideValues.offset) /
          Number(router.query.limit || DefaultGuideValues.limit),
      ) + 1,
    [router],
  );

  const totalPages: number = useMemo(
    () =>
      Math.ceil(
        Number(data?.totalCount) /
          Number(router.query.limit || DefaultGuideValues.limit),
      ),
    [router, data?.totalCount],
  );

  return (
    <GuidePage>
      <GuideBreadcrumbsBlock>
        <Breadcrumbs paths={breadcrumbsItems} />
        {isScreenXs && (
          <MobileButton
            onClick={() => setIsFilterOpened(prev => !prev)}
            isActive={!isFilterOpened}
          />
        )}
      </GuideBreadcrumbsBlock>
      <PageWrapper>
        {isScreenXs && isFilterOpened && (
          <GuideFilter
            handler={filterSubmitHandler}
            locationForParamsString={GuideQueryLocation.list}
          />
        )}
        {!isScreenXs && (
          <GuideFilterBlock>
            <GuideFilter
              handler={filterSubmitHandler}
              locationForParamsString={GuideQueryLocation.list}
            />
          </GuideFilterBlock>
        )}
        {!isFilterOpened && (
          <GuideListBlock>
            {listData &&
              listData.length > 0 &&
              listData.map(guide => (
                <GuideCard
                  key={guide.id}
                  {...guide}
                  link={`/guide/${guide.id}?${
                    guideQueryHandler(
                      guideFilterData,
                      GuideQueryLocation.detail,
                    ).queriesString
                  }`}
                />
              ))}
            {!listData?.length && !isLoading && (
              <GuideEmptyBlock>
                <EmptyListComponent
                  title={'Гиды не найдены'}
                  subtitle={'Попробуйте использовать другие настройки фильтров'}
                />
              </GuideEmptyBlock>
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
          </GuideListBlock>
        )}
      </PageWrapper>
      <Spinner showSpinner={isLoading} />
    </GuidePage>
  );
};

export default GuideList;
