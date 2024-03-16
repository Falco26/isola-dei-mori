import { Apartment } from "../../api/endpoints";
export type Nullable<T> = T | null;

export type ApartmentState = {
  apartmentsList: Apartment[];
  currentApartment: Nullable<Apartment>;
};
