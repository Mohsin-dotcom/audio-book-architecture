import { createReducer } from 'reduxsauce';
import { AudioActions } from '../actions/audioActions';

import { AUDIO_INITIAL_STATE } from './initStates';

const setTranscribedAudio = (state, { transcribedAudio }) => {
  return {
    ...state,
    transcribedAudio,
  };
};


export const AudioReducers = createReducer(AUDIO_INITIAL_STATE, {
  [AudioActions.Types.ON_SET_TRANSCRIBED_AUDIO]: setTranscribedAudio,
});
