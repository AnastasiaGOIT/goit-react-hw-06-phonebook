import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import { nameReducer } from './name/nameSlice';
import { numberReducer } from './number/numberSlice';
export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  name: nameReducer,
  number: numberReducer,
});
