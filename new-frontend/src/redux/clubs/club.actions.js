import { ClubActionTypes } from "./club.types";

export const fetchClubSuccess = (clubs) => ({
  type: ClubActionTypes.FETCH_CLUB_SUCCESS,
  payload: clubs,
});

export const fetchClubFailure = (error) => ({
  type: ClubActionTypes.fetchClubFailure,
  payload: error,
});

// export const checkUserSession = () => ({
//   type: UserActionTypes.CHECK_USER_SESSION,
// });

// export const signOutSuccess = () => ({
//   type: UserActionTypes.SIGN_OUT_SUCCESS,
// });

// export const signOutFailure = () => ({
//   type: UserActionTypes.SIGN_OUT_FAILURE,
// });

// export const signUpSuccess = (user) => ({
//   type: UserActionTypes.SIGN_UP_SUCCESS,
//   payload: user,
// });

// export const signUpFailure = () => ({
//   type: UserActionTypes.SIGN_UP_FAILURE,
// });
