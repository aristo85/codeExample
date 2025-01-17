import React, {FC, useMemo} from 'react';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import toObject from 'dayjs/plugin/toObject';
import dayjs, {Dayjs} from 'dayjs';
import {
  CalendarDayTd,
  CalendarDayTdSpan,
  CalendarMonthWrapper,
  CalendarWeekDayHeader,
  CalendarWeekDayTh,
  CalendarWeekDayTr,
  CalendarWeekTr,
} from './styles';

type MonthDay = {
  caption?: string;
  date: Dayjs;
  selected?: boolean;
};

type CalendarMonthProps = {
  selectable: boolean;
  arrivalDate?: Dayjs | null;
  departureDate?: Dayjs | null;
  onChangeArrivalDate?: (date: Dayjs | null) => void;
  onChangeDepartureDate?: (date: Dayjs | null) => void;
  monthYear: {month: number; year: number}[];
};
const MobileFilterCalendarMonth: FC<CalendarMonthProps> = ({
  selectable,
  arrivalDate,
  onChangeArrivalDate,
  onChangeDepartureDate,
  departureDate,
  monthYear,
}) => {
  dayjs.extend(localeData);
  dayjs.extend(weekday);
  dayjs.extend(toObject);

  const firstDate = dayjs(new Date(monthYear[0].year, monthYear[0].month));
  const secondDate = dayjs(new Date(monthYear[1].year, monthYear[1].month));

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

      let currentDate = firstDate.weekday(0);
      const nextMonth = secondDate.add(1, 'month');

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

      while (currentDate.isBefore(nextWeek)) {
        days.push(currentDate);
        currentDate = currentDate.add(1, 'day');
      }

      return days;
    };

    const weeks = getWeeks();

    return weeks.map(week =>
      getDaysOfWeek(week).map(day => {
        const getSelectedValue = () => {
          if (arrivalDate && !departureDate) {
            return day.isSame(arrivalDate);
          }

          if (arrivalDate && !departureDate) {
            return day.isSame(arrivalDate) || day.isAfter(arrivalDate);
          }

          if (arrivalDate && departureDate) {
            return (
              day.isSame(arrivalDate) ||
              day.isSame(departureDate) ||
              (day.isAfter(arrivalDate) && day.isBefore(departureDate))
            );
          }
        };

        return {
          caption: day.format('D'),
          date: day,
          selected: getSelectedValue(),
        };
      }),
    );
  }, [firstDate, arrivalDate, departureDate]);

  const onDayClickHandler = (day: Dayjs) => {
    if ((arrivalDate && departureDate) || !arrivalDate) {
      onChangeDepartureDate && onChangeDepartureDate(null);
      onChangeArrivalDate && onChangeArrivalDate(day);
    }
    if (arrivalDate && !departureDate) {
      if (day.isSame(arrivalDate)) {
        onChangeDepartureDate && onChangeDepartureDate(day.add(1, 'day'));
        return;
      }
      if (day.isBefore(arrivalDate)) {
        onChangeDepartureDate && onChangeDepartureDate(null);
        onChangeArrivalDate && onChangeArrivalDate(day);
      } else {
        onChangeDepartureDate && onChangeDepartureDate(day);
      }
    }
  };

  return (
    <CalendarMonthWrapper>
      <table
        style={{
          width: '100%',
          borderCollapse: 'unset',
          borderSpacing: '0 3px',
          tableLayout: 'fixed',
        }}>
        <CalendarWeekDayHeader>
          <CalendarWeekDayTr>
            {weekDays.map(weekDay => (
              <CalendarWeekDayTh key={weekDay + firstDate.month()}>
                {weekDay}
              </CalendarWeekDayTh>
            ))}
          </CalendarWeekDayTr>
        </CalendarWeekDayHeader>
        <tbody
          style={{
            display: 'table-row-group',
            verticalAlign: 'middle',
            borderColor: 'inherit',
          }}>
          {monthWeeks.map(monthWeek => (
            <CalendarWeekTr
              key={monthWeek
                .map(({date}, i) => `${date.format('MM-DD-YYYY')}-${i}`)
                .join()}>
              {monthWeek.map(monthDay => {
                const today = dayjs();
                const canSelect =
                  selectable &&
                  (monthDay.date.isAfter(today) ||
                    monthDay.date.format('MM-DD-YYYY') ===
                      today.format('MM-DD-YYYY'));
                return (
                  <CalendarDayTd
                    startRadius={monthDay.date.isSame(arrivalDate)}
                    endRadius={
                      monthDay.date.isSame(departureDate) ||
                      (!departureDate && monthDay.date.isAfter(arrivalDate))
                    }
                    key={monthDay.date.day() + firstDate.month()}
                    onClick={() =>
                      canSelect && onDayClickHandler(monthDay.date)
                    }
                    selected={(canSelect && monthDay.selected) || false}
                    selectable={canSelect}>
                    <CalendarDayTdSpan>{monthDay.caption}</CalendarDayTdSpan>
                  </CalendarDayTd>
                );
              })}
            </CalendarWeekTr>
          ))}
        </tbody>
      </table>
    </CalendarMonthWrapper>
  );
};

export default MobileFilterCalendarMonth;
