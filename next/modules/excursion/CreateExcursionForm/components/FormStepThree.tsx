import React, {useEffect, useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {
  Checkbox,
  FormSelector,
  RegistrationClose,
  RegistrationCloseLabel,
  StepWrapper,
} from '../styles';
import TimeTableController, {
  ScheduleFormValues,
} from '@/modules/core/components/TimeTableController';
import {TourFormData, closingHours} from '../../types';

const FormStepThree = () => {
  const [isSelectorDisabled, setIsSelectorDisabled] = useState(false);
  const {register, control, setValue, watch} = useFormContext<
    ScheduleFormValues | TourFormData
  >();

  const registrationClosingHours = watch('registrationClosingHoursCount');

  const toggleSelector = (val: boolean) => {
    !val && setValue('registrationClosingHoursCount', undefined);
    setIsSelectorDisabled(val);
  };

  useEffect(() => {
    registrationClosingHours && toggleSelector(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StepWrapper>
      <TimeTableController {...{control, register}} />
      <RegistrationClose>
        <RegistrationCloseLabel>Закрытие регистрации</RegistrationCloseLabel>
        <Checkbox
          label="Автоматически закрывать регистрацию до начала экскурсии, если есть оплаченные заказы"
          value={isSelectorDisabled}
          setValue={toggleSelector}
        />
        <Controller
          name="registrationClosingHoursCount"
          control={control}
          render={({field}) => {
            return (
              <FormSelector
                options={closingHours}
                style={{maxWidth: '580px'}}
                {...field}
                value={field.value?.toString() ?? null}
                placeholder="Закрытие регистрации"
                disabled={!isSelectorDisabled}
              />
            );
          }}
        />
      </RegistrationClose>
    </StepWrapper>
  );
};

export default FormStepThree;
