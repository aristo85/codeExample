import { FC } from 'react';

import Button from './button';

const ButtonStory: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button text='Default Button' />
      <Button text='Disabled Button' variant='contained' disabled />
      <Button text='Loading Button' variant='contained' isLoading />
      <Button text='Text Button' variant='text' />
    </div>
  );
};

export default ButtonStory;
