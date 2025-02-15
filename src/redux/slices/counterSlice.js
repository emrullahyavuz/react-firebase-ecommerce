import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 20,
  },
  reducers: {
    arttir: (state) => {
      state.count += 1;
    },
    azalt: (state) => {
      state.count -= 1;
    },
  },
});

export const { arttir, azalt } = counterSlice.actions;
export default counterSlice.reducer;
