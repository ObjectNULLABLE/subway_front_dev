import { takeEvery, all } from 'redux-saga/effects';
import ApiFetcher from '../../tools/apiFetcher';

import * as types from '../../actions/auth/types';

export function* googleSignUp() {
  try {
    const response = yield ApiFetcher('/login/google', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    yield console.log(response);
  } catch (error) {
    if (error.name === 'TypeError') console.log(error); //TODO rework error handling
  }
}

export default function* googleSignInSaga() {
  yield all([takeEvery(types.GOOGLE_SIGN_UP, googleSignUp)]);
}
