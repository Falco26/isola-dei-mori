import { Apartment } from "../../api/types";
export type Nullable<T> = T | null;

export type ApartmentState = {
  apartmentsList: Apartment[];
  currentApartment?: Apartment;
};

export type ApartmentLink = {
  name: string;
  picture: string;
};
