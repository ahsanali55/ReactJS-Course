import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./ItemSlice"
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";


const itemStore = configureStore({

    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
    }
});
export default itemStore;
