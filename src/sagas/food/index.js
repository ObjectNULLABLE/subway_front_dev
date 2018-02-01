import { fork, all } from 'redux-saga/effects';

import fetchFoodSaga from './fetch-food';

export default function* rootFoodSaga() {
  yield all([fork(fetchFoodSaga)]);
}
