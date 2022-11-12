import { all } from "redux-saga/effects";
import { AudioSagas } from "./audioSagas";


export default function* rootSaga() {
  yield all(
    // All sagas goes here
    ...AudioSagas
  );
}
