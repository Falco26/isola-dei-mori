import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const apartmentsState = (state: RootState) => state.apartments;

export const selectAllApartments = createSelector(
  apartmentsState,
  (state) => state.apartmentsList
);

export const selectCurrentApartment = createSelector(
  apartmentsState,
  (state) => state.currentApartment
);

export const selectApartmentsLink = createSelector(
  selectAllApartments,
  (apartments) => {
    console.log("🚀 ~ apartments:", apartments);
    return apartments.map((apartment) => ({
      name: apartment.appartmentType,
      picture: apartment.photos[0].url,
      navLink: `/${apartment.appartmentType}`,
    }));
  }
);

export const makeSelectApartment = (name: string) => {
  return createSelector(selectAllApartments, (apartments) => {
    const apartment = apartments.find(
      (ap) => ap.appartmentType.toLowerCase() === name
    );
    return apartment;
  });
};
