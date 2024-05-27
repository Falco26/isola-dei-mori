import { call, put, takeLatest } from "redux-saga/effects";
import { apartmentActions } from "./reducer";
import { Apartment } from "../../api/types";
import { getApartments, getPhotos, getVideo } from "../../api/endpoints";
import { apartmentResponse } from "../../api/responses";
import { log } from "console";

function* getApartmentsSaga() {
  try {
    //const res: Apartment[] = yield call(getApartments);
    //console.log("🚀 ~ function*getApartments ~ res:", res);
    yield put(apartmentActions.setApartments(apartmentResponse));
    console.log("Merda");
  } catch (error) {
    console.log("🚀 ~ function*getApartments ~ error:", error);
  }
}

function* getVideosSaga() {
  try {
    const res: any[] = yield call(getVideo);
    console.log("🚀 ~ function*getVideosSaga ~ res:", res);
  } catch (error) {
    console.log("🚀 ~ function*getVideosSaga ~ error:", error);
  }
}
function* getPhotosSaga() {
  try {
    const res: any[] = yield call(getPhotos);
    console.log("🚀 ~ function*getPhotosSaga ~ res:", res);
  } catch (error) {
    console.log("🚀 ~ function*getVideosSaga ~ error:", error);
  }
}

function* initSaga() {
  //   yield call(getApartments);
  //   yield call(getPhotosSaga);
  //   yield call(getVideosSaga);
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
