import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { apartments } from "../../api/mocks";
import { ApartmentState } from "./types";
import { Apartment } from "../../api/endpoints";

const initialState: ApartmentState = {
  apartmentsList: apartments,
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    setCurrentApartment: (state, { payload }: PayloadAction<Apartment>) => {
      state.currentApartment = payload;
    },
  },
});

export const apartmentActions = {
  ...apartmentsSlice.actions,
};

export default apartmentsSlice.reducer;
