import {
  takeEvery,
  put,
  call,
  select,
} from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setError, setImages } from '../actions';

// // Watcher Saga
// export function* rootSaga() {
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }
//
// // Watcher Saga -> actions -> worker saga
//
// function* handleImagesLoad() {
//     console.log('Fetching images from unsplash.com ... ');
// }

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    console.log('from SAGA', images);
    yield put(setImages(images));
  } catch (e) {
    yield setError(e.message.toString());
  }
}

export const getPage = state => state.nextPage.page;

/*
select - selector from state,
call - call(function, ...args) // call function with args parameters
put - dispatch redux action
* */
