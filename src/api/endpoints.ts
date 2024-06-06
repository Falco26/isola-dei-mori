import { axiosApi } from "./client";
import { Apartment, Photo } from "./types";

export const getApartments = () => {
  console.log("Calling");
  return axiosApi.get<Apartment[]>("/appartment/index").then((res) => res.data);
};
export const getVideo = () => {
  return axiosApi
    .get<string>("media/get-outdoor-video")
    .then((res) => res.data);
};
export const getPhotos = () => {
  return axiosApi
    .get<Photo[]>("media/get-outdoor-photo")
    .then((res) => res.data);
};
