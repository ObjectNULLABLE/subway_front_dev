import { takeEvery, all, put } from 'redux-saga/effects';
import apiFetcher from '../../tools/apiFetcher';
import { setOccupyedTracks } from '../../actions/track';

import * as types from '../../actions/track/types';

export function* occupy({ date, time, trackId }) {
  try {
    yield apiFetcher.authenticate().post('users/current/order/tracks', {
      date,
      time,
      trackId
    });
    yield put(setOccupyedTracks({ date, time, trackId }));
  } catch (error) {
    console.error(error);
  }
}

export default function* occupySaga() {
  yield all([takeEvery(types.OCCUPY_TRACKS, occupy)]);
}
