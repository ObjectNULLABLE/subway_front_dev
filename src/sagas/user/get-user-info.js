import { put, takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../../tools/apiFetcher';
import { setUser } from '../../actions/auth';

import * as types from '../../actions/auth/types';

export function* getUser({ token }) {
  try {
    const { data } = yield ApiFetcher.authenticate().get(`/users/current`);
    yield put(setUser(data.name));
  } catch (error) {}
}

export default function* userProfileSaga() {
  yield all([takeEvery(types.GET_USER, getUser)]);
}
