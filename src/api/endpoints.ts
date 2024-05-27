import { axiosApi } from "./client";
import { Apartment } from "./types";

export const getApartments = () => {
  console.log("Calling");
  axiosApi.get<Apartment[]>("/appartment/index");
};
export const getVideos = () => {
  axiosApi.get<string>("media/get-outdoor-video");
};
export const getPhotos = () => {
  axiosApi.get<string>("media/get-outdoor-photo");
};
