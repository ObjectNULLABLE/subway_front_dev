import { fork, all } from 'redux-saga/effects';

import fetchSaga from './fetch';
import occupySaga from './occupy';
import releaseSaga from './release';

export default function* rootTrackSaga() {
  yield all([fork(fetchSaga), fork(occupySaga), fork(releaseSaga)]);
}
