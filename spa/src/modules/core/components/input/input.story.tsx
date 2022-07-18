import { FC } from 'react';
import Input from './input';
import Icon from '../icon/icon';

const InputStory: FC = () => {
  return (
    <>
      <Input name='test' placeholder='some placeholder' label='Default input' />
      <br />
      <Input
        name='test'
        placeholder='some placeholder'
        label='Input with start adornment'
        startAdornment={<Icon name='bitcoinCircleOrange' width={20} />}
      />
      <br />
      <Input
        name='test'
        placeholder='some placeholder'
        label='Input with end adornment'
        endAdornment={<Icon name='euro' width={20} />}
      />
    </>
  );
};

export default InputStory;
