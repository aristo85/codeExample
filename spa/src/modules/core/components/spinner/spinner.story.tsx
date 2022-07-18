import { FC } from 'react';
import Spinner from './index';

const SpinnerStory: FC = () => {
  return (
    <>
      <Spinner isLoading size='big' />
      <Spinner isLoading size='medium' />
      <Spinner isLoading size='small' />
      <Spinner isLoading size='small' color='black' />
      <Spinner isLoading size='small' color='lightGray' />
    </>
  );
};

export default SpinnerStory;
