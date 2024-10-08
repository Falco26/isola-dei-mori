import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { imagesResponse } from "../../api/responses";

export const apartmentsState = (state: RootState) => state.apartments;

export const selectAllApartments = createSelector(
  apartmentsState,
  (state) => state.apartmentsList
);

export const selectCurrentApartment = createSelector(
  apartmentsState,
  (state) => state.currentApartment
);

export const selectAllContent = createSelector(
  apartmentsState,
  (state) => state?.photos || imagesResponse
);

export const selectVideoContent = createSelector(
  apartmentsState,
  (state) => state.videoLink
);

export const selectApartmentsLink = createSelector(
  selectAllApartments,
  (apartments) => {
    return apartments?.map((apartment) => ({
      name: apartment.appartmentTypeIT,
      picture: apartment.photos[0].url,
      navLink: `${apartment.appartmentTypeIT}`,
    }));
  }
);

export const makeSelectApartment = (name: string) => {
  return createSelector(selectAllApartments, (apartments) => {
    const apartment = apartments?.find(
      (ap) => ap.appartmentTypeIT.toLowerCase() === name
    );
    return apartment;
  });
};

export const selectReviews = createSelector(
  apartmentsState,
  (state) => state.reviews
);

export const selectIsLoading = createSelector(
  apartmentsState,
  (state) => state.isLoading
);
export const selectError = createSelector(
  apartmentsState,
  (state) => state.errorAPI
);
