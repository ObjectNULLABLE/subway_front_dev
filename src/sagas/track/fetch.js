import { put, takeEvery, all } from 'redux-saga/effects';
import apiFetcher from '../../tools/apiFetcher';
import { setTracks } from '../../actions/track';

import * as types from '../../actions/track/types';

export function* fetch({ date }) {
  console.log(date);
  try {
    const { data } = yield apiFetcher.get(`/tracks/${date}`);
    yield put(setTracks(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* fetchSaga() {
  yield all([takeEvery(types.FETCH_TRACKS, fetch)]);
}
