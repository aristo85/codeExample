import React, {FC} from 'react';
import {GuideData} from '@/modules/core/api/model/guide/guideData';
import {
  CalendarFooterWrapper,
  CalendarWrapper,
  ChosenDate,
  ErrorMessage,
  FormSelector,
  StepWrapper,
} from './styles';
import {Controller, useFormContext} from 'react-hook-form';
import {BookingGuideRequestBody} from '@/modules/core/api/model/booking/bookingGuideRequestBody';
import Calendar, {ScheduleDate} from '@/modules/core/components/Calendar';
import dayjs from 'dayjs';
import {timeOptionsArray} from '@/modules/excursion/types';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

type Props = {
  schedule: GuideData['schedule'];
  maxNumberOfParticipants: number;
  guideDuration: number;
};

const BookingStepOne: FC<Props> = ({
  schedule,
  maxNumberOfParticipants,
  guideDuration,
}) => {
  const {
    control,
    formState: {errors},
    setValue,
  } = useFormContext<BookingGuideRequestBody>();

  return (
    <StepWrapper>
      <Controller
        name="date"
        control={control}
        render={({field: {value, onChange}, fieldState: {error}}) => {
          return (
            <CalendarWrapper>
              <Calendar
                numOfMonths={2}
                maxNumberOfParticipants={maxNumberOfParticipants}
                schedule={schedule}
                value={value ? new Date(value) : undefined}
                onChange={(data: Date) => {
                  onChange(dayjs(data).format(DEFAULT_DATE_FORMAT));
                  setValue('time', '');
                  setValue('duration', null);
                }}
              />
              <ChosenDate>
                Выбранная дата: <span>{value}</span>
              </ChosenDate>
              {value ? (
                <CalendarFooterWrapper>
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
                          {...field}
                          value={field.value?.toString() ?? null}
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
                  <Controller
                    name="duration"
                    control={control}
                    render={({field}) => {
                      const durationOptions = timeOptionsArray.filter(
                        el => +el.value <= guideDuration,
                      );
                      return (
                        <FormSelector
                          label="Длительность"
                          options={durationOptions}
                          {...field}
                          value={field.value?.toString() || null}
                          error={errors.duration?.message}
                          onChange={value => {
                            field.onChange(value);
                          }}
                          placeholder="Выберите Длительность"
                          mobileh={68}
                        />
                      );
                    }}
                  />
                </CalendarFooterWrapper>
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
