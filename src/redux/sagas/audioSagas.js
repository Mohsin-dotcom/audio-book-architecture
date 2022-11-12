import { put, call, takeEvery } from "redux-saga/effects";

import { AudioActions} from "../actions/audioActions";
import { CommonActions } from "../actions/CommonActions";

function* onTranscribeAudio({ payload }) {

  //set loading to true
  yield put({ type: CommonActions.Types.ON_SET_IS_LOADING, isLoading: true });
  try {
    //api call
    const response = yield call(api.TranscribeAudio, payload);
    if (response.ok) {
      //set the response to the state
      yield put({ type: AudioActions.Types.ON_SET_TRANSCRIBED_AUDIO, transcribeAudio: response.data.payload, });
    } 
  } catch (error) {
    //can handle the error states in catch clause
    throw new Error();
  }
  yield put({ type: CommonActions.Types.ON_SET_IS_LOADING, isLoading: false });
}


export function* AudioSagas() {
  takeEvery(GET_TRANSCRIBED_AUDIO, onTranscribeAudio);
}