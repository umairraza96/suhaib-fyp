import { ClubActionTypes } from "./club.types";

const INITIAL_STATE = {
  clubs: null,
  error: null,
};

const clubReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClubActionTypes.FETCH_CLUB_FAILURE:
      return { ...state, error: action.payload };
    case ClubActionTypes.FETCH_CLUB_SUCCESS:
      return { ...state, clubs: action.payload, error: null };
    default:
      return state;
  }
};

export default clubReducer;
