import { put, takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../tools/apiFetcher';
import { setUser, getUser } from '../actions/auth';

import * as types from '../actions/auth/types';

export function* fetchUserToken({ username, password }) {
  try {
    // const { data } = yield ApiFetcher.get(
    //   `/users?email=${email}&password=${password}` //for json-server rest
    // );

    const response = yield ApiFetcher('/login', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      credentials: 'same-origin',
      data: {
        username: username,
        password: password
      }
    });

    console.log(response);

    localStorage.setItem('token', response.headers.authorization);
    yield put(getUser(localStorage.getItem('token')));
  } catch (error) {
    if (error.name === 'TypeError') console.log(error); //TODO rework error handling
  }
}

export function* getUserInfo({ token }) {
  try {
    const { data } = yield ApiFetcher.authenticate().get(`/users/current`);
    yield put(setUser(data.name));
  } catch (error) {}
}

export default function* authSaga() {
  yield all([
    takeEvery(types.FETCH_USER, fetchUserToken),
    takeEvery(types.GET_USER, getUserInfo)
  ]);
}
