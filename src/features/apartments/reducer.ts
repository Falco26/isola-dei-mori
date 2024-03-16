import { createSlice } from "@reduxjs/toolkit";
import { apartments } from "../../api/mocks";

const initialState: any = {
  apartmentsList: apartments,
  currentApartment: null,
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {},
});

export const apartmentActions = {
  ...apartmentsSlice.actions,
};

export default apartmentsSlice.reducer;
