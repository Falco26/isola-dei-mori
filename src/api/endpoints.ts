import { axiosApi } from "./client";
import { Apartment, Photo } from "./types";

export const getApartments = () => {
  console.log("Calling");
  axiosApi.get<Apartment[]>("/appartment/index");
};
export const getVideo = () => {
  axiosApi.get<string>("media/get-outdoor-video");
};
export const getPhotos = () => {
  axiosApi.get<Photo[]>("media/get-outdoor-photo");
};
