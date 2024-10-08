import { axiosApi, fakeApi } from "./client";
import { Apartment, Photo, Reviews } from "./types";

export const getApartments = () => {
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

export const getReviews = () => {
  return axiosApi.get<Reviews[]>("/review/index").then((res) => res.data);
};

export const getComments = () => {
  return fakeApi.get<any[]>("/comments").then((res) => res.data);
};
