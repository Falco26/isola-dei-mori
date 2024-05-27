import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { ApartmentState } from "./types";
import { Apartment } from "../../api/types";
import {
  apartmentResponse,
  imagesResponse,
  videoLink,
} from "../../api/responses";

const initialState: ApartmentState = {
  apartmentsList: apartmentResponse,
  photos: imagesResponse,
  videoLink: videoLink,
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    setApartments: (state, { payload }: PayloadAction<Apartment[]>) => {
      state.apartmentsList = payload;
    },
    setCurrentApartment: (state, { payload }: PayloadAction<Apartment>) => {
      state.currentApartment = payload;
    },
  },
});

export const apartmentActions = {
  initApp: createAction("apartments/init"),
  getApartments: createAction("apartments/getApartments"),
  fetchVideos: createAction("apartments/fetchVideos"),
  fetchPhotos: createAction("apartments/fetchPhotos"),
  ...apartmentsSlice.actions,
};

export default apartmentsSlice.reducer;
