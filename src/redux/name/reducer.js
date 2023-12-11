import { initialState } from './initialState';

export const nameReducer = (state = initialState, action) => {
  if (action.type === 'onInputChangeName') {
    return { ...state, name: action.payload };
  }
  if (action.type === 'resetName') {
    return { ...state, name: '' };
  }
  return state;
};
