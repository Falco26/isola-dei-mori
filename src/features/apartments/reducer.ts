import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { ApartmentState } from "./types";
import { Apartment, Photo } from "../../api/types";

const initialState: ApartmentState = {
  apartmentsList: [],
  photos: [],
  videoLink: null,
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
    setVideoLink: (state, { payload }: PayloadAction<string>) => {
      state.videoLink = payload;
    },
    setPhotoContent: (state, { payload }: PayloadAction<Photo[]>) => {
      state.photos = payload;
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
