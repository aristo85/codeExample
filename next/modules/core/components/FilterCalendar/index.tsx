import React, {forwardRef, useMemo, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import FilterCalendarMonth from './components/FilterCalendarMonth';
import {
  ArrowLeftButton,
  ArrowRightButton,
  ButtonTitle,
  CalendarButtonArrow,
  FilterCalendarBlock,
  FilterCalendarWrapper,
  FilteredValue,
  FilterMainContainer,
  InteractionButtons,
  MobileDateFilterContainer,
  MobileDateFilterContent,
  MobileDateHeaderBlock,
  MobileDateTitle,
  MobileDateTitleBlock,
} from '@/modules/core/components/FilterCalendar/styles';
import MobileFilterCalendarMonth from '@/modules/core/components/FilterCalendar/components/MobileFilterCalendarMonth';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import CustomModal from '@/modules/core/components/CustomModal';
import useMatchMedia from '../../hooks/useMatchMedia';
import {breakpoints} from '../../styles/mediaQueries';

type FilterCalendarProps = {
  numOfMonths: 1 | 2;
  arrivalDateValue?: Dayjs | null;
  departureDateValue?: Dayjs | null;
  onChangeArrivalDateValue?: (date: Dayjs | null) => void;
  onChangeDepartureDateValue?: (date: Dayjs | null) => void;
  isOpen: boolean;
  isMobile: boolean;
  isOpenToggleHandler: (value: boolean) => void;
};

const FilterCalendar = forwardRef<HTMLDivElement, FilterCalendarProps>(
  (
    {
      numOfMonths,
      onChangeArrivalDateValue,
      onChangeDepartureDateValue,
      arrivalDateValue,
      departureDateValue,
      isOpen,
      isMobile,
      isOpenToggleHandler,
    },
    ref,
  ) => {
    const isScreen1200 = useMatchMedia(
      `(max-width: ${breakpoints.screen1200}px)`,
    );
    const isScreen1000 = useMatchMedia(
      `(max-width: ${breakpoints.screen1000}px)`,
    );
    const isScreenMd = useMatchMedia(`(max-width: ${breakpoints.md}px)`);
    const isCompleteFormat = (!isScreen1000 && !isScreen1200) || isScreenMd;

    const [hoveredValue, setHoveredValue] = useState<Dayjs | null>(null);
    const [startMonth, setStartMonth] = useState(dayjs(new Date()));
    const monthYear = useMemo(() => {
      const monthYear = [];
      let currentMonth = startMonth;

      let monthCounter = 0;
      while (monthCounter < numOfMonths) {
        monthYear.push({
          month: currentMonth.month(),
          year: currentMonth.year(),
        });
        currentMonth = currentMonth.add(1, 'month');
        monthCounter += 1;
      }

      return monthYear;
    }, [numOfMonths, startMonth]);

    const hasPreviousMonth = startMonth
      .startOf('month')
      .isAfter(dayjs(new Date()).startOf('month'));

    const handleClickPrev = () =>
      setStartMonth(startMonth.subtract(1, 'month'));

    const handleClickNext = () => setStartMonth(startMonth.add(1, 'month'));

    const displayCurrentDate = () => {
      const shortFormatStart = isCompleteFormat
        ? 'DD MMMM YYYY'
        : isScreen1000
        ? 'DD MMM'
        : 'DD MMM YYYY';
      const shortFormatEnd =
        isScreen1200 && !isCompleteFormat ? 'DD MMM YYYY' : 'DD MMMM YYYY';
      const watchedArrivalDate = arrivalDateValue?.format(shortFormatStart);
      const watchedDepartureDate = departureDateValue?.format(shortFormatEnd);
      return `${
        watchedArrivalDate
          ? `${watchedArrivalDate} ${
              watchedDepartureDate ? `- ${watchedDepartureDate}` : '- Выезд'
            }`
          : `Заезд - Выезд`
      }`;
    };

    if (isMobile) {
      const firstDate = dayjs(new Date(monthYear[0].year, monthYear[0].month));
      const secondDate = dayjs(new Date(monthYear[1].year, monthYear[1].month));
      return (
        <FilterMainContainer>
          <FilteredValue onClick={() => isOpenToggleHandler(!isOpen)}>
            {displayCurrentDate()}
          </FilteredValue>
          <CustomModal isOpen={isOpen}>
            <MobileDateFilterContainer>
              <MobileDateFilterContent ref={ref}>
                <MobileDateHeaderBlock>
                  <CalendarButtonArrow onClick={handleClickPrev}>
                    {hasPreviousMonth && <ArrowLeftButton stroke={'#1D7ABD'} />}
                  </CalendarButtonArrow>
                  <MobileDateTitleBlock>
                    <MobileDateTitle>
                      {firstDate.format('MMM')} - {secondDate.format('MMM')}
                    </MobileDateTitle>
                    <MobileDateTitle>
                      {secondDate.format('YYYY')}
                    </MobileDateTitle>
                  </MobileDateTitleBlock>
                  <CalendarButtonArrow onClick={handleClickNext}>
                    <ArrowRightButton stroke={'#1D7ABD'} />
                  </CalendarButtonArrow>
                </MobileDateHeaderBlock>
                <FilterCalendarBlock>
                  <MobileFilterCalendarMonth
                    monthYear={monthYear}
                    selectable={true}
                    arrivalDate={arrivalDateValue}
                    onChangeArrivalDate={onChangeArrivalDateValue}
                    onChangeDepartureDate={onChangeDepartureDateValue}
                    departureDate={departureDateValue}
                  />
                </FilterCalendarBlock>
                <ButtonBasic
                  dark
                  disabled={!arrivalDateValue || !departureDateValue}
                  onClick={() => isOpenToggleHandler(false)}>
                  Готово
                </ButtonBasic>
              </MobileDateFilterContent>
            </MobileDateFilterContainer>
          </CustomModal>
        </FilterMainContainer>
      );
    }

    return (
      <FilterMainContainer ref={ref}>
        <FilteredValue onClick={() => isOpenToggleHandler(!isOpen)}>
          {displayCurrentDate()}
        </FilteredValue>
        <FilterCalendarWrapper isOpen={isOpen}>
          <FilterCalendarBlock>
            {monthYear.map(({month, year}, index) => (
              <FilterCalendarMonth
                key={`${month}-${year}`}
                hoveredValue={hoveredValue}
                setHoveredValue={setHoveredValue}
                month={month}
                year={year}
                currentIndex={index}
                selectable={true}
                arrivalDate={arrivalDateValue}
                onChangeArrivalDate={onChangeArrivalDateValue}
                onChangeDepartureDate={onChangeDepartureDateValue}
                departureDate={departureDateValue}
              />
            ))}
          </FilterCalendarBlock>
          <InteractionButtons>
            <CalendarButtonArrow onClick={handleClickPrev}>
              {hasPreviousMonth && (
                <>
                  <ArrowLeftButton stroke={'#1D7ABD'} />
                  <ButtonTitle>Предыдущий месяц</ButtonTitle>
                </>
              )}
            </CalendarButtonArrow>

            <CalendarButtonArrow onClick={handleClickNext}>
              <ButtonTitle>Следующий месяц</ButtonTitle>
              <ArrowRightButton stroke={'#1D7ABD'} />
            </CalendarButtonArrow>
          </InteractionButtons>
        </FilterCalendarWrapper>
      </FilterMainContainer>
    );
  },
);

FilterCalendar.displayName = 'FilterCalendar';
export default FilterCalendar;
