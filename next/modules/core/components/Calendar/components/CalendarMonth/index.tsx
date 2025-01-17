import React, {FC, useMemo} from 'react';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import toObject from 'dayjs/plugin/toObject';
import ru from 'dayjs/locale/ru';
import dayjs, {Dayjs} from 'dayjs';
import {
  CalendarCaption,
  CalendarCaptionButton,
  CalendarDay,
  CalendarDayPlaces,
  CalendarMonthWrapper,
  CalendarWeek,
  CalendarWeekDay,
  CalendarWeekDayRow,
} from '@/modules/core/components/Calendar/components/CalendarMonth/styles';
import {ScheduleDate} from '@/modules/core/components/Calendar';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import ArrowRightIcon from '@/modules/core/components/icons/ArrowRightIcon';
import {ArrowLeftIcon} from '@/modules/core/components/Calendar/styles';

type MonthDay = {
  caption?: string;
  date: Date;
  selected: boolean;
  places: number;
};

type CalendarMonthProps = {
  month: number;
  year: number;
  schedule?: ScheduleDate[];
  selectable: boolean;
  value?: Date;
  onChange: (date: Date) => void;
  onClickPrev?: VoidFunction;
  onClickNext?: VoidFunction;
  hasPreviousMonth: boolean;
  maxNumberOfParticipants: number;
  isGroupType?: boolean;
};
const CalendarMonth: FC<CalendarMonthProps> = ({
  month,
  year,
  schedule,
  selectable,
  value,
  onChange,
  onClickPrev,
  onClickNext,
  hasPreviousMonth,
  maxNumberOfParticipants,
  isGroupType,
}) => {
  dayjs.extend(localeData);
  dayjs.extend(weekday);
  dayjs.extend(toObject);
  dayjs.locale(ru);

  const monthDate = dayjs(new Date(year, month));

  const weekDays = useMemo(() => {
    const daysOfWeek = Array.from(Array(7).keys()).map(dayOfWeek =>
      dayjs().day(dayOfWeek).format('dd'),
    );
    daysOfWeek.push(daysOfWeek.shift() as string);
    return daysOfWeek;
  }, []);

  const monthWeeks: MonthDay[][] = useMemo(() => {
    const getWeeks = () => {
      const weeks: Dayjs[] = [];
      let currentDate = monthDate.startOf('month').weekday(0);
      const nextMonth = monthDate.add(1, 'month');

      while (currentDate.weekday(0).toObject().months !== nextMonth.month()) {
        weeks.push(currentDate);
        currentDate = currentDate.add(1, 'week');
      }

      return weeks;
    };

    const getDaysOfWeek = (week: Dayjs) => {
      const days: Dayjs[] = [];
      let currentDate = week;
      const nextWeek = currentDate.add(1, 'week');

      while (currentDate.toObject().date !== nextWeek.toObject().date) {
        days.push(currentDate);
        currentDate = currentDate.add(1, 'day');
      }

      return days;
    };

    const weeks = getWeeks();

    return weeks.map(week =>
      getDaysOfWeek(week).map(day => {
        const daySchedule = schedule?.find(value =>
          dayjs(value.date).isSame(day),
        );
        const places = isGroupType
          ? daySchedule?.numberOfFreeCount
          : maxNumberOfParticipants * (daySchedule?.timeList?.length ?? 0);

        return {
          caption:
            day.month() == monthDate.month() ? day.format('D') : undefined,
          date: day.toDate(),
          selected: day.isSame(value),
          places: places ?? 0,
        };
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthDate, schedule, value]);

  return (
    <CalendarMonthWrapper>
      <CalendarCaption>
        {onClickPrev && hasPreviousMonth && (
          <CalendarCaptionButton onClick={onClickPrev}>
            <ArrowLeftIcon />
          </CalendarCaptionButton>
        )}
        <span>
          {monthDate.format('MMMM')} {year}
        </span>
        {onClickNext && (
          <CalendarCaptionButton onClick={onClickNext}>
            <ArrowRightIcon />
          </CalendarCaptionButton>
        )}
      </CalendarCaption>
      <CalendarWeekDayRow>
        {weekDays.map(weekDay => (
          <CalendarWeekDay key={weekDay + monthDate.month()}>
            {weekDay}
          </CalendarWeekDay>
        ))}
      </CalendarWeekDayRow>
      {monthWeeks.map(monthWeek => (
        <CalendarWeek key={monthWeek.map(({caption}) => caption).join()}>
          {monthWeek.map(monthDay => {
            return (
              <CalendarDay
                key={monthDay.date.getDay() + monthDate.month()}
                onClick={() => monthDay.places && onChange(monthDay.date)}
                selected={monthDay.selected}
                selectable={selectable}
                empty={!monthDay.caption}
                hasPlaces={!!monthDay.places}>
                <div>{monthDay.caption}</div>
                {monthDay.places && monthDay.caption ? (
                  <CalendarDayPlaces>
                    {monthDay.places}{' '}
                    {pluralizationFn(monthDay.places, [
                      'место',
                      'места',
                      'мест',
                    ])}
                  </CalendarDayPlaces>
                ) : null}
              </CalendarDay>
            );
          })}
        </CalendarWeek>
      ))}
    </CalendarMonthWrapper>
  );
};

export default CalendarMonth;
