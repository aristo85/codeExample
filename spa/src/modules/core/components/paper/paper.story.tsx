import { FC } from 'react';
import Paper from './paper';

const PaperStory: FC = () => {
  return (
    <>
      <Paper style={{ width: 100, height: 100 }} />
      <Paper style={{ width: 100, height: 100 }} border={false} />
      <Paper style={{ width: 100, height: 100 }} elevation={0} />
    </>
  );
};

export default PaperStory;
