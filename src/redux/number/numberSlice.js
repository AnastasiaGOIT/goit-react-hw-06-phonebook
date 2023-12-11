import { createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
  name: 'number',
  initialState: { number: '' },
  reducers: {
    onInputChangeNumberAction: (state, action) => {
      return { ...state, number: action.payload };
    },
    resetNumberAction: (state, action) => {
      return { ...state, number: '' };
    },
  },
});
export const { onInputChangeNumberAction, resetNumberAction } =
  numberSlice.actions;
export const numberReducer = numberSlice.reducer;
