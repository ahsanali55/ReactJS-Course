import { createSlice } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    currentlyFetching: false,
    fetchDone: false,  // false: Pending true: Done
  },
  reducers: {
    markFetchDone: (state, action) => {

       state.fetchDone = true;
    },
    markFetchingStarted: (state, action) => {

         state.currentlyFetching = true;
    },
    markFetchingFinished: (state, action) => {

         state.currentlyFetching = false;
    }
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;

