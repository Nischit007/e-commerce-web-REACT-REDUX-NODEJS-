import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice"
import fetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./bagSlice";
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetch:fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
  }
});

export default myntraStore;