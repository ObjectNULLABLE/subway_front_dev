import { fork, all } from 'redux-saga/effects';

import rootUserSaga from './user';
import rootFoodSaga from './food';
import rootCartSaga from './cart';

export default function* rootSaga() {
  yield all([fork(rootUserSaga), fork(rootFoodSaga), fork(rootCartSaga)]);
}
