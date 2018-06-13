import { takeEvery, all } from "redux-saga/effects";
import apiFetcher from "../../tools/apiFetcher";

import * as types from "../../actions/track/types";

export function* release({ trackArray }) {
  try {
    console.log(trackArray);
    yield apiFetcher
      .authenticate()
      .patch("users/current/order/tracks", trackArray);
  } catch (error) {
    console.error(error);
  }
}

export default function* releaseSaga() {
  yield all([takeEvery(types.RELEASE_TRACKS, release)]);
}
