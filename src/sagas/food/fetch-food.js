import { put, takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../../tools/apiFetcher';
import { setFood } from '../../actions/food';

import * as types from '../../actions/food/types';

export function* fetchFood() {
  const { data } = yield ApiFetcher.get('/food');
  yield put(setFood(data));
}

export default function* fetchFoodSaga() {
  yield all([takeEvery(types.FETCH_FOOD, fetchFood)]);
}
