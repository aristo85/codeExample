import { createStore, applyMiddleware, compose } from 'redux';
// services
import sagaMiddleware from 'modules/core/services/saga.service';

import rootReducer from 'modules/root.reducer';
import rootSaga from 'modules/root.saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
