
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  onSetIsLoading: ['isLoading'],
});

export const CommonActions = { Types, Creators };
