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
  (apartments) =>
    apartments.map((apartment) => ({
      name: apartment.name,
      picture: apartment.images[0].source,
      navLink: `/${apartment.name}`,
    }))
);

export const makeSelectApartment = (name: string) => {
  return createSelector(selectAllApartments, (apartments) => {
    const apartment = apartments.find((ap) => ap.name.toLowerCase() === name);
    return apartment;
  });
};
