import { takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../../tools/apiFetcher';

import * as types from '../../actions/cart/types';

export function* approveCart({ order }) {
  try {
    yield ApiFetcher.authenticate().post('users/current/order/food', order);
    yield console.log('send cart');
  } catch (error) {
    console.log(error);
  }
}
export default function* approveCartSaga() {
  yield all([takeEvery(types.APPROVE_CART, approveCart)]);
}
