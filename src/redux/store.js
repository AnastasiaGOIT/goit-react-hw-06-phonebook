// import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

// export const store = configureStore({ reducer });
import { createStore } from 'redux';

export const store = createStore(reducer);

// store.dispatch({ type: 'addContact', payload: '' });
