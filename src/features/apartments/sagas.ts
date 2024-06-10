import { call, put, takeLatest } from "redux-saga/effects";
import { apartmentActions } from "./reducer";
import { Apartment, Photo } from "../../api/types";
import { getApartments, getPhotos, getVideo } from "../../api/endpoints";

function* getApartmentsSaga() {
  try {
    const res: Apartment[] = yield call(getApartments);
    yield put(apartmentActions.setApartments(res));
  } catch (error) {
    console.log("🚀 ~ function*getApartments ~ error:", error);
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
    const res: Photo[] = yield call(getPhotos);
    yield put(apartmentActions.setPhotoContent(res));
  } catch (error) {
    console.log("🚀 ~ function*getVideosSaga ~ error:", error);
  }
}

function* initSaga() {
  // yield call(getApartmentsSaga);
  // yield call(getPhotosSaga);
  // yield call(getVideosSaga);
}

export function* homeSaga() {
  yield takeLatest(
    apartmentActions.getApartments.toString(),
    getApartmentsSaga
  );
  yield takeLatest(apartmentActions.fetchPhotos.toString(), getVideosSaga);
  yield takeLatest(apartmentActions.fetchVideos.toString(), getPhotosSaga);
  yield takeLatest(apartmentActions.initApp.toString(), initSaga);
}
