import React, {FC, useMemo} from 'react';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import toObject from 'dayjs/plugin/toObject';
import ru from 'dayjs/locale/ru';
import dayjs, {Dayjs} from 'dayjs';
import {
  CalendarCaption,
  CalendarDayTd,
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
  month: number;
  year: number;
  selectable: boolean;
  arrivalDate?: Dayjs | null;
  departureDate?: Dayjs | null;
  onChangeArrivalDate?: (date: Dayjs | null) => void;
  onChangeDepartureDate?: (date: Dayjs | null) => void;
  hoveredValue: Dayjs | null;
  setHoveredValue: (date: Dayjs | null) => void;
  currentIndex: number;
};
const FilterCalendarMonth: FC<CalendarMonthProps> = ({
  month,
  year,
  selectable,
  arrivalDate,
  onChangeArrivalDate,
  onChangeDepartureDate,
  departureDate,
  setHoveredValue,
  hoveredValue,
  currentIndex,
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
          if (!hoveredValue && arrivalDate && !departureDate) {
            return day.isSame(arrivalDate);
          }

          if (hoveredValue && arrivalDate && !departureDate) {
            return (
              day.isSame(arrivalDate) ||
              (day.isBefore(hoveredValue) && day.isAfter(arrivalDate)) ||
              day.isSame(hoveredValue)
            );
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
          caption:
            day.month() == monthDate.month() ? day.format('D') : undefined,
          date: day,
          selected: getSelectedValue(),
        };
      }),
    );
  }, [monthDate, arrivalDate, departureDate, hoveredValue]);

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
      <CalendarCaption>
        <span>{monthDate.format('MMMM')}</span>
        {currentIndex !== 0 && <span>{year}</span>}
      </CalendarCaption>
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
              <CalendarWeekDayTh key={weekDay + monthDate.month()}>
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
            <CalendarWeekTr key={monthWeek.map(({caption}) => caption).join()}>
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
                      (monthDay.date.isSame(hoveredValue) &&
                        !departureDate &&
                        monthDay.date.isAfter(arrivalDate))
                    }
                    isCurrentMonth={month === monthDay.date.month()}
                    onMouseEnter={() =>
                      canSelect && setHoveredValue(monthDay.date)
                    }
                    key={monthDay.date.day() + monthDate.month()}
                    onClick={() =>
                      canSelect && onDayClickHandler(monthDay.date)
                    }
                    selected={(canSelect && monthDay.selected) || false}
                    selectable={canSelect}>
                    {monthDay.date.format('D')}
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

export default FilterCalendarMonth;
