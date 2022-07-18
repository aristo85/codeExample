import { FC, useState } from 'react';
import PhoneInputNumber from './phone-input';

const PhoneInputStory: FC = () => {
  const [value, subValue] = useState('');

  return <PhoneInputNumber value={value} label='Phone' onChange={subValue} />;
};

export default PhoneInputStory;
