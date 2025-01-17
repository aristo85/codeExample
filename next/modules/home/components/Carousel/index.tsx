import React, {useState, FC, useMemo, useEffect, useRef} from 'react';
import {
  CarouselImageWrapper,
  CarouselItem,
  CustomLeftArrow,
  CustomRightArrow,
  ItemImage,
  ItemTitle,
  SwiperContainer,
} from './styles';
import {useRouter} from 'next/router';
import {
  ResponseCities,
  selectFilterValues,
  useGetCitiesQuery,
} from '@/modules/core/api/filterSlice';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {useAppSelector} from '@/modules/core/hooks';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {NonNullableProperties} from '@/modules/core/helpers/nonNullableProperties';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useMediaQuery} from '@mui/material';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {Swiper as SwiperInstance} from 'swiper';

// Import Swiper styles
import 'swiper/css';

const carouselBreakpoints = [
  {width: 0, show: 2},
  {width: 576, show: 3},
  {width: 769, show: 4},
  {width: 1050, show: 6},
];

type CarouselDataType = NonNullableProperties<ResponseCities, 'imageUrl'>[];

const MainCarousel: FC = () => {
  const sliderRef = useRef<SwiperInstance | null>(null);
  const router = useRouter();
  const {data} = useGetCitiesQuery();
  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);

  const smallScreen = useMediaQuery(`(max-width: ${breakpoints.xs}px)`);
  const largeScreen = useMediaQuery(`(min-width: ${breakpoints.md + 1}px)`);
  const tabletScreen = !smallScreen && !largeScreen;

  const [carouselListItems, setCarouselListItems] = useState<
    CarouselDataType | []
  >([]);
  const [showValue, setShowValue] = useState(6);

  const slidesWithGap = smallScreen
    ? {slides: showValue + 0.3, gap: 16}
    : tabletScreen
    ? {slides: showValue + 0.4, gap: 40}
    : {slides: showValue, gap: 46};

  const carouselData: CarouselDataType = useMemo(
    () =>
      (
        data?.data.cityList.filter(
          city => city.isCarousel && city.imageUrl !== null,
        ) || []
      ).map(city => ({...city, imageUrl: city.imageUrl as string})),
    [data],
  );

  const carouselItemClickHandler = (id: string) => {
    const {queriesString} = queryHandler(
      {...filterData, cityId: id},
      QueryLocation.home,
    );
    router.push(`/placement?${queriesString}`);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1440) {
        const squareElements = document.querySelectorAll(
          '.carouselImageWrapper',
        );
        squareElements.forEach((element: Element) => {
          const width = (element as HTMLElement).offsetWidth;
          (element as HTMLElement).style.height = `${width}px`;
        });
      }
      const showValue = carouselBreakpoints.reduce((acc, breakpoint) => {
        return window.innerWidth >= breakpoint.width ? breakpoint.show : acc;
      }, 6);
      setShowValue(showValue);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [carouselListItems.length]);

  useEffect(() => {
    // fixing Swiper version9 and version10 issue with loop param.
    const newList =
      carouselData.length <= showValue
        ? [...carouselData]
        : [...carouselData, ...carouselData];

    setCarouselListItems(newList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselData.length]);

  return carouselListItems.length > 0 ? (
    <SwiperContainer>
      <Swiper
        onSwiper={it => (sliderRef.current = it)}
        style={{width: '100%', height: '100%'}}
        spaceBetween={slidesWithGap.gap}
        slidesPerView={slidesWithGap.slides}
        slidesPerGroup={showValue}
        loop
        loopedSlides={showValue}>
        {carouselListItems.map((el, indx) => (
          <SwiperSlide
            key={`${el.id} ${indx}`}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CarouselItem
              onClick={() => carouselItemClickHandler(String(el.id))}>
              <CarouselImageWrapper className="carouselImageWrapper">
                <ItemImage fill src={el.imageUrl} alt={el.name} />
              </CarouselImageWrapper>
              <ItemTitle>{el.name}</ItemTitle>
            </CarouselItem>
          </SwiperSlide>
        ))}
      </Swiper>
      {carouselListItems.length > showValue && (
        <>
          <CustomRightArrow onClick={() => sliderRef.current?.slideNext()} />
          <CustomLeftArrow onClick={() => sliderRef.current?.slidePrev()} />
        </>
      )}
    </SwiperContainer>
  ) : null;
};

export default MainCarousel;
