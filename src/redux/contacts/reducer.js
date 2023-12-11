import { initialState } from './initialState';

export const contactReducer = (state = initialState, action) => {
  if (action.type === 'addContact') {
    return { ...state, contacts: action.payload };
  }
  if (action.type === 'deleteContact') {
    return {
      ...state,
      contacts: state.contacts.filter(el => el.id !== action.payload),
    };
  }
  return state;
};
