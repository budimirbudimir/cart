import { configureStore } from "@reduxjs/toolkit";
import offersReducer from "../features/offers/offersSlice";

export default configureStore({
  reducer: {
    offers: offersReducer,
  },
});
