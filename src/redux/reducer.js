import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/reducer';
import { filterReducer } from './filter/reducer';
import { nameReducer } from './name/reducer';
import { numberReducer } from './number/reducer';
export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  name: nameReducer,
  number: numberReducer,
});
