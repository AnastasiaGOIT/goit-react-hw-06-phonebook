import { initialState } from './initialState';

export const filterReducer = (state = initialState, action) => {
  if (action.type === 'onInputChange') {
    return { ...state, filter: action.payload };
  }

  return state;
};
