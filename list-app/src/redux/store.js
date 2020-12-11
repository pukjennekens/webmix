import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const INITIAL_STATE = {};

const middleware = [thunk, logger];

import rootReducer from './reducers';

const pReducer = persistReducer(
  {
    key: 'list',
    storage,
    whitelist: ['list'],
  },
  rootReducer
);

const store = createStore(
  pReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

export const persistor = persistStore(store);
export default store;
