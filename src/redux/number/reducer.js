import { initialState } from './initialState';

export const numberReducer = (state = initialState, action) => {
  if (action.type === 'onInputChangeNumber') {
    return { ...state, number: action.payload };
  }
  if (action.type === 'resetNumber') {
    return { ...state, number: '' };
  }
  return state;
};
