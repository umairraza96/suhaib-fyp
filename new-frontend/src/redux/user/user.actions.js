import { UserActionTypes } from "./user.types";


export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = () => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
});

export const signUpSuccess = (user) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = () => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
});
