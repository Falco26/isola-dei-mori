import { Apartment, Photo, Reviews } from "../../api/types";
export type Nullable<T> = T | null;

export type ApartmentState = {
  apartmentsList: Nullable<Apartment[]>;
  currentApartment?: Nullable<Apartment>;
  videoLink: Nullable<string>;
  photos: Nullable<Photo[]>;
  reviews: Nullable<Reviews[]>;
  isLoading: boolean;
  errorAPI: boolean;
  language: string;
};

export type ApartmentLink = {
  name: string;
  picture: string;
};
