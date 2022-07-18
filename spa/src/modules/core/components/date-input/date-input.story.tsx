import { FC, useState } from 'react';
import DateInput from './date-input';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

const DateInputStory: FC = () => {
  const [selectedDate, handleDateChange] = useState<MaterialUiPickersDate>(
    new Date()
  );

  return <DateInput value={selectedDate} onChange={handleDateChange} />;
};

export default DateInputStory;
