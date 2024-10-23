import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { ApartmentState } from "./types";
import { Apartment, Photo, Reviews } from "../../api/types";
import {
  apartmentResponse,
  imagesResponse,
  videoLink,
} from "../../api/responses";
import { reviewsMock } from "../../api/mocks";

const initialState: ApartmentState = {
  apartmentsList: apartmentResponse,
  photos: imagesResponse,
  videoLink: videoLink,
  reviews: reviewsMock,
  isLoading: false,
  errorAPI: false,
  language: "it",
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
    setReviews: (state, { payload }: PayloadAction<Reviews[]>) => {
      state.reviews = payload;
    },
    toggleLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    toggleError: (state, { payload }: PayloadAction<boolean>) => {
      state.errorAPI = payload;
    },
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.language = payload;
    },
  },
});

export const apartmentActions = {
  initApp: createAction("apartments/init"),
  getApartments: createAction("apartments/getApartments"),
  fetchVideos: createAction("apartments/fetchVideos"),
  fetchPhotos: createAction("apartments/fetchPhotos"),
  fetchReviews: createAction("apartments/fetchReviews"),
  ...apartmentsSlice.actions,
};

export default apartmentsSlice.reducer;
