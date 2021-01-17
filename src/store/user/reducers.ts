import { initialUserState } from './state';
import { SIGN_IN, SIGN_OUT, UserActionTypes } from './types';

export const userReducer = (state = initialUserState, action: UserActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
