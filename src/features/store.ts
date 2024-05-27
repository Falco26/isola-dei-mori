import createSagaMiddleware from "redux-saga";
import apartmentReducer from "./apartments/reducer";
import { all } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";
import { homeSaga } from "./apartments/sagas";

const rootReducer = {
  apartments: apartmentReducer,
};

function* rootSaga() {
  yield all([homeSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>;
};
