import { takeEvery, all } from 'redux-saga/effects';
import apiFetcher from '../../tools/apiFetcher';

import * as types from '../../actions/track/types';

export function* release({ date, time, trackId }) {
  try {
    console.log(date, time);
    yield apiFetcher.authenticate().patch('users/current/order/tracks/delete', {
      date,
      time,
      trackId
    });
  } catch (error) {
    console.error(error);
  }
}

export default function* releaseSaga() {
  yield all([takeEvery(types.RELEASE_TRACKS, release)]);
}
