import { put, takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../../tools/apiFetcher';
import { fetchUserToken } from '../../actions/auth';

import * as types from '../../actions/auth/types';

export function* signUpUser(userCreds) {
  try {
    const response = yield ApiFetcher('/registration', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        ...userCreds
      }
    });

    yield console.log(response);

    yield put(fetchUserToken(userCreds.username, userCreds.password));
  } catch (error) {
    if (error.name === 'TypeError') console.log(error); //TODO rework error handling
  }
}

export default function* registrationSaga() {
  yield all([takeEvery(types.SIGN_UP_USER, signUpUser)]);
}
