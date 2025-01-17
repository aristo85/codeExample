import {BookingExcursionRequestBody} from '@/modules/core/api/model/booking/bookingExcursionRequestBody';
import Calendar, {ScheduleDate} from '@/modules/core/components/Calendar';
import dayjs from 'dayjs';
import React, {FC, useEffect} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {
  CalendarWrapper,
  ChosenDate,
  ErrorMessage,
  FormSelector,
} from './styles';
import {ExcursionData} from '@/modules/core/api/model/excursion/excursionData';
import {StepWrapper} from '../CreateExcursionForm/styles';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';
import {useRouter} from 'next/router';

type Props = {
  schedule: ExcursionData['schedule'];
  maxNumberOfParticipants: number;
  isGroupType?: boolean;
};

const BookingStepOne: FC<Props> = ({
  schedule,
  maxNumberOfParticipants,
  isGroupType,
}) => {
  const {
    control,
    formState: {errors},
    setValue,
  } = useFormContext<BookingExcursionRequestBody>();
  const isSmallScreen = useMatchMedia(`(max-width: ${breakpoints.smTab}px)`);
  const router = useRouter();

  useEffect(() => {
    if (router.query.selectedDate) {
      setValue('date', router.query.selectedDate as string);
    }
  }, []);

  return (
    <StepWrapper>
      <Controller
        name="date"
        control={control}
        render={({field: {value, onChange}, fieldState: {error}}) => {
          return (
            <CalendarWrapper>
              <Calendar
                numOfMonths={isSmallScreen ? 1 : 2}
                maxNumberOfParticipants={maxNumberOfParticipants}
                schedule={schedule}
                isGroupType={isGroupType}
                value={value ? new Date(value) : undefined}
                onChange={(data: Date) => {
                  onChange(dayjs(data).format(DEFAULT_DATE_FORMAT));
                  setValue('time', '');
                }}
              />
              <ChosenDate>
                Выбранная дата: <span>{value}</span>
              </ChosenDate>
              {value ? (
                <Controller
                  name="time"
                  control={control}
                  render={({field}) => {
                    const options = (
                      schedule.find(el => el.date === value) as ScheduleDate
                    )?.timeList.map(el => ({value: el.time, title: el.time}));
                    return (
                      <FormSelector
                        label="Время"
                        options={options}
                        style={{marginTop: '32px'}}
                        {...field}
                        value={`${field.value}`}
                        error={errors.time?.message}
                        onChange={value => {
                          field.onChange(value);
                        }}
                        placeholder="Выберите время"
                        mobileh={68}
                      />
                    );
                  }}
                />
              ) : (
                <ErrorMessage>{errors.date?.message}</ErrorMessage>
              )}
            </CalendarWrapper>
          );
        }}
      />
    </StepWrapper>
  );
};

export default BookingStepOne;
