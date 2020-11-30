import { createSlice } from "@reduxjs/toolkit";
import {
  OfferProps,
  OffersStateProps,
  GlobalStateProps,
  ReduxActionProps,
} from "../../models/index";

export const initialState: OffersStateProps = {
  list: [
    {
      name: "Bike",
      coverage: { min: 0, max: 3000, current: 1500 },
      risk: 30,
      selected: false,
    },
    {
      name: "Electronics",
      coverage: { min: 500, max: 6000, current: 3000 },
      risk: 35,
      selected: false,
    },
    {
      name: "Jewelry",
      coverage: { min: 500, max: 10000, current: 5000 },
      risk: 5,
      selected: false,
    },
    {
      name: "Sports Equipment",
      coverage: { min: 0, max: 20000, current: 10000 },
      risk: 30,
      selected: false,
    },
  ],
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffers(state: OffersStateProps, action: ReduxActionProps) {
      state.list = action.payload;
    },
    addOffer(state: OffersStateProps, action: ReduxActionProps) {
      state.list.push(action.payload);
    },
    updateOffer(state: OffersStateProps, action: ReduxActionProps) {
      state.list = state.list.map((o: OfferProps) => {
        if (o.name !== action.payload.name) return o;
        else return action.payload;
      });
    },
    deleteOffer(state: OffersStateProps, action: ReduxActionProps) {
      state.list.filter((o: OfferProps) => o.name === action.payload);
    },
  },
});

export const {
  setOffers,
  addOffer,
  updateOffer,
  deleteOffer,
} = offersSlice.actions;

export const selectOffers = (state: GlobalStateProps): OfferProps[] =>
  state.offers.list || [];

export default offersSlice.reducer;
