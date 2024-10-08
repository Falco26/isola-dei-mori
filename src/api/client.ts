import axios, { AxiosInstance } from "axios";

export const axiosApi = axios.create({ baseURL: "https://localhost:5001/" });

export const fakeApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
