import { fork, all } from 'redux-saga/effects';

import rootUserSaga from './user';
import rootFoodSaga from './food';
import rootCartSaga from './cart';
import rootTrackSaga from './track';

export default function* rootSaga() {
  yield all([
    fork(rootUserSaga),
    fork(rootFoodSaga),
    fork(rootCartSaga),
    fork(rootTrackSaga)
  ]);
}
