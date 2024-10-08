import { call, put, takeLatest } from "redux-saga/effects";
import { apartmentActions } from "./reducer";
import { Apartment, Photo, Reviews } from "../../api/types";
import {
  getApartments,
  getComments,
  getPhotos,
  getReviews,
  getVideo,
} from "../../api/endpoints";

function* getApartmentsSaga() {
  try {
    yield put(apartmentActions.toggleLoading(true));
    const res: Apartment[] = yield call(getApartments);

    yield put(apartmentActions.setApartments(res));
  } catch (error) {
    yield put(apartmentActions.toggleLoading(false));
    console.log("🚀 ~ function*getApartments ~ error:", error);
  } finally {
    yield put(apartmentActions.toggleLoading(false));
  }
}

function* getVideosSaga() {
  try {
    const res: string = yield call(getVideo);
    yield put(apartmentActions.setVideoLink(res));
  } catch (error) {
    console.log("🚀 ~ function*getVideosSaga ~ error:", error);
  }
}

function* getPhotosSaga() {
  try {
    yield put(apartmentActions.toggleLoading(true));
    const res: Photo[] = yield call(getPhotos);
    yield put(apartmentActions.setPhotoContent(res));
  } catch (error) {
    yield put(apartmentActions.toggleLoading(false));
    console.log("🚀 ~ function*getVideosSaga ~ error:", error);
  } finally {
    yield put(apartmentActions.toggleLoading(false));
  }
}

function* getReviewsSaga() {
  try {
    const res: Reviews[] = yield call(getReviews);
    yield put(apartmentActions.setReviews(res));
  } catch (error) {
    console.log("🚀 ~ function*getVideosSaga ~ error:", error);
  }
}

function* initSaga() {
  //  yield call(getApartmentsSaga);
  //  yield call(getPhotosSaga);
  // // yield call(getVideosSaga);
  // yield call(getReviewsSaga);
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
