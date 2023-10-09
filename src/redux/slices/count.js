import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const count = createSlice({
  name: 'count',
  initialState,
  reducers: {
    updateCountAction: (state, { payload }) => {
      state.count = payload;
    },
  },
});

export const {
  actions: { updateCountAction, },
  reducer: countReducer,
} = count;