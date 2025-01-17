import React from 'react';
import {CarouselTabletAndDown, PageTitle, PageWrapper} from './styles';
import FiltersHome from './Filters';
import MainCarousel from './Carousel';
import MainSpecials from '@/modules/home/components/Specials';
import {useRouter} from 'next/router';
import {QueryLocation} from '@/modules/core/helpers/queryHandler';
import MenuWithIcons from './MenuWithIcons';
import {useMediaQuery} from '@mui/material';
import {breakpoints} from '@/modules/core/styles/mediaQueries';

const Landing = () => {
  const router = useRouter();
  const largeScreen = useMediaQuery(`(min-width: ${breakpoints.md + 1}px)`);
  const filterSubmitHandler = (value: string) => {
    void router.push(`/placement?${value}`);
  };

  return (
    <>
      <PageWrapper>
        <FiltersHome
          handler={filterSubmitHandler}
          locationForParamsString={QueryLocation.home}
        />
        <MenuWithIcons handler={filterSubmitHandler} />
        <PageTitle>Весь Кавказ для комфортного отдыха</PageTitle>
        <MainSpecials />
        {largeScreen && <MainCarousel />}
      </PageWrapper>
      {!largeScreen && (
        <CarouselTabletAndDown>
          <MainCarousel />
        </CarouselTabletAndDown>
      )}
    </>
  );
};

export default Landing;
