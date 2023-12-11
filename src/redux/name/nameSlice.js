import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: { name: '' },
  reducers: {
    onInputChangeNameAction: (state, action) => {
      return { ...state, name: action.payload };
    },
    resetNameAction: (state, action) => {
      return { ...state, name: '' };
    },
  },
});
export const { onInputChangeNameAction, resetNameAction } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
