import React, {FC} from 'react';
import {
  Control,
  Controller,
  UseFormRegister,
  useFieldArray,
  useFormContext,
} from 'react-hook-form';
import {
  ActionContainer,
  AddDateBtn,
  DateContainer,
  DateControllerWrapper,
  DeleteDateBtn,
  DuplicateBtn,
  Label,
  ScheduleDateInput,
  ScheduleRow,
  ScheduleWrapper,
  TimesContainer,
} from './styles';
import dayjs from 'dayjs';
import TimeFields from './TimeFields';
import PlusIcon from '../icons/PlusIcon';
import {TourFormData} from '@/modules/excursion/types';
import {ErrorMessage} from '@/modules/excursion/CreateExcursionForm/styles';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';
import useMatchMedia from '../../hooks/useMatchMedia';
import {breakpoints} from '../../styles/mediaQueries';

export type ScheduleDataType = {
  date: string;
  timeList?: {time: string}[];
};

export type ScheduleFormValues = {
  schedule: ScheduleDataType[];
};

type TimeTableControllerProps = {
  control: Control<ScheduleFormValues>;
  register: UseFormRegister<ScheduleFormValues>;
};

const TimeTableController: FC<TimeTableControllerProps> = ({
  control,
  register,
}) => {
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);
  const {
    formState: {errors},
    trigger,
    watch,
  } = useFormContext<TourFormData>();
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'schedule',
  });

  const dataFields = watch('schedule') ?? [];

  const handleDuplicate = (timeList?: {time: string}[]) => {
    const latestDate = dataFields.reduce((max, current) => {
      return dayjs(max).isAfter(dayjs(current.date)) ? max : current.date;
    }, fields[0].date);
    append({
      date: dayjs(latestDate).add(1, 'day').format(DEFAULT_DATE_FORMAT),
      timeList,
    });
  };

  return (
    <ScheduleWrapper>
      {dataFields.map((el, indx) => (
        <ScheduleRow key={el.date + indx}>
          <DateContainer>
            <ActionContainer>
              <DeleteDateBtn
                type="button"
                onClick={() => {
                  remove(indx);
                  trigger('schedule');
                }}
              />
              <DuplicateBtn
                type="button"
                onClick={() => handleDuplicate(el.timeList)}>
                Дублировать
              </DuplicateBtn>
            </ActionContainer>
            <DateControllerWrapper>
              <Controller
                control={control}
                name={`schedule.${indx}.date`}
                render={({field}) => (
                  <ScheduleDateInput
                    label={indx === 0 || isScreenSm ? 'Дата' : ''}
                    value={dayjs(field.value)}
                    setValue={value => {
                      const newDate = dayjs(value).format(DEFAULT_DATE_FORMAT);
                      field.onChange(newDate);
                      trigger('schedule');
                    }}
                    minDate={dayjs()}
                  />
                )}
              />
            </DateControllerWrapper>
          </DateContainer>
          <TimesContainer>
            {(indx === 0 || isScreenSm) && <Label>Время</Label>}
            <TimeFields nestIndex={indx} {...{control, register}} />
          </TimesContainer>
        </ScheduleRow>
      ))}
      <AddDateBtn
        type="button"
        onClick={() => append({date: dayjs().format(DEFAULT_DATE_FORMAT)})}>
        <PlusIcon /> Добавить дату и время
      </AddDateBtn>
      <ErrorMessage>{errors.schedule?.message}</ErrorMessage>
    </ScheduleWrapper>
  );
};

export default TimeTableController;
