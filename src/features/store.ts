import createSagaMiddleware from "redux-saga";
import apartmentReducer from "./apartments/reducer";
import { all } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  apartments: apartmentReducer,
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>;
};
