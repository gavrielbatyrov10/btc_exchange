import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // this should match what it's called in `store.js`
  initialState: 100,
  // A reducer is simply a function that modifies state
  // or returns what the updated value of state should be
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

// Export actions generated by `createSlice` so components can use them
export const { increment, decrement, reset } = counterSlice.actions;

// This reducer is like the middle manager for this slice
const counterReducer = counterSlice.reducer;
export default counterReducer;
