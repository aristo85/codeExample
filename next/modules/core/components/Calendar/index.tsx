import {FC, useMemo, useState} from 'react';
import CalendarMonth from '@/modules/core/components/Calendar/components/CalendarMonth';
import dayjs from 'dayjs';
import {
  ArrowLeftIcon,
  CalendarButton,
  CalendarButtonPlaceholder,
  CalendarWrapper,
} from '@/modules/core/components/Calendar/styles';
import ArrowRightIcon from '@/modules/core/components/icons/ArrowRightIcon';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';

export interface ScheduleDate {
  date: string;
  timeList: ScheduleTime[];
  numberOfFreeCount: number;
}

export interface ScheduleTime {
  time: string;
}

type CalendarProps = {
  numOfMonths: 1 | 2 | 3;
  schedule?: ScheduleDate[];
  value?: Date;
  onChange?: (date: Date) => void;
  maxNumberOfParticipants: number;
  isGroupType?: boolean;
};

const Calendar: FC<CalendarProps> = ({
  numOfMonths,
  schedule,
  value,
  onChange,
  maxNumberOfParticipants,
  isGroupType,
}) => {
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const [startMonth, setStartMonth] = useState(dayjs(new Date()));
  const numOfMonthsRender = isScreenXs ? 1 : numOfMonths;

  const monthYear = useMemo(() => {
    const monthYear = [];
    let currentMonth = startMonth;

    let monthCounter = 0;
    while (monthCounter < numOfMonthsRender) {
      monthYear.push({
        month: currentMonth.month(),
        year: currentMonth.year(),
      });
      currentMonth = currentMonth.add(1, 'month');
      monthCounter += 1;
    }

    return monthYear;
  }, [numOfMonthsRender, startMonth]);

  const handleSelectDate = (date: Date) => {
    if (onChange) {
      onChange(date);
    }
  };

  const hasPreviousMonth = startMonth
    .startOf('month')
    .isAfter(dayjs(new Date()).startOf('month'));

  const handleClickPrev = () => setStartMonth(startMonth.subtract(1, 'month'));

  const handleClickNext = () => setStartMonth(startMonth.add(1, 'month'));

  return (
    <CalendarWrapper>
      {!isScreenXs &&
        (hasPreviousMonth ? (
          <CalendarButton $left onClick={handleClickPrev}>
            <ArrowLeftIcon color={'white'} />
          </CalendarButton>
        ) : (
          <CalendarButtonPlaceholder />
        ))}
      {monthYear.map(({month, year}) => (
        <CalendarMonth
          key={`${month}-${year}`}
          month={month}
          year={year}
          selectable={!!onChange}
          schedule={schedule}
          value={value}
          onChange={handleSelectDate}
          onClickPrev={isScreenXs ? handleClickPrev : undefined}
          onClickNext={isScreenXs ? handleClickNext : undefined}
          maxNumberOfParticipants={maxNumberOfParticipants}
          hasPreviousMonth={hasPreviousMonth}
          isGroupType={isGroupType}
        />
      ))}
      {!isScreenXs && (
        <CalendarButton onClick={handleClickNext}>
          <ArrowRightIcon color={'white'} />
        </CalendarButton>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
