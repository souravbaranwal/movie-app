/* eslint-disable no-undef */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { rootReducer } from './slices';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middlewareToApply = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewareToApply.push(createDebugger());
}

const middlewares = applyMiddleware(...middlewareToApply);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistedReducer, middlewares);

export default Store;
export const Persistor = persistStore(Store);
