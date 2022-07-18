import { FC } from 'react';
import { Provider } from 'react-redux';
// services
import store from 'modules/core/services/store.service';

const StoreProvider: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
