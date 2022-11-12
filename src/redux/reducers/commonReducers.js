import { createReducer } from 'reduxsauce';
import { CommonActions } from '../actions/CommonActions';

import { COMMON_INITIAL_STATE } from './initStates';

const setIsLoading = (state, { isLoading }) => {
  return {
    ...state,
    isLoading,
  };
};

export const CommonReducers = createReducer(COMMON_INITIAL_STATE, {
  [CommonActions.Types.ON_SET_IS_LOADING]: setIsLoading,

});
