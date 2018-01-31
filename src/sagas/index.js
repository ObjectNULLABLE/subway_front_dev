import { fork, all } from 'redux-saga/effects';

import rootUserSaga from './user';
import rootFoodSaga from './food';

export default function* rootSaga() {
  yield all([fork(rootUserSaga), fork(rootFoodSaga)]);
}
