import { combineReducers } from 'redux';

import listReducer from './list.reducer';

const rootReducer = combineReducers({
  list: listReducer,
});

export default rootReducer;
