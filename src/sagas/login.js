import { put, takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../tools/apiFetcher';
import { setUser } from '../actions/auth';

import * as types from '../actions/auth/types';

export function* loginUser({ email, password }) {
  try {
    const { data } = yield ApiFetcher.get(`/users?email=${email}&password=${password}`);
    yield put(setUser(data[0].name, data[0].id)); //TODO rework data accessing
  } catch (error) {
      console.log("USER NOT FOUND"); //TODO rework error handling
  }

}

export default function* authSaga() {
  yield all([takeEvery(types.FETCH_USER, loginUser)]);
}