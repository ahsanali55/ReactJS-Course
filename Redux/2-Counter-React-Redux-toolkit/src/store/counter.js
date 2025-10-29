import { createSlice } from "@reduxjs/toolkit";

// CounterSlice
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  // Set of reducers
  reducers: {
    //actions at below these
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

export default counterSlice;
export const counterActions = counterSlice.actions;