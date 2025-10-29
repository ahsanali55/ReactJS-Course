import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";


// create store
const counterStore = configureStore({
  reducer: {
    // slices
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;