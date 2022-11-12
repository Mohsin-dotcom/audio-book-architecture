import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  onFetchAudioList: ['_'],
  onSetAudioList: ['audioList'],
  onSetTranscribedAudio: ['transcribedAudio'],
});

export const AudioActions = { Types, Creators };
