import React, {FC, useState} from 'react';
import {AddTimeBtn, TimeBtn, TimesWrapper} from './styles';
import PlusIcon from '../icons/PlusIcon';
import {
  Control,
  UseFormRegister,
  useFieldArray,
  useFormContext,
} from 'react-hook-form';
import {ScheduleFormValues} from '.';
import CloseIcon from '../icons/CloseIcon';
import TimeInput from '../datePickers/TimeInput';
import {TourFormData} from '@/modules/excursion/types';
import {ErrorMessage} from '@/modules/excursion/CreateExcursionForm/styles';
import dayjs from 'dayjs';

type Props = {
  nestIndex: number;
  control: Control<ScheduleFormValues>;
  register: UseFormRegister<ScheduleFormValues>;
  error?: string;
};

const TimeFields: FC<Props> = ({nestIndex, control}) => {
  const [isTimeCalendarOpen, setIsTimeCalendarOpen] = useState(false);

  const {
    formState: {errors},
    trigger,
  } = useFormContext<TourFormData>();

  const {fields, remove, append} = useFieldArray({
    control,
    name: `schedule.${nestIndex}.timeList`,
  });

  const sortedFields = fields
    .map((item, index) => ({...item, originalIndex: index}))
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <TimesWrapper>
      {sortedFields.map((item, timeIndx) => {
        return (
          <TimeBtn
            key={item.id}
            type="button"
            onClick={() => remove(item.originalIndex)}>
            {item.time} <CloseIcon fill="#8DAEC1" />
          </TimeBtn>
        );
      })}
      <TimeInput
        onChange={value => {
          const isValueRepeated = fields.find(el => el.time === value);
          if (isValueRepeated) return;
          append({time: value});
          trigger('schedule');
        }}
        value={dayjs()}
        onClose={() => setIsTimeCalendarOpen(false)}
        isOpen={isTimeCalendarOpen}>
        <AddTimeBtn type="button" onClick={() => setIsTimeCalendarOpen(true)}>
          <PlusIcon /> Добавить время
        </AddTimeBtn>
      </TimeInput>
      {errors?.schedule && (
        <ErrorMessage>
          {errors.schedule[nestIndex]?.timeList?.message}
        </ErrorMessage>
      )}
    </TimesWrapper>
  );
};

export default TimeFields;
