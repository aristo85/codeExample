import { FC } from 'react';
// containers
import AddFundsForm from 'modules/funds/containers/add-funds-form';

import { Root } from './add-funds-board.styled';

const AddFundsBoard: FC = () => (
  <Root>
    <AddFundsForm />
  </Root>
);

export default AddFundsBoard;
