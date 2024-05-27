import { Apartment, Photo } from "../../api/types";
export type Nullable<T> = T | null;

export type ApartmentState = {
  apartmentsList: Apartment[];
  currentApartment?: Apartment;
  videoLink: Nullable<string>;
  photos: Photo[];
};

export type ApartmentLink = {
  name: string;
  picture: string;
};
