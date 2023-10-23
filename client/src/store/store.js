import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tickersReducer } from './reducers/tickersReducer';
import { localStoredReducer } from './reducers/localStoredReducer';
import { muteReducer } from './reducers/muteReducer';

const reducers = combineReducers({
  tickers: tickersReducer, local: localStoredReducer(muteReducer, 'mute')
});
export const store = configureStore({
  reducer: reducers
});
