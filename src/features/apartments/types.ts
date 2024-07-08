import { Apartment, Photo, Reviews } from "../../api/types";
export type Nullable<T> = T | null;

export type ApartmentState = {
  apartmentsList: Apartment[];
  currentApartment?: Apartment;
  videoLink: Nullable<string>;
  photos: Photo[];
  reviews: Nullable<Reviews[]>;
};

export type ApartmentLink = {
  name: string;
  picture: string;
};
