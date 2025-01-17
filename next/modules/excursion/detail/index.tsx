import React, {FC, useMemo} from 'react';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import BookingImageMap, {
  Location,
} from '@/modules/placement/components/BookingImagesMap';
import {
  BookingExcursionBlock,
  DescriptionBlock,
  DetailExcursionWrapper,
  DetailHeaderBlock,
  ExcursionBookingButton,
  ExcursionCalendarBlock,
  ExcursionName,
  ExcursionTitle,
  ExcursionValue,
  InformationBlock,
  InformationContainer,
  PriceBlock,
} from '@/modules/excursion/detail/styles';
import BusinessCard from '@/modules/core/components/BusinessCard';
import {ExcursionData} from '@/modules/core/api/model/excursion/excursionData';
import Calendar from '@/modules/core/components/Calendar';
import {excursionType} from '@/modules/excursion/constants';
import Link from 'next/link';
import {
  excursionQueryHandler,
  ExcursionQueryLocation,
} from '@/modules/core/helpers/excursionQueryHandler';
import {
  ExcursionFilterValuesForm,
  ExcursionTypes,
} from '@/modules/excursion/excursion.types';
import {useAppSelector} from '@/modules/core/containers/StoreProvider';
import {selectExcursionFilterValues} from '@/modules/excursion/components/ExcursionFilter/ExcursionFilterSlice';
import {ExcursionType} from '../types';
import {
  DEFAULT_DATE_FORMAT,
  travelModeSelectorValues,
} from '@/modules/core/constants';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {useRouter} from 'next/router';
import dayjs from 'dayjs';

interface DetailExcursion {
  data: ExcursionData;
}

export const DetailExcursion: FC<DetailExcursion> = ({data}) => {
  const isScreenMd = useMatchMedia(`(max-width: ${breakpoints.md}px)`);

  const {
    id,
    guide,
    mainPhoto,
    photos,
    name,
    schedule,
    type,
    description,
    duration,
    travelMode,
    maxNumberOfParticipants,
    withChildren,
    adultPrice,
    childrenPrice,
  } = data;

  const excursionFilterData: ExcursionFilterValuesForm = useAppSelector(
    selectExcursionFilterValues,
  );
  const {queriesString} = excursionQueryHandler(
    excursionFilterData,
    ExcursionQueryLocation.list,
  );

  const {queriesString: bookingFormParams} = excursionQueryHandler(
    excursionFilterData,
    ExcursionQueryLocation.form,
  );

  const breadcrumbsItems = [
    {url: '/', label: 'Главная'},
    {url: `/excursion?${queriesString}`, label: 'Результат поиска'},
    {label: `${name}`},
  ];

  const minMaxTime: {min: string | null; max: string | null} = useMemo(
    () =>
      schedule.reduce(
        (acc: {min: null | string; max: null | string}, value) => {
          value.timeList.forEach(scheduleTime => {
            if (!acc.min || !acc.max) {
              acc.min = scheduleTime.time;
              acc.max = scheduleTime.time;
            }
            acc.min = acc.min > scheduleTime.time ? scheduleTime.time : acc.min;
            acc.max = acc.max > scheduleTime.time ? acc.max : scheduleTime.time;
          });
          return acc;
        },
        {min: null, max: null},
      ),
    [schedule],
  );
  const router = useRouter();
  const clickOnDateHandler = (date: Date) => {
    const formattedDate = dayjs(date).format(DEFAULT_DATE_FORMAT);
    void router.push(
      `/booking/excursion/${id}?step=1&selectedDate=${formattedDate}`,
    );
  };

  return (
    <DetailExcursionWrapper>
      <Breadcrumbs paths={breadcrumbsItems} />
      <DetailHeaderBlock>
        <BookingImageMap
          location={Location.EXCURSION}
          images={[mainPhoto, ...photos]}
        />
        <BusinessCard
          photo={guide.guideAvatar}
          names={guide.guideName}
          jobTitle="Экскурсовод"
        />
      </DetailHeaderBlock>
      <ExcursionName>{name}</ExcursionName>
      <InformationContainer>
        <InformationBlock>
          <ExcursionTitle>Продолжительность экскурсии</ExcursionTitle>
          <ExcursionValue>
            {`${duration} ${pluralizationFn(duration, [
              'час',
              'часа',
              'часов',
            ])}`}
          </ExcursionValue>
        </InformationBlock>
        <InformationBlock>
          <ExcursionTitle>Формат экскурсии</ExcursionTitle>
          <ExcursionValue>
            {
              excursionType.find(
                excursionTypeItem => excursionTypeItem.value === type,
              )?.title
            }
          </ExcursionValue>
        </InformationBlock>
        <InformationBlock>
          <ExcursionTitle>Способ передвижения</ExcursionTitle>
          <ExcursionValue>
            {
              travelModeSelectorValues.find(mode => mode.value === travelMode)
                ?.title
            }
          </ExcursionValue>
        </InformationBlock>
        <InformationBlock>
          <ExcursionTitle>Время</ExcursionTitle>
          <ExcursionValue>{`${minMaxTime.min}${
            minMaxTime.max !== minMaxTime.min ? ` - ${minMaxTime.max}` : ''
          }`}</ExcursionValue>
        </InformationBlock>
        <InformationBlock>
          <ExcursionTitle>Максимальное количество участников</ExcursionTitle>
          <ExcursionValue>{`${maxNumberOfParticipants}${
            withChildren ? ', можно с детьми' : ''
          }`}</ExcursionValue>
        </InformationBlock>
      </InformationContainer>
      <BookingExcursionBlock>
        <PriceBlock>
          <InformationBlock>
            <ExcursionTitle>{adultPrice} ₽</ExcursionTitle>
            {type === ExcursionTypes.GROUP && (
              <ExcursionValue>За взрослого</ExcursionValue>
            )}
          </InformationBlock>
          {type === ExcursionTypes.GROUP && withChildren && childrenPrice && (
            <InformationBlock>
              <ExcursionTitle>{childrenPrice} ₽</ExcursionTitle>
              <ExcursionValue>За ребенка</ExcursionValue>
            </InformationBlock>
          )}
        </PriceBlock>
        <Link href={`/booking/excursion/${id}?step=1`}>
          <ExcursionBookingButton dark>Бронировать</ExcursionBookingButton>
        </Link>
      </BookingExcursionBlock>
      <DescriptionBlock>
        <ExcursionTitle>Описание</ExcursionTitle>
        <ExcursionValue style={{whiteSpace: 'pre-wrap'}}>
          {description}
        </ExcursionValue>
      </DescriptionBlock>
      <ExcursionCalendarBlock>
        <ExcursionTitle>Даты проведения экскурсии</ExcursionTitle>
        <Calendar
          numOfMonths={isScreenMd ? 1 : 3}
          schedule={schedule}
          maxNumberOfParticipants={maxNumberOfParticipants}
          isGroupType={type === ExcursionType.GROUP}
          onChange={date => clickOnDateHandler(date)}
        />
      </ExcursionCalendarBlock>
    </DetailExcursionWrapper>
  );
};
