import { put, takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../tools/apiFetcher';
import { setUser, getUser } from '../actions/auth';

import * as types from '../actions/auth/types';

export function* fetchUserId({ email, password }) {
  try {
    const { data } = yield ApiFetcher.get(
      `/users?email=${email}&password=${password}` //for json-server rest
    );

    // const {data} = yield ApiFetcher.post(`/oauth/token?grant_type=password&username=${email}&password=${password}`)

    localStorage.setItem('userID', data[0].id);
    yield put(getUser(localStorage.getItem('userID')));
  } catch (error) {
    if (error.name === 'TypeError') console.log('USER NOT FOUND'); //TODO rework error handling
  }
}

export function* getUserInfo({ userID }) {
  try {
    const { data } = yield ApiFetcher.get(`/users/${userID}`);
    yield put(setUser(data.name));
  } catch (error) {}
}

export default function* authSaga() {
  yield all([
    takeEvery(types.FETCH_USER, fetchUserId),
    takeEvery(types.GET_USER, getUserInfo)
  ]);
}
