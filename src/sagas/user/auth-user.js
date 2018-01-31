import { put, takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../../tools/apiFetcher';
import { getUser } from '../../actions/auth';

import * as types from '../../actions/auth/types';

export function* fetchUserToken({ username, password }) {
  try {
    const response = yield ApiFetcher('/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        username: username,
        password: password
      }
    });

    localStorage.setItem('token', response.headers.authorization);
    yield put(getUser(localStorage.getItem('token')));
  } catch (error) {
    if (error.name === 'TypeError') console.log(error); //TODO rework error handling
  }
}

export default function* authSaga() {
  yield all([takeEvery(types.FETCH_USER_TOKEN, fetchUserToken)]);
}
