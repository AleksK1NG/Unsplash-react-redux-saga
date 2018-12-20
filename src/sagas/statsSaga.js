import { put, fork, take, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import {loadImageStats, setImageStats, setImageStatsError} from '../actions';
import { fetchImageStats } from '../api';

export function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadImageStats(id));
      const res = yield call(fetchImageStats, id);
      yield put(setImageStats(id, res.downloads.total));
      console.log('fetching stats for ', id);
      return true;
    } catch (e) {
    }
  }
  yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
  while (true) {
    // fetch images, fork() is non blocking(call is blocking)
    const { images } = yield take(IMAGES.LOAD_SUCCESS);

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}

export default watchStatsRequest;
