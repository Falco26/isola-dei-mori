import { call, put, takeLatest, retry, all } from "redux-saga/effects";
import { apartmentActions } from "./reducer";
import { Apartment, Photo, Reviews } from "../../api/types";
import {
  getApartments,
  getPhotos,
  getReviews,
  getVideo,
} from "../../api/endpoints";

const RETRY_LIMIT = 2;
const RETRY_DELAY = 2000; // 2 seconds delay between retries

function* getApartmentsSaga() {
  try {
    const res: Apartment[] = yield retry(
      RETRY_LIMIT,
      RETRY_DELAY,
      getApartments
    );
    yield put(apartmentActions.setApartments(res));
  } catch (error) {
    yield put(apartmentActions.toggleError(true));
    console.log("🚀 ~ function*getApartmentsSaga ~ error:", error);
  }
}

function* getVideosSaga() {
  try {
    const res: string = yield retry(RETRY_LIMIT, RETRY_DELAY, getVideo);
    yield put(apartmentActions.setVideoLink(res));
  } catch (error) {
    yield put(apartmentActions.toggleError(true));
    console.log("🚀 ~ function*getVideosSaga ~ error:", error);
  }
}

function* getPhotosSaga() {
  try {
    const res: Photo[] = yield retry(RETRY_LIMIT, RETRY_DELAY, getPhotos);
    yield put(apartmentActions.setPhotoContent(res));
  } catch (error) {
    yield put(apartmentActions.toggleError(true));
  }
}

function* getReviewsSaga() {
  try {
    const res: Reviews[] = yield retry(RETRY_LIMIT, RETRY_DELAY, getReviews);
    yield put(apartmentActions.setReviews(res));
  } catch (error) {
    yield put(apartmentActions.toggleError(true));
    console.log("🚀 ~ function*getReviewsSaga ~ error:", error);
  }
}

function* initSaga() {
  yield put(apartmentActions.toggleLoading(true));

  yield all([getApartmentsSaga, getPhotosSaga, getVideosSaga, getReviewsSaga]);

  yield put(apartmentActions.toggleLoading(false));
}

export function* homeSaga() {
  yield takeLatest(
    apartmentActions.getApartments.toString(),
    getApartmentsSaga
  );
  yield takeLatest(apartmentActions.fetchPhotos.toString(), getVideosSaga);
  yield takeLatest(apartmentActions.fetchVideos.toString(), getPhotosSaga);
  yield takeLatest(apartmentActions.initApp.toString(), initSaga);
  yield takeLatest(apartmentActions.fetchReviews.toString(), getReviewsSaga);
}
