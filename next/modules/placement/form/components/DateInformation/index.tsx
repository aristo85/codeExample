import React, {FC} from 'react';
import {
  DateFormBlock,
  DateFormData,
  DateFormInformation,
  DateInformationBlock,
  DateTimeBlock,
} from '@/modules/placement/form/components/DateInformation/styles';
import useGetDaysAndNights from '@/modules/core/hooks/useGetDaysAndNights';
import {useRouter} from 'next/router';

export interface Dates {
  arrivalDateTime: string;
  departureDateTime: string;
}
export interface DateInformationProps {
  stayDates: Dates | null;
  isMobileFinalStep?: boolean;
  backwardLink?: string;
}
const DateInformation: FC<DateInformationProps> = ({
  stayDates,
  isMobileFinalStep,
  backwardLink,
}) => {
  const router = useRouter();

  const {daysString, dateRangeString, datesWithTime} = useGetDaysAndNights({
    arrivalDate: stayDates?.arrivalDateTime || null,
    departureDate: stayDates?.departureDateTime || null,
  });

  const backwardHandler = () => {
    if (!backwardLink) return;

    router.push(backwardLink);
  };

  if (isMobileFinalStep) {
    return (
      <DateInformationBlock onClick={backwardHandler}>
        <DateFormBlock isMobileLastStep={true}>
          <DateFormInformation>Даты</DateFormInformation>
          <DateFormData dark>{dateRangeString}</DateFormData>
        </DateFormBlock>
        <DateTimeBlock>
          <DateFormBlock isMobileLastStep={true}>
            <DateFormInformation>Время заезда:</DateFormInformation>
            <DateFormData dark>
              {datesWithTime.arrivalDate?.format('HH:mm')}
            </DateFormData>
          </DateFormBlock>
          <DateFormBlock isMobileLastStep={true}>
            <DateFormInformation>Время выезда:</DateFormInformation>
            <DateFormData dark>
              {datesWithTime.departureDate?.format('HH:mm')}
            </DateFormData>
          </DateFormBlock>
        </DateTimeBlock>
      </DateInformationBlock>
    );
  }

  return (
    <DateInformationBlock>
      <DateFormBlock>
        <DateFormInformation>Выбранные даты:</DateFormInformation>
        <DateFormData onClick={backwardHandler}>{dateRangeString}</DateFormData>
        <DateFormInformation onClick={backwardHandler}>
          {daysString}
        </DateFormInformation>
      </DateFormBlock>
      <DateFormBlock>
        <DateFormInformation>Время заезда:</DateFormInformation>
        <DateFormData onClick={backwardHandler}>
          {datesWithTime.arrivalDate?.format('HH:mm')}
        </DateFormData>
      </DateFormBlock>
      <DateFormBlock>
        <DateFormInformation>Время выезда:</DateFormInformation>
        <DateFormData onClick={backwardHandler}>
          {datesWithTime.departureDate?.format('HH:mm')}
        </DateFormData>
      </DateFormBlock>
    </DateInformationBlock>
  );
};

export default DateInformation;
