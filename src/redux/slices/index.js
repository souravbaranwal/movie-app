import { combineReducers } from 'redux';

import { countReducer } from './count';

export const rootReducer = combineReducers({
  count: countReducer,
});