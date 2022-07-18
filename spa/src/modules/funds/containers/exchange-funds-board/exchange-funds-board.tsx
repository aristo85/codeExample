import { FC } from 'react';
// containers
import ExchangeFundsForm from 'modules/funds/containers/exchange-funds-form';

import { Root } from './exchange-funds-board.styled';

const ExchangeFundsBoard: FC = () => (
  <Root>
    <ExchangeFundsForm />
  </Root>
);

export default ExchangeFundsBoard;
