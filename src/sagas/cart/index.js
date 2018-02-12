import { fork, all } from 'redux-saga/effects';

import approveCartSaga from './approve-cart';

export default function* rootCartSaga() {
  yield all([fork(approveCartSaga)]);
}
