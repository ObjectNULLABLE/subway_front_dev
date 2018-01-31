import { fork, all } from 'redux-saga/effects';

import authSaga from './auth-user';
import userProfileSaga from './get-user-info';
import registrationSaga from './sign-up';

export default function* rootUserSaga() {
  yield all([fork(authSaga), fork(userProfileSaga), fork(registrationSaga)]);
}
